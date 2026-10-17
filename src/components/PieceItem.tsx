import { useRef } from 'react';

import { usePieceStore } from '@/stores/piece';
import type { Piece } from '@/types/piece';

import * as styles from './PieceItem.css';

type PieceItemProps = {
  pieceData: Piece;
  zoom: number;
};

export function PieceItem({ pieceData, zoom }: PieceItemProps) {
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

    const deltaX = (e.clientX - lastPointer.x) / zoom;
    const deltaY = (e.clientY - lastPointer.y) / zoom;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };

    movePiece(pieceData.id, { x: deltaX, y: deltaY });
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
        transform: `translate(${pieceData.position.x}px, ${pieceData.position.y}px)`,
      }}
    >
      <div className={styles.pieceHeader}>
        <div className={styles.pieceType}>{pieceData.type}</div>
        <p className={styles.pieceMode}>{pieceData.location?.kind}</p>
      </div>
      <div className={styles.pieceMain}>
        <div className={styles.pieceTitle}>{pieceData.title}</div>
        <p className={styles.pieceContent}>설명</p>
      </div>
      <div className={styles.pieceFooter}>
        <p className={styles.pieceDuration}>{pieceData.durationMinutes}</p>
      </div>
    </div>
  );
}
