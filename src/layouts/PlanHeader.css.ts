import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '61px',

  border: '1px solid #dddddd',
  padding: '10px 20px',
});

export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '22px',
});

export const backToLink = style({
  fontSize: '12px',
  font: '#4E4B47',

  ':hover': {
    textDecoration: 'underline',
  },
});

export const Title = style({
  fontWeight: 'bold',
});

export const Navigation = style({
  display: 'flex',
  alignItems: 'center',

  border: '1px solid #D2CEC7',
  borderRadius: '8px',
  overflow: 'hidden',
});

export const Link = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '72px',
  height: '48px',

  borderRight: '1px solid #D2CEC7',

  fontSize: '12px',

  ':last-child': {
    borderRight: 'none',
  },
});

export const activeLink = style({
  backgroundColor: '#F0EFEC',
  fontWeight: 'bold',
});
