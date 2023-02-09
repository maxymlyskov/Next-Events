export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-be10b-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];

  for (let key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}
