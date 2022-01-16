import axios from "axios";

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

const baseURL = REACT_APP_API_URL;
const apiKey = REACT_APP_API_KEY;

const api = axios.create({
  baseURL,
  params: {
    format: "json-cors",
    key: apiKey,
  },
});

export default api;
