import { type NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {

  const token = request.cookies.get('token')
  if (!token) {
    request.cookies.set('token', 'test')
  }

  redirect(`/api/v2?id=${Date.now()}`)
}
