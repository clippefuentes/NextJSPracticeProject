import { Fragment } from "react"

import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-date"
import EventList from "../../components/events/event-list"
import ResultsTitle from "../../components/events/results-title"
import Button from "../../components/ui/button"

const FilterEventComponent = ({}) => {
  const router = useRouter()
  
  const filterData = router.query.slug

  console.log('router.query:', router.query)
  if (!filterData) {
    return <p className="center">Loading...... </p>
  }

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (isNaN(numYear) || isNaN(numMonth) || numYear < 2021 || numYear > 2030 || numMonth < 1 || numMonth > 12) {
    return (
      <Fragment>
        <p >Invalid year or month</p>
        <div className="center">
          <Button link='/events'>Back to events</Button>
        </div>
      </Fragment>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
    <Fragment>
      <p>No events found</p>
      <div className="center">
        <Button link='/events'>Back to events</Button>
      </div>
    </Fragment>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return <Fragment>
    <ResultsTitle date={date} />
    <EventList items={filteredEvents} />
  </Fragment>
}

export default FilterEventComponent