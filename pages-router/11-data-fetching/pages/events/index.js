import { Fragment } from 'react'
import { useRouter } from 'next/router'

import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'
import Head from 'next/head'

function AllEventsPage(props) {
  const router = useRouter()
  const events = props.events

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <Fragment>
      <Head>
        <title>All Network Events</title>
        <meta name='description' content='Find a lot of events here' />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events,
    },
    revalidate: 60,
  }
}

export default AllEventsPage
