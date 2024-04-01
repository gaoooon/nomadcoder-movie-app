import { style } from '@vanilla-extract/css';
import { runMain } from 'module';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
});

export const BackgroundImg = style({
  filter: 'brightness(50%)',
});

export const ImgBox = style({
  position: 'relative',
});

export const Title = style({
  position: 'absolute',
  fontSize: 40,
  fontWeight: 900,
  bottom: 20,
  left: 20,
});

export const InfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 20,
  paddingRight: 20,
  width: 1280,
});

export const RunTime = style({
  fontSize: 22,
  fontWeight: 'bold',
});

export const LunchDate = style([RunTime]);

export const VoteAverage = style([RunTime]);

export const Overview = style([RunTime]);

export const Genre = style([RunTime]);

export const VideoContainer = style({
  marginTop: 70,
  width: 1280,
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  rowGap: 20,
  paddingBottom: 100,
});
