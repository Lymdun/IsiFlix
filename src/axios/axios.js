import axios from 'axios';

let Axios = axios;

Axios.interceptors.request.use((req) => {
  // todo gérer les interceptions lors des requetes
  // type gestion de token jwt pour l'authent
  return req;
});

Axios.interceptors.response.use((res) => {
  return res;
});

export default Axios;
