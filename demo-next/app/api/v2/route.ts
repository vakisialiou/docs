import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {

  const token = request.cookies.get('token')

  const id = request.nextUrl.searchParams.get('id')

  const requestHeaders = new Headers(request.headers)

  return Response.json({ data: { test: 1 }, url: request.url, id, token, headers: { referer: requestHeaders.get('referer') }, })
}
