import axios from "axios";
import { BASE_URL } from "../constants/urls.js";

function signUp(body) {
  return axios.post(`${BASE_URL}/signup`, body);
}

function signIn(body) {
  return axios.post(`${BASE_URL}/signin`, body);
}

const apiAuth = {
  signUp,
  signIn,
};

export default apiAuth;
