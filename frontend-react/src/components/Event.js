import React from 'react';

const Event = (props) => {
  const { event } = props;

  return (
    <div>
      <h6>{event.id}</h6>
      <h2><a href={`/events/${event.id}`}>{event.title}</a></h2>
      <img src={event.eventImage} alt={`event ${props.event.title}`} />
      <p>{event.description}</p>
      <h3>{event.location}</h3>
      <ul>
        {event.dates.map((date, i) => <li key={i}>{date}</li>)}
      </ul>
    </div>
  );
};

export default Event;
