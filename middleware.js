import { NextResponse } from 'next/server'
import { tracer, context } from './OTEL-initializer.js';
export function middleware(request) {
    const span = tracer.startSpan(request.pathname, undefined, context.active());
    NextResponse.next()
    span.end();
    return

}
export const config = {
    matcher: '/api/:path*',
}