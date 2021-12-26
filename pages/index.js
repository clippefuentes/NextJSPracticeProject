import { getFeaturedEvents } from "../dummy-date"

import EventList from "../components/events/event-list"

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}
