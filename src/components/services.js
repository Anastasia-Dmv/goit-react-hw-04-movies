import Axios from 'axios';

const baseUrl = `https://api.themoviedb.org/3`;
const ApiKey = '67b139b801704dedc647c4541346877d';
export const request = id => {
  return Axios.get(`${baseUrl}/movie/${id}/credits?api_key=${ApiKey}`);
};
