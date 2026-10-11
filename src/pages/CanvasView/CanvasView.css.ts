import { style } from '@vanilla-extract/css';

export const main = style({
  flex: '1',
  display: 'flex',

  width: '100%',
});

export const toolPanel = style({
  display: 'flex',
  flexDirection: 'column',

  width: '220px',
  padding: '18px 14px',
  borderRight: '1px solid #dddddd',
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '48px',
  borderRadius: '8px',

  fontWeight: 'bold',

  color: '#ffffff',
  backgroundColor: '#2563eb',

  ':hover': {
    backgroundColor: '#1d42d8',
  },

  ':active': {
    backgroundColor: '#1e40af',
  },
});

export const chatPanel = style({
  display: 'flex',
  flexDirection: 'column',

  width: '260px',
  padding: '10px',
  borderLeft: '1px solid #dddddd',
});
