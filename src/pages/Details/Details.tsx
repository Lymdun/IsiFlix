/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../models/Movie';
import MovieService from '../../services/movieService';
import './Details.css';

function useMovieStatus(movie: Movie | undefined) {
  const [isMovie, setIsMovie] = useState<boolean>(false);
  const isMovieType = !window.location.hash;

  useEffect(() => {
    setIsMovie(isMovieType);
  }, [isMovieType]);

  return isMovie;
}

function Details() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState<Movie>();
  let isMovieType = useMovieStatus(movie);

  useEffect(() => {
    const loadMovie = async () => {
      let movieItem = await MovieService.fetchMovieDetails(
        movieId,
        !!isMovieType
      );
      setMovie(movieItem);
    };

    loadMovie();
  }, [movieId, isMovieType]);

  return (
    <section>
      {movie != null && (
        <main
          className="details--content"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          }}
        >
          <section className="details--vertical">
            <div className="details--horizontal">
              <h2 className="details--name">{movie.title || movie.name}</h2>
              <h4 className="details--description">{movie.overview}</h4>
              <div className="details--genres">
                <strong>Genres :</strong> {movie.genres?.join(', ')}
              </div>
            </div>
          </section>
        </main>
      )}
    </section>
  );
}

export default Details;
