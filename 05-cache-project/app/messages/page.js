import { unstable_noStore } from 'next/cache'

import Messages from '@/components/messages'
import { getMessages } from '@/lib/messages'

// export const revalidate = 5 // same as next: { revalidate: 5 }
// export const dynamic = 'force-dynamic' // same as cache: 'no-store'

export default async function MessagesPage() {
  // const response = await fetch('http://localhost:8080/messages', {
  //   headers: {
  //     'X-ID': 'page',
  //   },
  // });

  // const response = await fetch('http://localhost:8080/messages', {
  //   cache: 'no-store', // do not cache
  //   cache: 'force-cache' // always cache
  //   next: {
  //     revalidate: 5 // use cache data for _seconds then revalidate
  //     tags: ['msg']
  //   }
  // })

  // unstable_noStore()

  // const response = await fetch('http://localhost:8080/messages')
  // const messages = await response.json()

  const messages = await getMessages()

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>
  }

  return <Messages messages={messages} />
}
