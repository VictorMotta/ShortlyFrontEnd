import axios from 'axios';
import { BASE_URL } from '../constants/urls.js';

const getRanking = () => {
  return axios.get(`${BASE_URL}/ranking`);
};

const apiRanking = {
  getRanking,
};

export default apiRanking;
