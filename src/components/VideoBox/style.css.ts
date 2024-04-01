import { style } from '@vanilla-extract/css';

export const Youtube = style({
  borderRadius: 15,
  filter: 'brightness(50%)',
  transition: 'all 0.5s',

  ':hover': {
    filter: 'brightness(105%)',
  },
});
