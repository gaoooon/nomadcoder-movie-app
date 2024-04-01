import { MovieDetailPage } from '@/pageContainers';

const MovieDetail = ({ params: { id } }: { params: { id: string } }) => (
  <MovieDetailPage id={id} />
);
export default MovieDetail;
