/**
 * Where the resume PDF lives. Uploads from admin mode go to Vercel Blob under
 * RESUME_PREFIX, and the newest one wins. Without a Blob token (e.g. local dev)
 * or before the first upload, the PDF bundled in /public is used instead.
 */
import { list } from "@vercel/blob";

export const RESUME_PREFIX = "resume/";
export const FALLBACK_RESUME_URL = "/Li_Jeffrey_Resume_ft.docx.pdf";

/**
 * Reports whether resume uploads can be stored.
 *
 * @returns true if a Vercel Blob token is configured
 */
export function isBlobConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

/**
 * Finds the URL of the current resume.
 *
 * @returns the newest uploaded resume's URL, or the bundled fallback
 */
export async function getResumeUrl(): Promise<string> {
  if (!isBlobConfigured()) {
    return FALLBACK_RESUME_URL;
  }
  try {
    const { blobs } = await list({ prefix: RESUME_PREFIX });
    const newest = blobs.reduce<(typeof blobs)[number] | undefined>(
      (latest, blob) =>
        !latest || blob.uploadedAt > latest.uploadedAt ? blob : latest,
      undefined
    );
    return newest?.url ?? FALLBACK_RESUME_URL;
  } catch (err) {
    console.error("Error listing resume blobs:", err);
    return FALLBACK_RESUME_URL;
  }
}
