import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import React from "react";

export default function AllEventsPage(props) {
  const router = useRouter();

  const allEvents = props.events;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }
  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
    },
  };
}
