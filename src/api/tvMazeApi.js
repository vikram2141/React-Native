// src/api/tvMazeApi.js
import axios from 'axios';

export const fetchAllShows = () => {
  return axios.get('https://api.tvmaze.com/search/shows?q=all');
};

export const searchShows = (term) => {
  return axios.get(`https://api.tvmaze.com/search/shows?q=${term}`);
};
