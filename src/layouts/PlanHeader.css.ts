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

  color: '#4e4b47',

  ':hover': {
    textDecoration: 'underline',
  },
});

export const title = style({
  fontWeight: 'bold',
});

export const navigation = style({
  display: 'flex',
  alignItems: 'center',

  border: '1px solid #d2cec7',
  borderRadius: '8px',

  overflow: 'hidden',
});

export const link = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '72px',
  height: '48px',
  borderRight: '1px solid #d2cec7',

  fontSize: '12px',

  ':last-child': {
    borderRight: 'none',
  },
});

export const activeLink = style({
  backgroundColor: '#f0efec',
  fontWeight: 'bold',
});
