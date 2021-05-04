import axios from 'axios';
const BASE_URL = 'https://cmyk-night-api.herokuapp.com';


export const getEvents = () =>
  axios.get(`${BASE_URL}/api/events`)
    .then(({data}) => data)
