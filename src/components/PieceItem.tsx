import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { DRAG_THRESHOLD } from '@/constants/piece';
import { usePieceStore } from '@/stores/piece';
import type { Piece, Point } from '@/types/piece';

import PieceCard from './PieceCard';

import * as styles from './PieceItem.css';

type PieceItemProps = {
  piece: Piece;
  zoom: number;
};

export default function PieceItem({ piece, zoom }: PieceItemProps) {
  const [isDragging, setIsDragging] = useState(false);
  const lastPointerRef = useRef<Point | null>(null);
  const startPointerRef = useRef<Point | null>(null);
  const movePiece = usePieceStore(state => state.movePiece);
  const navigate = useNavigate();

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.stopPropagation();

    e.currentTarget.setPointerCapture(e.pointerId);
    startPointerRef.current = { x: e.clientX, y: e.clientY };
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const startPointer = startPointerRef.current;
    const lastPointer = lastPointerRef.current;

    if (!lastPointer || !startPointer) {
      return;
    }

    const worldDelta = {
      x: (e.clientX - lastPointer.x) / zoom,
      y: (e.clientY - lastPointer.y) / zoom,
    };

    lastPointerRef.current = { x: e.clientX, y: e.clientY };

    movePiece(piece.id, worldDelta);

    const draggedDeltaX = e.clientX - startPointer.x;
    const draggedDeltaY = e.clientY - startPointer.y;
    const isOverThreshold =
      DRAG_THRESHOLD < Math.hypot(draggedDeltaX, draggedDeltaY);

    if (isOverThreshold) {
      setIsDragging(true);
    }
  }

  function handlePointerUp() {
    if (!isDragging) {
      navigate(`/${piece.id}`);
    }

    setIsDragging(false);
  }

  function handleLostPointerCapture() {
    lastPointerRef.current = null;
    startPointerRef.current = null;
  }

  return (
    <div
      className={styles.piece}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onLostPointerCapture={handleLostPointerCapture}
      style={{
        transform: `translate(${piece.position.x}px, ${piece.position.y}px)`,
      }}
    >
      <PieceCard piece={piece} isDragging={isDragging} />
    </div>
  );
}
