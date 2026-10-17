export type Point = {
  x: number;
  y: number;
};

export type PieceLocation = {
  kind: 'exact' | 'area';
  name: string;
  coordinate: { lat: number; lng: number };
};

export type Piece = {
  id: string;
  title: string;
  durationMinutes: number;
  type: 'map' | 'text' | 'canvas';
  location: PieceLocation | null;
  position: Point;
};

export type PieceType = Piece['type'];
