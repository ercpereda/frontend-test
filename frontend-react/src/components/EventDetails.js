import React from 'react';

const EventDetails = (props) => {
  const event = props.events.filter((e) => e.id.toString() === props.params.eventId)[0];

  return (
    <div>
      <h1>Event Details</h1>
      <h6>{event.id}</h6>
      <h2><a href={`/events/${event.id}`}>{event.title}</a></h2>
      <img src={event.eventImage} alt={`event ${event.title}`} />
      <p>{event.description}</p>
      <h3>{event.location}</h3>
      <ul>
        {event.dates.map((date, i) => <li key={i}>{date}</li>)}
      </ul>
    </div>
  );
};

export default EventDetails;
