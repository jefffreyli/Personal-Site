/**
 * Server-only helpers for the admin login. The password comes from the
 * ADMIN_PASSWORD env var. A successful login gets a cookie holding an expiry
 * time and an HMAC of it keyed by the password, so sessions need no storage and
 * changing the password logs every session out.
 */
import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE = "admin_session";
export const SESSION_MAX_AGE_SECONDS = 8 * 60 * 60;

/**
 * Reads the admin password from the environment.
 *
 * @returns the password, or undefined if admin mode isn't configured
 */
function getPassword(): string | undefined {
  return process.env.ADMIN_PASSWORD || undefined;
}

/**
 * Compares two strings in constant time, regardless of their lengths.
 *
 * @param a first string
 * @param b second string
 * @returns true if they are equal
 */
function safeEqual(a: string, b: string): boolean {
  const hashA = createHash("sha256").update(a).digest();
  const hashB = createHash("sha256").update(b).digest();
  return timingSafeEqual(hashA, hashB);
}

/**
 * Signs an expiry time with the admin password.
 *
 * @param expiresAt expiry as milliseconds since the epoch
 * @param password key for the HMAC
 * @returns hex signature
 */
function sign(expiresAt: number, password: string): string {
  return createHmac("sha256", password)
    .update(`admin-session:${expiresAt}`)
    .digest("hex");
}

/**
 * Reports whether admin mode has a password configured.
 *
 * @returns true if ADMIN_PASSWORD is set
 */
export function isAdminConfigured(): boolean {
  return getPassword() !== undefined;
}

/**
 * Checks a submitted password.
 *
 * @param attempt the submitted password
 * @returns true if it matches ADMIN_PASSWORD
 */
export function checkPassword(attempt: string): boolean {
  const password = getPassword();
  return password !== undefined && safeEqual(attempt, password);
}

/**
 * Creates a session token that expires after SESSION_MAX_AGE_SECONDS.
 *
 * @returns the token to store in the session cookie
 * @throws Error if ADMIN_PASSWORD is not set
 */
export function createSessionToken(): string {
  const password = getPassword();
  if (password === undefined) {
    throw new Error("ADMIN_PASSWORD is not set");
  }
  const expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  return `${expiresAt}.${sign(expiresAt, password)}`;
}

/**
 * Validates a session token from the cookie.
 *
 * @param token cookie value, if any
 * @returns true if the token is well formed, unexpired and correctly signed
 */
export function isValidSessionToken(token: string | undefined): boolean {
  const password = getPassword();
  if (!token || password === undefined) {
    return false;
  }
  const [expiry, signature] = token.split(".");
  const expiresAt = Number(expiry);
  if (!signature || !Number.isFinite(expiresAt) || expiresAt < Date.now()) {
    return false;
  }
  return safeEqual(signature, sign(expiresAt, password));
}
