import React from 'react';
import { Redirect, Link } from 'react-router';

const EventDetails = (props) => {
  let event = props.events.filter((e) => e.id.toString() === props.params.eventId);

  if (event.length === 0) {
    return <Redirect to="/not-found" />
  }

  event = event[0]; 

  return (
    <div>
      <h1>Event Details</h1>
      <Link to={`/edit-event/${event.id}`}>Edit</Link>
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

EventDetails.propTypes = {
  events: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default EventDetails;
