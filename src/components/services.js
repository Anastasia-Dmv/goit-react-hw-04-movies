import Axios from 'axios';

const baseUrl = `https://api.themoviedb.org/3`;
const ApiKey = '67b139b801704dedc647c4541346877d';

export const request = id => {
  return Axios.get(`${baseUrl}/movie/${id}/credits?api_key=${ApiKey}`);
};

export const responseMovieDetails = id => {
  return Axios.get(`${baseUrl}/movie/${id}?api_key=${ApiKey}&language=en-US`);
};

export const responseMovieList = () => {
  return Axios.get(`${baseUrl}/trending/movie/week?api_key=${ApiKey}`);
};
export const responseReviews = id => {
  return Axios.get(
    `${baseUrl}/movie/${id}/reviews?api_key=${ApiKey}&language=en-US&page=1`,
  );
};
export const responseSearchQuery = params => {
  return Axios.get(
    `${baseUrl}/search/movie?&query=${params}&api_key=${ApiKey}&language=en-US&page=1&include_adult=false`,
  );
};
