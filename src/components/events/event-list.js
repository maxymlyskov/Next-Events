import React from "react";
import EventItem from "./event-item";

export default function EventList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          key={item.id}
          title={item.title}
          image={item.image}
          location={item.location}
          date={item.date}
          id={item.id}
        />
      ))}
    </ul>
  );
}
