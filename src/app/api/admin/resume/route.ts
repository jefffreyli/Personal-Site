/**
 * Resume upload endpoint for admin mode. Accepts a multipart form with a "file"
 * field, checks the session cookie and that the file really is a PDF, stores it
 * in Vercel Blob, removes older uploads and refreshes the /resume page.
 */
import { del, list, put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, isValidSessionToken } from "@/lib/adminSession";
import { RESUME_PREFIX, isBlobConfigured } from "@/lib/resume";

// Vercel rejects request bodies over 4.5 MB, so stay under that.
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const PDF_MAGIC = "%PDF-";

/**
 * Builds a JSON error response.
 *
 * @param message error shown to the admin
 * @param status HTTP status code
 * @returns the response
 */
function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: NextRequest) {
  if (!isValidSessionToken(request.cookies.get(SESSION_COOKIE)?.value)) {
    return errorResponse("Not logged in.", 401);
  }
  if (!isBlobConfigured()) {
    return errorResponse(
      "Uploads aren't configured. Set BLOB_READ_WRITE_TOKEN.",
      503
    );
  }

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) {
    return errorResponse("Choose a PDF to upload.", 400);
  }
  if (file.size > MAX_FILE_BYTES) {
    return errorResponse("PDF must be 4 MB or smaller.", 413);
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  if (bytes.subarray(0, PDF_MAGIC.length).toString("latin1") !== PDF_MAGIC) {
    return errorResponse("That file isn't a PDF.", 400);
  }

  let url: string;
  try {
    // A random suffix gives each upload a fresh URL, so CDN caches never serve an old resume.
    const blob = await put(`${RESUME_PREFIX}resume.pdf`, bytes, {
      access: "public",
      addRandomSuffix: true,
      contentType: "application/pdf",
    });
    url = blob.url;
  } catch (err) {
    console.error("Error uploading resume:", err);
    return errorResponse("Upload to storage failed. Try again.", 502);
  }

  revalidatePath("/resume");
  await deleteOlderResumes(url);
  return NextResponse.json({ url });
}

/**
 * Deletes old uploads, keeping the newest one and the one before it, since a
 * cached page may still point at the previous URL until /resume regenerates.
 * Failures are only logged because the new resume is already live.
 *
 * @param newUrl URL of the upload that just finished
 */
async function deleteOlderResumes(newUrl: string) {
  try {
    const { blobs } = await list({ prefix: RESUME_PREFIX });
    const oldUrls = blobs
      .filter((existing) => existing.url !== newUrl)
      .sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime())
      .slice(1)
      .map((existing) => existing.url);
    if (oldUrls.length > 0) {
      await del(oldUrls);
    }
  } catch (err) {
    console.error("Error deleting old resumes:", err);
  }
}
