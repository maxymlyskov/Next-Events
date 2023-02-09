import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-util";
import React from "react";

export default function HomePage(props) {
  return (
    <>
      <EventList items={props.events} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}
