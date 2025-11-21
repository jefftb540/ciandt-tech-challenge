import axios, { AxiosInstance } from 'axios'

const API_BASE_URL =
  process.env.REACT_APP_API_URL ??
  process.env.API_URL ??
  'https://pokeapi.co/api/v2/'

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default api
