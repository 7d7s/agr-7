import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy for URL Redirects - Next.js 16.0.7
 * Handles common alternative URLs and redirects to canonical paths
 * 
 * Note: In Next.js 16, middleware has been renamed to proxy
 * to better reflect its purpose as a network boundary
 */

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Define redirect mappings (alternative URLs → canonical URLs)
    const redirects: Record<string, string> = {
        // Appointment variations
        '/appointment': '/book-appointment',
        '/appointments': '/book-appointment',
        '/booking': '/book-appointment',
        '/schedule': '/book-appointment',

        // Services variations
        '/service': '/services',
        '/our-services': '/services',

        // Doctors/Team variations
        '/our-doctors': '/doctors',
        '/team': '/doctors',
        '/dentists': '/doctors',
        '/our-team': '/doctors',

        // Contact variations
        '/contact-us': '/contact',
        '/get-in-touch': '/contact',
        '/reach-us': '/contact',

        // About variations
        '/about-us': '/about',
        '/our-story': '/about',

        // Testimonials variations
        '/testimonial': '/testimonials',
        '/reviews': '/testimonials',
        '/patient-reviews': '/testimonials',

        // Gallery variations
        '/our-gallery': '/gallery',
        '/photos': '/gallery',
        '/images': '/gallery',

        // Blog variations
        '/news': '/blog',
        '/articles': '/blog',
        '/dental-blog': '/blog',
    };

    // Check if current path needs redirect
    if (redirects[pathname]) {
        const url = request.nextUrl.clone();
        url.pathname = redirects[pathname];
        return NextResponse.redirect(url, 301); // 301 Permanent redirect
    }

    return NextResponse.next();
}

// Configure which paths the proxy should run on
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images, etc)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
    ],
};
