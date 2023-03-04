import axios from 'axios';
import { BASE_URL } from '../constants/urls.js';

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const getLinksUser = (token) => {
  return axios.get(`${BASE_URL}/users/me`, createConfig(token));
};

const postShorten = (body, token) => {
  return axios.post(`${BASE_URL}/urls/shorten`, body, createConfig(token));
};

const openLink = (shortUrl) => {
  return axios.get(`${BASE_URL}/urls/open/${shortUrl}`);
};

const deleteLink = (id, token) => {
  return axios.delete(`${BASE_URL}/urls/${id}`, createConfig(token));
};

const apiUser = {
  deleteLink,
  getLinksUser,
  postShorten,
  openLink,
};

export default apiUser;
