import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return Response.json({ data: { id: params.id } })
}
