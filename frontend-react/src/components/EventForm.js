import React, { Component } from 'react';
import { Link } from 'react-router';
import { guid } from '../helpers';

class EventForm extends Component { 
  constructor() {
    super();

    this.createEvent = this.createEvent.bind(this);
  }

  createEvent(e) {
    e.preventDefault();

    const event = {
      id: this.props.event ? this.props.event.id : guid(),
      title: this.titleInput.value,
      eventImage: this.imgInput.value,
      location: this.locationInput.value,
      description: this.descriptionTextA.value,
      dates: [this.dateInput.value ]
    };

    this.eventForm.reset();
    this.props.onSubmit(event);
  }

  render() {
    const { event } = this.props;
    return (
      <div>
        <Link to='/'>Go Back</Link>
        <form onSubmit={this.createEvent} ref={(form) => { this.eventForm = form }}>
          <h1>Event Form</h1>
          <input name="title" type="text" placeholder="title" 
            defaultValue={event && event.title} ref={(input) => { this.titleInput = input }} 
          />
          <input name="eventImage" type="text" placeholder="image" 
            defaultValue={event && event.eventImage} ref={(input) => { this.imgInput = input }} 
          />
          <input name="location" type="text" placeholder="location" 
            defaultValue={event && event.location} ref={(input) => { this.locationInput = input }} 
          />
          <textarea name="description" placeholder="description" 
            defaultValue={event && event.description} ref={(textarea) => { this.descriptionTextA = textarea }}>
          </textarea>
          <input name="date" type="text" placeholder="date" 
            defaultValue={event && event.dates[0]} ref={(input) => { this.dateInput = input }} 
          />
          <button type="submit">{event ? 'Edit' : 'Create'}</button>
        </form>
      </div>
    );
  }
}

EventForm.propTypes = {
  onSubmit: React.PropTypes.func,
  event: React.PropTypes.object
}

export default EventForm;
