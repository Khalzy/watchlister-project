const axios = require('axios').default;

let topRated = 'https://api.themoviedb.org/3/tv/top_rated?api_key=cee634c7a5d4a399f55393d577238c03&language=en-US&page=1';
let onAir = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=cee634c7a5d4a399f55393d577238c03&language=en-US&page=1';
let upcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=cee634c7a5d4a399f55393d577238c03&language=en-US&page=1';
let allGenres = 'https://api.themoviedb.org/3/genre/tv/list?api_key=cee634c7a5d4a399f55393d577238c03&language=en-US';

const promiseTopRated = axios.get(topRated);
const promiseOnAir = axios.get(onAir);
const promiseUpcoming= axios.get(upcoming); 
const promiseGenre = axios.get(allGenres); 

export default Promise.all([promiseTopRated, promiseOnAir, promiseUpcoming, promiseGenre])
  .then((data) => {
    const latest = data[0].data;
    const now_playing = data[1].data;
    const upcoming = data[2].data;
    const Genre = data[3].data;
    return {
      latest,
      now_playing,
      upcoming,
      Genre
    };
  })
