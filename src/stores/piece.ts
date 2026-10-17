import { create } from 'zustand';

import type { Piece, Point } from '@/types/piece';

type CreatePieceOptions = Partial<Omit<Piece, 'id'>>;
type PieceState = {
  pieces: Piece[];
  addPiece: (options?: CreatePieceOptions) => void;
  movePiece: (id: string, delta: Point) => void;
};

function createId(): string {
  return crypto.randomUUID();
}

function createPiece(options: CreatePieceOptions = {}): Piece {
  const defaults: Omit<Piece, 'id'> = {
    title: '',
    durationMinutes: 30,
    type: 'text',
    location: null,
    position: { x: 0, y: 0 },
  };

  return {
    ...defaults,
    ...options,
    id: createId(),
  };
}

export const usePieceStore = create<PieceState>()(set => ({
  pieces: [],

  addPiece: options =>
    set(state => ({
      pieces: [...state.pieces, createPiece(options)],
    })),

  movePiece: (id, delta) =>
    set(state => ({
      pieces: state.pieces.map(piece => {
        if (piece.id === id) {
          return {
            ...piece,
            position: {
              x: piece.position.x + delta.x,
              y: piece.position.y + delta.y,
            },
          };
        }

        return piece;
      }),
    })),
}));
