import React, { useState } from 'react';
import { MovieItem } from '../../models/MovieItem';
import './MovieRow.css';

export interface Props {
  title: string;
  movies: Array<MovieItem>;
}

function MovieRow(props: Props) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = props.movies.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{props.title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <button style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <button style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: props.movies?.length * 150,
          }}
        >
          {props.movies !== null &&
            props.movies!.length > 0 &&
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
