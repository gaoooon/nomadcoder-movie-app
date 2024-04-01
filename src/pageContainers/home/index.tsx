import { MovieType } from '@/types';
import Image from 'next/image';
import * as S from './style.css';
import Link from 'next/link';

const HomePage = async () => {
  const movieList: MovieType[] = await getMovieList();

  return (
    <div className={S.Container}>
      <div className={S.MovieBoxContainer}>
        {movieList.map((movie) => (
          <div className={S.MovieBox} key={movie.id}>
            <h1 className={S.MovieTitle}>{movie.title}</h1>
            <Link href={`/movie/${movie.id}`}>
              <Image
                width={300}
                height={420}
                src={movie.poster_path}
                alt={`${movie.title} image`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const getMovieList = async () => {
  const response = await fetch(`${process.env.NEXT_API_BASE_URL}/movies`);
  const json = await response.json();

  return json;
};

export default HomePage;
