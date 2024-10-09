import { adminMiddleware } from './middleware/admin'
import { shopMiddleware } from './middleware/shop'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {

  if (request.nextUrl.pathname.startsWith('/samples/admin')) {
    return adminMiddleware(request)
  }

  if (request.nextUrl.pathname.startsWith('/samples/shop')) {
    return shopMiddleware(request)
  }

  NextResponse.next()
}

export const config = {
  matcher: ['/samples/admin', '/samples/shop'],
}
