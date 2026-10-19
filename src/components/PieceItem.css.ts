import { style } from '@vanilla-extract/css';

export const piece = style({
  position: 'absolute',
  cursor: 'grab',
  touchAction: 'none',
  userSelect: 'none',
  ':active': { cursor: 'grabbing' },
});
