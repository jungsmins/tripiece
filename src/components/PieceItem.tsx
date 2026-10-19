import { useRef } from 'react';

import { usePieceStore } from '@/stores/piece';
import type { Piece } from '@/types/piece';

import PieceCard from './PieceCard';

import * as styles from './PieceItem.css';

type PieceItemProps = {
  piece: Piece;
  zoom: number;
};

export default function PieceItem({ piece, zoom }: PieceItemProps) {
  const movePiece = usePieceStore(state => state.movePiece);
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.stopPropagation();

    e.currentTarget.setPointerCapture(e.pointerId);
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const lastPointer = lastPointerRef.current;

    if (!lastPointer) {
      return;
    }

    const worldDelta = {
      x: (e.clientX - lastPointer.x) / zoom,
      y: (e.clientY - lastPointer.y) / zoom,
    };
    lastPointerRef.current = { x: e.clientX, y: e.clientY };

    movePiece(piece.id, worldDelta);
  }

  function handleLostPointerCapture() {
    lastPointerRef.current = null;
  }

  return (
    <div
      className={styles.piece}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onLostPointerCapture={handleLostPointerCapture}
      style={{
        transform: `translate(${piece.position.x}px, ${piece.position.y}px)`,
      }}
    >
      <PieceCard piece={piece} />
    </div>
  );
}
