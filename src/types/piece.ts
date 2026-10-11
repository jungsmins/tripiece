export type Piece = {
  id: string;
  title: string;
  type: 'map' | 'text' | 'canvas';
  duration: number;
  location: 'exact' | 'area';
};
