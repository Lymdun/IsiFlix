import { useEffect, useState } from 'react';
import MovieRow from '../../components/MovieRow/MovieRow';
import { MovieItem } from '../../models/MovieItem';
import MovieService from '../../services/movieService';
import './Browse.css';

function Browse() {
  const [recommended, setRecommended] = useState<Array<MovieItem>>();
  const [trending, setTrending] = useState<Array<MovieItem>>();
  const [horror, setHorror] = useState<Array<MovieItem>>();
  const [comedy, setComedy] = useState<Array<MovieItem>>();
  const [action, setAction] = useState<Array<MovieItem>>();

  useEffect(() => {
    const loadMovies = async () => {
      fetchRecommended();
      fetchTrending();
      fetchAction();
      fetchComedy();
      fetchHorror();
    };
    loadMovies();
  }, []);

  async function fetchRecommended(): Promise<void> {
    const r = await MovieService.recommended();
    setRecommended(r);
  }

  async function fetchTrending(): Promise<void> {
    const r = await MovieService.trending();
    setTrending(r);
  }
  async function fetchAction(): Promise<void> {
    const r = await MovieService.action();
    setAction(r);
  }
  async function fetchComedy(): Promise<void> {
    const r = await MovieService.comedy();
    setComedy(r);
  }
  async function fetchHorror(): Promise<void> {
    const r = await MovieService.horror();
    setHorror(r);
  }

  return (
    <div>
      <section>
        {recommended !== null && (
          <MovieRow movies={recommended!} title="Recommandés pour vous" />
        )}
      </section>
      <section>
        {trending !== null && (
          <MovieRow movies={trending!} title="Tendances actuelles" />
        )}
      </section>
      <section>
        {action !== null && <MovieRow movies={action!} title="Action" />}
      </section>
      <section>
        {comedy !== null && <MovieRow movies={comedy!} title="Comédie" />}
      </section>
      <section>
        {horror !== null && <MovieRow movies={horror!} title="Horreur" />}
      </section>
    </div>
  );
}

export default Browse;
