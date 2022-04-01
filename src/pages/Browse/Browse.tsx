import { useContext, useEffect, useState } from 'react';
import MovieRow from '../../components/MovieRow/MovieRow';
import { MovieItem } from '../../models/MovieItem';
import MovieService from '../../services/movieService';
import { AppContext } from '../../store/MainContext';
import './Browse.css';

function Browse() {
  const [recommended, setRecommended] = useState<Array<MovieItem>>([]);
  const [trending, setTrending] = useState<Array<MovieItem>>([]);
  const [horror, setHorror] = useState<Array<MovieItem>>([]);
  const [comedy, setComedy] = useState<Array<MovieItem>>([]);
  const [action, setAction] = useState<Array<MovieItem>>([]);
  const context = useContext(AppContext);

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
      <div>Bonjour {context.state.username} !</div>
      {recommended!.length > 0 && (
        <section className="rows">
          <MovieRow movies={recommended!} title="Recommandés pour vous" />
        </section>
      )}
      {trending.length > 0 && (
        <section className="rows">
          <MovieRow movies={trending} title="Tendances actuelles" />
        </section>
      )}
      {action!.length > 0 && (
        <section className="rows">
          <MovieRow movies={action!} title="Action" />{' '}
        </section>
      )}
      {comedy!.length > 0 && (
        <section className="rows">
          <MovieRow movies={comedy!} title="Comédie" />
        </section>
      )}
      {horror!.length > 0 && (
        <section className="rows">
          <MovieRow movies={horror!} title="Ca mérite une bonne note" />
        </section>
      )}
    </div>
  );
}

export default Browse;
