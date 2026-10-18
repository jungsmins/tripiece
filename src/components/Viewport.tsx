import { useEffect, useRef } from 'react';

import { ZOOM_SENSITIVITY } from '@/constants/camera';
import { useCameraStore } from '@/stores/camera';

import { World } from './World';

import * as styles from './Viewport.css';

type ViewportProps = {
  onViewportResize: (width: number, height: number) => void;
};

export function Viewport({ onViewportResize }: ViewportProps) {
  const camera = useCameraStore(state => state.camera);
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

    const delta = {
      x: e.clientX - lastPointer.x,
      y: e.clientY - lastPointer.y,
    };
    lastPointerRef.current = { x: e.clientX, y: e.clientY };

    useCameraStore.getState().panBy(delta);
  }

  function handleLostPointerCapture() {
    lastPointerRef.current = null;
  }

  useEffect(() => {
    const viewportElement = viewportRef.current;

    if (!viewportElement) {
      return;
    }

    const viewportRect = viewportElement.getBoundingClientRect();
    onViewportResize(viewportRect.width, viewportRect.height);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const viewportRect = viewportElement.getBoundingClientRect();
      const viewportPoint = {
        x: e.clientX - viewportRect.left,
        y: e.clientY - viewportRect.top,
      };
      const factor = 1 - e.deltaY * ZOOM_SENSITIVITY;

      useCameraStore.getState().zoomAt(viewportPoint, factor);
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
