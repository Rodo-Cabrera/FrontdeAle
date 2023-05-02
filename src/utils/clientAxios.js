import axios from "axios";

const token = localStorage.getItem('token');

const URL_BASE = process.env.REACT_APP_URL_BASE;

const clientAxios = axios.create({
  baseURL: URL_BASE,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'access-token': token,
  }
})

export default clientAxios;