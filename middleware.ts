import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    const isLoggedIn = request.cookies.get("authenticated")?.value === "true"

    if (!isLoggedIn && pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(
            new URL("/login", request.url)
        )
    }

    if (isLoggedIn && pathname.startsWith("/login")) {
        return NextResponse.redirect(
            new URL("/dashboard/users", request.url)
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/login"
    ]
}