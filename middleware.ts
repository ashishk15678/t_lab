import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    if (request.url == "http://localhost:3000/") {
        return NextResponse.redirect(new URL("http://localhost:3000/apps"))
    }

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/:path*',
} 