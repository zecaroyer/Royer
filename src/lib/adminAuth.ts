// Server-only module — credential check and session-cookie helpers for the
// admin gate. Never import this from a "use client" file: the values here
// must not end up in a browser-shipped JS bundle.
//
// There is no backend/database yet (see README "Deployment notes"), so this
// is a draft-stage access gate, not a production authentication system: a
// single shared admin/password pair behind one unsigned session cookie, with
// no per-user accounts, rate limiting, or audit log. It keeps casual visitors
// out of internal/financial content; it is not a substitute for real auth
// once there's anything genuinely sensitive to protect.
import { cookies } from "next/headers";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@royer.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "Royer2026";

export const ADMIN_COOKIE_NAME = "royer_admin";
const ADMIN_COOKIE_VALUE = process.env.ADMIN_SESSION_TOKEN ?? "royer-admin-session-2026";
const ADMIN_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

export function verifyAdminCredentials(email: string, password: string): boolean {
  return email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD;
}

export function isAdminCookieValue(value: string | undefined): boolean {
  return value === ADMIN_COOKIE_VALUE;
}

export function adminCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE_SECONDS,
  };
}

export function adminCookieValue() {
  return ADMIN_COOKIE_VALUE;
}

export async function isAdminSession(): Promise<boolean> {
  const store = await cookies();
  return isAdminCookieValue(store.get(ADMIN_COOKIE_NAME)?.value);
}
