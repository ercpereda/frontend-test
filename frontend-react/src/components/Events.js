import React from 'react';
import { Link } from 'react-router';
import Event from './Event';

const Events = (props) => {
  return (
    <div>
      <h1>Events</h1>
      <Link to='/new-event'>Add event</Link>
      <ul>
        {props.events.map((event) => <li key={event.id}><Event event={event} /></li>)}
      </ul>
    </div>
  );
};

export default Events;
