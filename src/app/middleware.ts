import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role");
  console.log("token", token);
  console.log("role", role);
  const { pathname } = req.nextUrl;

  // Public routes (login, register, home)
  const publicRoutes = ["/login", "/register", "/"];

  
  if (!token && (pathname.startsWith("/dashboard") || pathname.startsWith("/admin"))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // if login and go to login and register → redirect to dashboard/admin
  if (token && publicRoutes.includes(pathname)) {
    if (role === "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    } else {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  if (role === "user" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*", "/admin/:path*"],
};
