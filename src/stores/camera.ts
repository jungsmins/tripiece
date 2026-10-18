import { create } from 'zustand';

import type { Camera } from '@/types/camera';
import type { Point } from '@/types/piece';
import { getZoomedCamera } from '@/utils/camera';

type CameraState = {
  camera: Camera;
  panBy: (delta: Point) => void;
  zoomAt: (point: Point, factor: number) => void;
};

export const useCameraStore = create<CameraState>()(set => ({
  camera: {
    panX: 0,
    panY: 0,
    zoom: 1,
  },

  panBy: delta =>
    set(state => ({
      camera: {
        ...state.camera,
        panX: state.camera.panX + delta.x,
        panY: state.camera.panY + delta.y,
      },
    })),

  zoomAt: (point, factor) =>
    set(state => ({
      camera: getZoomedCamera(state.camera, point, factor),
    })),
}));
