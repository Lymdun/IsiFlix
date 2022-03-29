import { AxiosError } from 'axios';
import Axios from '../axios/axios';
import { MovieItem } from '../models/MovieItem';

const API_BASE = 'https://api.themoviedb.org/3/';
const API_KEY = 'c92d933775007acb6822af260d3d457e';

const MovieService = {
  async originals(): Promise<MovieItem[]> {
    try {
      const res = await Axios.get(
        API_BASE +
          'discover/tv/?with_network=213&language=fr-FR&api_key=' +
          API_KEY +
          '/'
      );
      const results: MovieItem[] = [];

      res.data.results.forEach((r: MovieItem) => {
        const m: MovieItem = {
          id: r.id,
          poster_path: r.poster_path,
          original_title: r.original_title,
        };
        results.push(m);
      });

      return results;
    } catch (error) {
      let errorMessage: string | undefined = 'Erreur inconnue';
      if ((error as AxiosError).isAxiosError) {
        errorMessage = (error as AxiosError).response?.status.toString();
      }
      throw new Error(errorMessage);
    }
  },
};

export default MovieService;
