import type { Camera } from '@/types/camera';

import * as styles from './World.css';

type WorldProps = {
  camera: Camera;
};

export function World({ camera }: WorldProps) {
  const { panX, panY, zoom } = camera;

  return (
    <div
      className={styles.world}
      style={{
        transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
      }}
    />
  );
}
