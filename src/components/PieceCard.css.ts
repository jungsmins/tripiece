import { style, styleVariants } from '@vanilla-extract/css';

import { PIECE_WIDTH, PIECE_HEIGHT } from '@/constants/piece';

const INK = '#2b2824';
const INK_SUB = '#6b665f';
const LINE = '#d2cec7';
const PAPER = '#fffdf8';
const CANVAS_BG = '#fafaf8';

const NOTCH_WIDTH = '28px';
const NOTCH_DEPTH = '9px';

const typeAccent = {
  map: { color: '#2f7d6b', background: '#e1f1ec' },
  text: { color: '#a8680f', background: '#fbefd6' },
  canvas: { color: '#6b4fbb', background: '#ebe5fa' },
} as const;

export const card = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',

  width: PIECE_WIDTH,
  height: PIECE_HEIGHT,
  padding: '12px',
  border: `1.5px solid ${LINE}`,
  borderRadius: '14px',
  boxShadow: `0 3px 0 ${LINE}, 0 10px 18px rgba(43, 40, 36, 0.08)`,

  color: INK,
  backgroundColor: PAPER,

  '::before': {
    content: '""',
    position: 'absolute',
    top: '-1.5px',
    left: '50%',
    zIndex: 1,

    width: NOTCH_WIDTH,
    height: NOTCH_DEPTH,
    marginLeft: `calc(${NOTCH_WIDTH} / -2)`,
    border: `1.5px solid ${LINE}`,
    borderTop: 'none',
    borderRadius: `0 0 ${NOTCH_DEPTH} ${NOTCH_DEPTH}`,

    backgroundColor: CANVAS_BG,
  },

  '::after': {
    content: '""',
    position: 'absolute',
    bottom: `calc(${NOTCH_DEPTH} * -1 - 1.5px)`,
    left: '50%',

    width: NOTCH_WIDTH,
    height: NOTCH_DEPTH,
    marginLeft: `calc(${NOTCH_WIDTH} / -2)`,
    border: `1.5px solid ${LINE}`,
    borderTop: 'none',
    borderRadius: `0 0 ${NOTCH_DEPTH} ${NOTCH_DEPTH}`,

    backgroundColor: PAPER,
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '22px',
});

export const typeBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',

  height: '22px',
  padding: '0 9px 0 7px',
  borderRadius: '11px',

  fontSize: '12px',
  fontWeight: 'bold',
});

export const typeBadgeVariants = styleVariants(typeAccent, accent => ({
  color: accent.color,
  backgroundColor: accent.background,
}));

export const typeDot = style({
  width: '6px',
  height: '6px',
  borderRadius: '50%',

  backgroundColor: 'currentColor',
});

export const duration = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  fontSize: '12px',
  fontVariantNumeric: 'tabular-nums',
  lineHeight: '1',

  color: INK_SUB,
});

export const title = style({
  overflow: 'hidden',

  fontSize: '16px',
  fontWeight: 'bold',
  lineHeight: '24px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const titlePlaceholder = style({
  color: '#aaa59d',
});

export const content = style({
  flex: '1',

  minHeight: 0,
  border: `1px solid ${LINE}`,
  borderRadius: '8px',

  overflow: 'hidden',
});

export const contentVariants = styleVariants(typeAccent, accent => ({
  backgroundColor: accent.background,
}));

export const empty = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100%',

  fontSize: '12px',

  color: INK_SUB,
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  height: '18px',

  fontSize: '12px',
  lineHeight: '1',

  color: INK_SUB,
});

export const footerIcon = style({
  flexShrink: 0,
});

export const footerLabel = style({
  overflow: 'hidden',

  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
