import { useEffect, useRef, useState } from 'react';

import { ZOOM_SENSITIVITY } from '@/constants/camera';
import type { Camera } from '@/types/camera';
import { zoomAt } from '@/utils/camera';

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
    const viewportElement = viewportRef.current;

    if (!viewportElement) {
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const viewportRect = viewportElement.getBoundingClientRect();
      const viewportCoordinate = {
        viewportX: e.clientX - viewportRect.left,
        viewportY: e.clientY - viewportRect.top,
      };
      const factor = 1 - e.deltaY * ZOOM_SENSITIVITY;

      setCamera(prev => zoomAt(prev, viewportCoordinate, factor));
    };

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
