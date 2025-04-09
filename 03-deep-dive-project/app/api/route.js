export function GET(request) {
  console.log('GET', request)

  return Response.json({ word: 'hello' })
  //   return new Response('Hello')
}

// export function POST(request) {}
