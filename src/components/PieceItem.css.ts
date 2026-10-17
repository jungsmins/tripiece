import { style } from '@vanilla-extract/css';

export const piece = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',

  padding: '12px',
  width: '240px',
  height: '160px',
  border: '1px solid #000000',
  borderRadius: '8px',

  backgroundColor: '#ffffff',

  userSelect: 'none',
});

export const pieceHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const pieceType = style({
  fontSize: '14px',
});

export const pieceMode = style({
  fontSize: '14px',
});

export const pieceMain = style({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
});

export const pieceTitle = style({
  fontSize: '20px',
  fontWeight: 'bold',
});

export const pieceContent = style({});

export const pieceFooter = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const pieceStartedAt = style({
  fontSize: '14px',
});

export const pieceDuration = style({
  fontSize: '14px',
});
