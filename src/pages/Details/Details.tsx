/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../models/Movie';
import MovieService from '../../services/movieService';
import './Details.css';

function useMovieStatus(movie: Movie | undefined) {
  const [isMovie, setIsMovie] = useState<boolean>(false);
  const isMovieType = !!movie?.release_date;

  setIsMovie(isMovieType);

  return isMovie;
}

function Details() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const isMovieType = useMovieStatus(movie);

  const loadMovie = async () => {
    let movieItem = await MovieService.fetchMovieDetails(movieId, isMovieType!);
    setMovie(movieItem);
  };

  useEffect(() => {
    loadMovie();
    console.log('AAA');
  }, []);

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
              <h2 className="details--name">{movie.name}</h2>
            </div>
          </section>
        </main>
      )}
    </section>
  );
}

export default Details;
