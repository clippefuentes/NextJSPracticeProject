import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-date"
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";

export default function EventPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  )
}
