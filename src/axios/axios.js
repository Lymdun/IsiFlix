import axios from 'axios';

let Axios = axios;

Axios.interceptors.request.use((req) => {
  req.headers = { 'Content-Type': 'application/json' };
  // todo gérer les interceptions lors des requetes
  // type gestion de token jwt pour l'authent
  return req;
});

Axios.interceptors.response.use((res) => {
  return res;
});

export default Axios;
