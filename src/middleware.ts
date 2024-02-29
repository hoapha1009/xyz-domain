import { NextRequest, NextResponse } from 'next/server';


export async function middleware(req: NextRequest) {
    let homePage = '';
    const { nextUrl } = req
    console.log("🚀 ~ middleware ~ nextUrl:", nextUrl)

    if (nextUrl.hostname.includes('abc-domain')) {
        homePage = 'abc';
    } else if (nextUrl.hostname.includes('xyz-domain')) {
        homePage = 'xyz';
    }
    else if (nextUrl.hostname.includes('localhost')) {
        homePage = 'default';
    }
    console.log("🚀 ~ middleware ~ homePage:", homePage)

    // Set a custom header or cookie
    const requestHeader = new Headers(req.headers);
    requestHeader.set('homePage', homePage);
    const response = NextResponse.next({
        request: {
            headers: requestHeader,
        }
    });
    response.cookies.set('homePage', homePage, {
        sameSite: 'lax',
        maxAge: 30,
    });

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}