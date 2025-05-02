import EventList from '@/components/events/event-list'
import EventsSearch from '@/components/events/events-search'
import { getAllEvents } from '@/dummy-data'
import { useRouter } from 'next/router'

function AllEventsPage() {
  const events = getAllEvents()
  const router = useRouter()

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`
    router.push(fullpath)
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  )
}

export default AllEventsPage
