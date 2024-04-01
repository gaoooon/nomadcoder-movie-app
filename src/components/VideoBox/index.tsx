import { VideoType } from '@/types';
import { Youtube } from './style.css';

const VideoBox = async ({ id }: { id: string }) => {
  const videoList = await getVideoList(id);

  return (
    <>
      {videoList.map((video) => (
        <iframe
          key={video.id}
          className={Youtube}
          title={video.name}
          src={`https://youtube.com/embed/${video.key}`}
        />
      ))}
    </>
  );
};

const getVideoList = async (id: string): Promise<VideoType[]> => {
  const response = await fetch(`${process.env.NEXT_API_BASE_URL}/${id}/videos`);
  const videoList = await response.json();

  return videoList;
};

export default VideoBox;
