import React from 'react';
import Event from './Event';

const Events = (props) => {
  return (
    <div>
      <h1>Events</h1>
      <ul>
        {props.events.map((event) => <li key={event.id}><Event event={event} /></li>)}
      </ul>
    </div>
  );
};

export default Events;
