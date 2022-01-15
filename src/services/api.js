import axios from "axios";


const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

const baseURL = REACT_APP_API_URL;
console.log(baseURL);
// const apiKey = REACT_APP_API_KEY;

const api = axios.create({
  baseURL,
  // params: {
  //   key: apiKey, 
  // },
});

export default api;
