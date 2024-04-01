export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailType {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];

  homepage: string;
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: string;
  runtime: number;
  title: string;
  vote_average: number;
}
