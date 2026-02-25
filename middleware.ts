import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const redirects: Record<string, string> = {
  "/": "/en",
  "/instructors": "/en/instructors",
  "/pricing": "/en/pricing",
  "/recruit": "/en/recruit",
  "/reviews": "/en/reviews",
  "/contact": "/en/contact",
  "/legal": "/en/legal",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const redirectTo = redirects[pathname];
  if (redirectTo) {
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  return NextResponse.next();
}
