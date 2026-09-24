import type { Piece } from './piece';

export type Connection = {
  id: string;
  fromPieceId: string;
  toPieceId: string;
};

export type Plan = {
  id: string;
  title: string;
  pieces: Piece[];
  connections: Connection[];
};
