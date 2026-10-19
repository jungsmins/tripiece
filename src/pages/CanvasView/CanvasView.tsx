import { useState } from 'react';

import Viewport from '@/components/Viewport';
import { useCameraStore } from '@/stores/camera';
import { usePieceStore } from '@/stores/piece';
import { viewportToWorld } from '@/utils/camera';

import * as styles from './CanvasView.css';

export default function CanvasView() {
  const [viewportSize, setViewportSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const addPiece = usePieceStore(state => state.addPiece);

  function handleViewportResize(width: number, height: number) {
    setViewportSize({ width, height });
  }

  function handleAddPiece() {
    const camera = useCameraStore.getState().camera;
    const viewportPoint = {
      x: viewportSize.width / 2,
      y: viewportSize.height / 2,
    };
    const worldPoint = viewportToWorld(viewportPoint, camera);
    addPiece({ position: worldPoint });
  }

  return (
    <main className={styles.main}>
      <section className={styles.toolPanel}>
        <button className={styles.button} onClick={handleAddPiece}>
          조각 만들기
        </button>
      </section>
      <Viewport onViewportResize={handleViewportResize} />
      <section className={styles.chatPanel}>
        <div>채팅</div>
      </section>
    </main>
  );
}
