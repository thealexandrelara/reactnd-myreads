import axios from 'axios';
// Generate a unique token for storing your bookshelf data on the backend server.
let { token } = localStorage;
if (!token) {
  localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

  token = localStorage.token;
}

const headers = {
  Accept: 'application/json',
  Authorization: token
};

const api = axios.create({
  baseURL: 'https://reactnd-books-api.udacity.com',
  headers
});

export default api;
