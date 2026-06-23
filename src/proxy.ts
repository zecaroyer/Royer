import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE_NAME, isAdminCookieValue } from "@/lib/adminAuth";

const PRIVATE_PAGE_PREFIXES = [
  "/formulas",
  "/investors",
  "/laboratory",
  "/compliance",
  "/costs",
  "/traceability",
  "/sops",
  "/site-map",
];

// The four root dossiers carry the same internal/financial detail as the
// pages above and are served as plain static files under public/ — gate
// them too, or the page-level gate is trivially bypassed by direct download.
const PRIVATE_FILES = [
  "/PROJECT_DOSSIER.md",
  "/FORMULATION_DOSSIER.md",
  "/INVESTMENT_PLAN.md",
  "/SOP_MANUFACTURING.md",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPrivate =
    PRIVATE_FILES.includes(pathname) ||
    PRIVATE_PAGE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));

  if (!isPrivate) return NextResponse.next();
  if (isAdminCookieValue(request.cookies.get(ADMIN_COOKIE_NAME)?.value)) return NextResponse.next();

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/formulas/:path*",
    "/investors/:path*",
    "/laboratory/:path*",
    "/compliance/:path*",
    "/costs/:path*",
    "/traceability/:path*",
    "/sops/:path*",
    "/site-map/:path*",
    "/PROJECT_DOSSIER.md",
    "/FORMULATION_DOSSIER.md",
    "/INVESTMENT_PLAN.md",
    "/SOP_MANUFACTURING.md",
  ],
};
