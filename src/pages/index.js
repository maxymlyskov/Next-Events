import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-util";
import Head from "next/head";
import React from "react";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="A lot of great events that elps you to evolve"
        />
      </Head>
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
    revalidate: 1800,
  };
}
