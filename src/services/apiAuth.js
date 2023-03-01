import axios from "axios";
import { BASE_URL } from "../constants/urls.js";

function signUp(body) {
  return axios.post(`${BASE_URL}/signup`, body);
}

const apiAuth = {
  signUp,
};

export default apiAuth;
