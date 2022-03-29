import React from 'react';
import { MovieItem } from '../../models/MovieItem';

export interface Props {
  title: string;
  movies: Array<MovieItem>;
}

function MovieRow(props: Props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {props.movies?.length > 0 &&
            props.movies?.map((item) => (
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
  );
}

export default MovieRow;
