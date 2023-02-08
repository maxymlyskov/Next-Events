import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

export default function FilteredEventsPage() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) return <h1 className="center">Loading</h1>;

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
  )
    return (
      <div className="center">
        <ErrorAlert>
          <h1 className="center">Invalid filter</h1>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    );

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <div className="center">
        <ErrorAlert>
          <h1 className="center">No Events Found(</h1>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    );

  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}
