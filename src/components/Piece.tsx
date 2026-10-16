import { useState, useRef } from 'react';

import * as styles from './Piece.css';

type PieceProps = {
  zoom: number;
};

export function Piece({ zoom }: PieceProps) {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
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

    setPosition(prev => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY,
    }));
  }

  function handleLostPointerCapture() {
    lastPointerRef.current = null;
  }

  return (
    <div
      className={styles.piece}
      data-piece
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onLostPointerCapture={handleLostPointerCapture}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className={styles.pieceHeader}>
        <div className={styles.pieceType}>타입</div>
        <p className={styles.pieceMode}>종류</p>
      </div>
      <div className={styles.pieceMain}>
        <div className={styles.pieceTitle}>제목</div>
        <p className={styles.pieceContent}>설명</p>
      </div>
      <div className={styles.pieceFooter}>
        <p className={styles.pieceStartedAt}>시작시간</p>
        <p className={styles.pieceDuration}>소요시간</p>
      </div>
    </div>
  );
}
