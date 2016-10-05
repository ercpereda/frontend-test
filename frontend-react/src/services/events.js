import request from 'minimal-request-promise';
import config from '../config';

export async function getEvents() {
  return await request.get(`${config.isBackendUrl}/events`);
}

export async function getFeatured() {
  return await request.get(`${config.isBackendUrl}/events/featured`);
}

export async function getEvent(id) {
  return await request.get(`${config.isBackendUrl}/events/${id}`);
}

export async function addEvent(event) {
  return await request.post(`${config.isBackendUrl}/events`, event);
}
