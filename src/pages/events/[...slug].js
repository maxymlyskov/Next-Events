import React from "react";
import { useRouter } from "next/router";
// import useSWR from 'swr'
import { getFilteredEvents } from "@/helpers/api-util";

import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";

export default function FilteredEventsPage(props) {
  const router = useRouter();

  // const filteredData = router.query.slug;

  // if (!filteredData) return <h1 className="center">Loading</h1>;

  // const filteredYear = filteredData[0];
  // const filteredMonth = filteredData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if (props.hasError)
    return (
      <div className="center">
        <ErrorAlert>
          <h1 className="center">Invalid filter</h1>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    );

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <div className="center">
        <ErrorAlert>
          <h1 className="center">No Events Found(</h1>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    );

  const date = new Date(props.date.year, props.date.month - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    // isNan(numYear) ||
    // isNan(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return { props: { hasError: true } };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props: { events: filteredEvents, date: { year: numYear, month: numMonth } },
  };
}
