/**
 * Admin session endpoint. GET reports whether the caller is logged in, POST
 * logs in with { password }, and DELETE logs out by clearing the cookie.
 */
import { NextRequest, NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  checkPassword,
  createSessionToken,
  isAdminConfigured,
  isValidSessionToken,
} from "@/lib/adminSession";

// Slows down password guessing a little; real protection is a strong password.
const FAILED_LOGIN_DELAY_MS = 1000;

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/api/admin",
};

export async function GET(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  return NextResponse.json({ loggedIn: isValidSessionToken(token) });
}

export async function POST(request: NextRequest) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin mode isn't configured. Set ADMIN_PASSWORD." },
      { status: 503 }
    );
  }

  const body: unknown = await request.json().catch(() => null);
  const password =
    typeof body === "object" && body !== null && "password" in body
      ? body.password
      : undefined;

  if (typeof password !== "string" || !checkPassword(password)) {
    await new Promise((resolve) => setTimeout(resolve, FAILED_LOGIN_DELAY_MS));
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  const response = NextResponse.json({ loggedIn: true });
  response.cookies.set(SESSION_COOKIE, createSessionToken(), {
    ...cookieOptions,
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ loggedIn: false });
  response.cookies.set(SESSION_COOKIE, "", { ...cookieOptions, maxAge: 0 });
  return response;
}
