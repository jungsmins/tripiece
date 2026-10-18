import { usePieceStore } from '@/stores/piece';
import type { Camera } from '@/types/camera';
import type { Piece } from '@/types/piece';

import { PieceItem } from './PieceItem';

import * as styles from './World.css';

type WorldProps = {
  camera: Camera;
};

export function World({ camera }: WorldProps) {
  const pieces = usePieceStore(state => state.pieces);
  const { panX, panY, zoom } = camera;

  return (
    <div
      className={styles.world}
      style={{
        transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
      }}
    >
      {pieces.map((piece: Piece) => (
        <PieceItem key={piece.id} pieceData={piece} zoom={zoom} />
      ))}
    </div>
  );
}
