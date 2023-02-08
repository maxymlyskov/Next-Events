import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents, getFeaturedEvents } from "@/dummy-data";
import React from "react";

export default function AllEventsPage() {
  const allEvents = getAllEvents();
  return (
    <div>
      <EventsSearch />
      <EventList items={allEvents} />
    </div>
  );
}
