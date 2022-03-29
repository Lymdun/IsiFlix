import axios from 'axios';

let Axios = axios;

Axios.interceptors.request.use((req) => {
  // eslint-disable-next-line no-console
  console.log('axios works !');
  // todo gérer les interceptions lors des requetes
  // type gestion de token jwt pour l'authent
  return req;
});

Axios.interceptors.response.use((res) => {
  return res;
});

export default Axios;
