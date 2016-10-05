import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import logo from '../logo.svg';
import './App.css';
import Events from './Events';
import EventDetails from './EventDetails';
import EventForm from './EventForm';
import NotFound from './NotFound';
import events from '../events';
import { getEvents, addEvent } from '../services/events';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      events: [],
      loadEventsError: '',
      addEventError: ''
    };

    this.addEvent = this.addEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
  }

  componentWillMount() {
    getEvents()
      .then((events) => {
        this.setState({ events });
      })
      .catch ((error) => {
        this.setState({ loadEventsError: error.message })
      });
  }

  addEvent(event) {
    addEvent(event)
      .then((res) => {
         let events = [...this.state.events, event];
         this.setState({ events });
      })
      .catch((error) => {
        this.setState({ addEventError: error.message });
      });
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
    const EventsRender = (matchProps) => (
      <Events 
        events={this.state.events} 
        error={this.state.loadEventsError} 
        {...matchProps} 
      />
    );
    const AddEvent = (matchProps) => (
      <EventForm 
        onSubmit={this.addEvent} 
        error={this.state.addEventError}
        {...matchProps} 
      />
    );


    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h2>Welcome to React</h2>
          </div>
          <div className="App-intro">
            <div>
              <Match exactly pattern="/" render={EventsRender} />
              <Match pattern="/events/:eventId" render={(matchProps) => <EventDetails events={this.state.events} {...matchProps} />} />
              <Match exactly pattern="/new-event" render={AddEvent} />
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
