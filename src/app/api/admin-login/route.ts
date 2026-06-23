import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, adminCookieOptions, adminCookieValue, verifyAdminCredentials } from "@/lib/adminAuth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!verifyAdminCredentials(email, password)) {
    return NextResponse.json({ ok: false, error: "Invalid email or password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE_NAME, adminCookieValue(), adminCookieOptions());
  return response;
}
