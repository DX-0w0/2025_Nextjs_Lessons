import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../helpers/api-util'
import Head from 'next/head'

function HomePage(props) {
  const { events } = props

  return (
    <div>
      <Head>
        <title>Network Events</title>
        <meta name='description' content='Find a lot of events here' />
      </Head>
      <EventList items={events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  }
}

export default HomePage
