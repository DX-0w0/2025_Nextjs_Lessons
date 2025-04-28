import { NextResponse } from 'next/server'

// Reserved name
export function middleware(request) {
  console.log('middlware', request)
  return NextResponse.next()
}

// Reserved name
export const config = {
  matcher: '/news',
}
