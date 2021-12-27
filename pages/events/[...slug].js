import { Fragment } from "react"

import { useRouter } from "next/router"
import { getFilteredEvents } from "../../helpers/api-util"
import EventList from "../../components/events/event-list"
import ResultsTitle from "../../components/events/results-title"
import Button from "../../components/ui/button"

const FilterEventComponent = (props) => {
  // const router = useRouter()
  
  // const filterData = router.query.slug


  if (props.hasError) {
    return (
      <Fragment>
        <p >Invalid year or month</p>
        <div className="center">
          <Button link='/events'>Back to events</Button>
        </div>
      </Fragment>
    )
  }

  const filteredEvents = props.events

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

  const date = new Date(props.date.year, props.date.month - 1)

  return <Fragment>
    <ResultsTitle date={date} />
    <EventList items={filteredEvents} />
  </Fragment>
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  const filterData = slug

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (isNaN(numYear) || isNaN(numMonth) || numYear < 2021 || numYear > 2030 || numMonth < 1 || numMonth > 12) {
    return {
      props: { hasError: true },
      // notFound: true,
    }
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      }
    }
  }
}

export default FilterEventComponent