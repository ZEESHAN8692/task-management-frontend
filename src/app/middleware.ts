import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role");
  const { pathname } = req.nextUrl;

  // Public routes (login, register, home)
  const publicRoutes = ["/login", "/register", "/"];

  // Agar login nahi hai aur protected route khol raha hai
  if (!token && (pathname.startsWith("/dashboard") || pathname.startsWith("/admin"))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Agar login hai aur user login/register pe jata hai → redirect to dashboard/admin
  if (token && publicRoutes.includes(pathname)) {
    if (role === "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    } else {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  // Agar user hai aur admin route khol raha hai
  if (role === "user" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

// ✅ Middleware kin routes pe chalega
export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*", "/admin/:path*"],
};
