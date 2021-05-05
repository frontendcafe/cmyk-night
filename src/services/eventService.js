import axios from 'axios';
const BASE_URL = 'https://cmyk-night-api.herokuapp.com';


export const getEvents = () =>
  axios.get(`${BASE_URL}/api/events`)
    .then(({data}) => data)


export const getEventsDetails = (id) =>
  axios.get(`${BASE_URL}/api/events/${id}`)
    .then(({data})=>data)
  
