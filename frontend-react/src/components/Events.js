import React from 'react';
import { Link } from 'react-router';
import Event from './Event';

const Events = (props) => {
  const EventsList = (
    <ul>
      {props.events.map((event) => <li key={event.id}><Event event={event} /></li>)}
    </ul>
  );
  const Error = (
    <h1 style={{ color: 'red' }}>{props.error}</h1>
  );
  return (
    <div>
      <h1>Events</h1>
      <Link to='/new-event'>Add event</Link>
      {props.error ? Error : EventsList} 
    </div>
  );
};

Events.propTypes = {
  error: React.PropTypes.string,
  events: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default Events;
