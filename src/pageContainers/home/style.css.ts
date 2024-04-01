import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const MovieBoxContainer = style({
  backgroundColor: '#191919',
  paddingRight: '1.5rem',
  paddingLeft: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '8rem',
});

export const MovieBox = style({
  display: 'flex',
  gap: '0.5rem',
  flexDirection: 'column',
  alignItems: 'center',
});

export const MovieTitle = style({
  fontSize: '2rem',
  color: '#148EFF',
  fontWeight: 600,
  WebkitTextStrokeWidth: 0.5,
  WebkitTextStrokeColor: '#111111',
});

export const Poster = style({
  width: 300,
  filter: 'brightness(50%)',
  borderRadius: 15,
  transition: 'all 0.5s',

  ':hover': {
    filter: 'brightness(105%)',
    width: 320,
  },
});
