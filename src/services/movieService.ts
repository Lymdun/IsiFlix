import { AxiosError } from 'axios';
import Axios from '../axios/axios';
import { MovieItem } from '../models/MovieItem';
import { Movie } from '../models/Movie';

const API_BASE = 'https://api.themoviedb.org/3/';
const API_KEY = 'c92d933775007acb6822af260d3d457e'; // todo externaliser

async function getMovieItemList(endpoint: string): Promise<Array<MovieItem>> {
  try {
    const res = await Axios.get(API_BASE + endpoint + '&api_key=' + API_KEY);
    const results: MovieItem[] = [];

    // Affectation des propriétés à l'interface MovieItem
    res.data.results.forEach((r: MovieItem) => {
      const m: MovieItem = {
        id: r.id,
        poster_path: r.poster_path,
        original_title: r.original_title,
      };

      // Ajout du movieItem dans le tableau
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
}

const MovieService = {
  async recommended(): Promise<MovieItem[]> {
    return getMovieItemList('discover/tv?language=fr-FR&with_network=213');
  },
  async trending(): Promise<MovieItem[]> {
    return getMovieItemList('trending/all/week?language=fr-FR');
  },
  async action(): Promise<MovieItem[]> {
    return getMovieItemList('discover/movie?with_genres=28&language=fr-FR');
  },
  async comedy(): Promise<MovieItem[]> {
    return getMovieItemList('discover/movie?with_genres=35&language=fr-FR');
  },
  async horror(): Promise<MovieItem[]> {
    return getMovieItemList('discover/movie?with_genres=27&language=fr-FR');
  },

  async fetchMovieDetails(
    id: string | undefined,
    isMovie: boolean
  ): Promise<Movie> {
    try {
      const res = await Axios.get<Movie>(
        API_BASE +
          (!!isMovie ? 'movie/' : 'tv/') +
          id +
          '?api_key=' +
          API_KEY +
          '&language=fr-FR/'
      );

      return res.data;
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
