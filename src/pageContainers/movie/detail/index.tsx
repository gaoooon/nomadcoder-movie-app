import { MovieDetailType } from '@/types';
import * as S from './style.css';
import { VideoBox } from '@/components';

const MovieDetailPage = async ({ id }: { id: string }) => {
  const movieDetail = await getMovieDetail(id);

  return (
    <div className={S.Container}>
      <div className={S.ImgBox}>
        <img
          className={S.BackgroundImg}
          src={movieDetail.backdrop_path}
          alt={`${movieDetail.title} img`}
        />
        <h1 className={S.Title}>{movieDetail.title}</h1>
      </div>
      <div className={S.InfoContainer}>
        <p className={S.Overview}>📖 : {movieDetail.overview}</p>
        <p className={S.VoteAverage}>
          ⭐ : {movieDetail.vote_average.toFixed(1)}
        </p>
        <p className={S.LunchDate}>📅 : {movieDetail.release_date}</p>
        <p className={S.RunTime}>⏳ : {movieDetail.runtime} min</p>
        <p className={S.Genre}>
          ❤️ :{' '}
          {movieDetail.genres.map((item, index) =>
            movieDetail.genres.length - 1 === index ? (
              <>{item.name}</>
            ) : (
              <>{item.name}, </>
            )
          )}
        </p>
      </div>
      <div className={S.VideoContainer}>
        <VideoBox id={id} />
      </div>
    </div>
  );
};

const getMovieDetail = async (id: string): Promise<MovieDetailType> => {
  const response = await fetch(`${process.env.NEXT_API_BASE_URL}/${id}`);
  const movieDetail = await response.json();

  return movieDetail;
};

export default MovieDetailPage;
