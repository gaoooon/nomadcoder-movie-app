import { MovieType } from '@/types';
import * as S from './style.css';
import Link from 'next/link';

const HomePage = async () => {
  const movieList = await getMovieList();

  return (
    <div className={S.Container}>
      <div className={S.MovieBoxContainer}>
        {movieList.map((movie) => (
          <div className={S.MovieBox} key={movie.id}>
            <h1 className={S.MovieTitle}>{movie.title}</h1>
            <Link href={`/movie/${movie.id}`}>
              <img
                className={S.Poster}
                src={movie.poster_path}
                alt={`${movie.title} img`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const getMovieList = async (): Promise<MovieType[]> => {
  const response = await fetch(`${process.env.NEXT_API_BASE_URL}`);
  const movieList = await response.json();

  return movieList;
};

export default HomePage;
