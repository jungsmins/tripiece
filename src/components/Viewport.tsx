import { useEffect, useRef, useState } from 'react';

import { MAX_ZOOM, MIN_ZOOM, ZOOM_SENSITIVITY } from '@/constants/camera';
import type { Camera } from '@/types/camera';
import { clamp } from '@/utils/math';

import { World } from './World';
import * as styles from './Viewport.css';

export function Viewport() {
  const [camera, setCamera] = useState<Camera>({
    panX: 0,
    panY: 0,
    zoom: 1,
  });
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const lastPointer = lastPointerRef.current;

    if (!lastPointer) {
      return;
    }

    const moveX = e.clientX - lastPointer.x;
    const moveY = e.clientY - lastPointer.y;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };

    setCamera(prev => ({
      ...prev,
      panX: prev.panX + moveX,
      panY: prev.panY + moveY,
    }));
  }

  function handleLostPointerCapture() {
    lastPointerRef.current = null;
  }

  useEffect(() => {
    function handleWheel(e: WheelEvent) {
      e.preventDefault();

      const factor = 1 - e.deltaY * ZOOM_SENSITIVITY;

      setCamera(prev => ({
        ...prev,
        zoom: clamp(prev.zoom * factor, MIN_ZOOM, MAX_ZOOM),
      }));
    }

    const viewportElement = viewportRef.current;

    if (!viewportElement) {
      return;
    }

    viewportElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => viewportElement.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div
      className={styles.viewport}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onLostPointerCapture={handleLostPointerCapture}
      ref={viewportRef}
    >
      <World camera={camera} />
    </div>
  );
}
