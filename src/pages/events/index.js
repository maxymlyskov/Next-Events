import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents, getFeaturedEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

export default function AllEventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();

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
