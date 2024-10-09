import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function adminMiddleware(request: NextRequest) {
  if (checkIfUserIsAdmin(request)) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/samples/login', request.url))
}

function checkIfUserIsAdmin(request: NextRequest) {
  return !!request.nextUrl.searchParams.get('token')
}
