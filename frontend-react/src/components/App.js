import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import logo from '../logo.svg';
import './App.css';
import Events from './Events';
import EventDetails from './EventDetails';
import NotFound from './NotFound';
import events from '../events';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      events: events
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <BrowserRouter>
            <div>
              <Match exactly pattern="/" render={(matchProps) => <Events events={this.state.events} {...matchProps} />} />
              <Match pattern="/events/:eventId" render={(matchProps) => <EventDetails events={this.state.events} {...matchProps} />} />
              <Miss component={NotFound} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
