import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function shopMiddleware(request: NextRequest) {
  if (hasUserCart(request)) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/samples/empty-cart', request.url))
}

function hasUserCart(request: NextRequest) {
  return !!request.nextUrl.searchParams.get('cart')
}
