import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import logo from '../logo.svg';
import './App.css';
import Events from './Events';
import EventDetails from './EventDetails';
import EventForm from './EventForm';
import NotFound from './NotFound';
import events from '../events';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      events: events
    };

    this.addEvent = this.addEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
  }

  addEvent(event) {
    let events = [...this.state.events, event];
    this.setState({ events });
  }

  editEvent(event) {
    let events = this.state.events.filter((e) => e.id !== event.id).concat([event]);
    this.setState({ events });
  }

  render() {
    const EditEvent = (matchProps) => {
      const event = this.state.events.filter((e) => e.id.toString() === matchProps.params.eventId);

      if (event.length === 0) {
        return <NotFound />
      }

      return <EventForm onSubmit={this.editEvent} event={event[0]} {...matchProps} />
    };

    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h2>Welcome to React</h2>
          </div>
          <div className="App-intro">
            <div>
              <Match exactly pattern="/" render={(matchProps) => <Events events={this.state.events} {...matchProps} />} />
              <Match pattern="/events/:eventId" render={(matchProps) => <EventDetails events={this.state.events} {...matchProps} />} />
              <Match exactly pattern="/new-event" render={(matchProps) => <EventForm onSubmit={this.addEvent} {...matchProps} />} />
              <Match pattern="/edit-event/:eventId" render={EditEvent} />
              <Match exactly pattern="/not-found" component={NotFound} />
              <Miss component={NotFound} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
