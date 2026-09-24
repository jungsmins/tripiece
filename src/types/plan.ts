import type { Piece, Connection } from './piece';

export type Plan = {
  id: string;
  title: string;
  pieces: Piece[];
  connections: Connection[];
};
