import axios from 'axios';

let Axios = axios;

// Interception de toutes les requetes http faites par axios
Axios.interceptors.request.use((req) => {
  // Headers nécessaires à l'utilisation de l'API TMDB
  req.headers = { 'Content-Type': 'application/json' };

  // On peut imaginer ici une gestion d'interception type vérification de validité d'un token jwt
  return req;
});

Axios.interceptors.response.use((res) => {
  return res;
});

export default Axios;
