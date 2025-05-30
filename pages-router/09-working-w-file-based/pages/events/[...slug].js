import EventList from '@/components/events/event-list'
import ResultsTitle from '@/components/events/results-title'
import Button from '@/components/ui/button'
import ErrorAlert from '@/components/ui/error-alert'
import { getFilteredEvents } from '@/dummy-data'
import { useRouter } from 'next/router'

function FilteredEventsPage() {
  const router = useRouter()

  const filterData = router.query.slug

  if (!filterData) {
    return <p className='center'>Loading....</p>
  }

  const [filteredyear, filteredMonth] = filterData

  const numYear = +filteredyear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter, please adjust values</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/event'>Show All Events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found!!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/event'>Show All Events</Button>
        </div>
      </>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  )
}

export default FilteredEventsPage
