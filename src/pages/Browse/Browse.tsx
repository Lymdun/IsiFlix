/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { MovieItem } from '../../models/MovieItem';
import MovieService from '../../services/movieService';
import './Browse.css';

function Browse() {
  const [movies, setMovies] = useState<Array<MovieItem>>();

  useEffect(() => {
    const loadMovies = async () => {
      let list = await MovieService.originals();
      setMovies(list);
    };
    loadMovies();
  }, []);

  return (
    <section>
      <div className="movieRow">
        <h2>Section WIP</h2>
        <div className="movieRow--listarea">
          <div className="movieRow--list">
            {movies !== undefined &&
              movies!.length > 0 &&
              movies?.map((item) => (
                <div key={item.id} className="movieRow--item">
                  <img
                    src={'https://image.tmdb.org/t/p/w300' + item.poster_path}
                    alt={item.original_title}
                  ></img>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Browse;
