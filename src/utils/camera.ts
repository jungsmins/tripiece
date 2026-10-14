import { MIN_ZOOM, MAX_ZOOM } from '@/constants/camera';
import type { Camera } from '@/types/camera';

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function viewportToWorld(
  viewportX: number,
  viewportY: number,
  camera: Camera,
): { worldX: number; worldY: number } {
  const worldX = (viewportX - camera.panX) / camera.zoom;
  const worldY = (viewportY - camera.panY) / camera.zoom;

  return {
    worldX,
    worldY,
  };
}

export function zoomAt(
  camera: Camera,
  viewportCoordinate: { viewportX: number; viewportY: number },
  factor: number,
): Camera {
  const { viewportX, viewportY } = viewportCoordinate;
  const { worldX, worldY } = viewportToWorld(viewportX, viewportY, camera);

  const newZoom = clamp(camera.zoom * factor, MIN_ZOOM, MAX_ZOOM);
  const newPanX = viewportX - worldX * newZoom;
  const newPanY = viewportY - worldY * newZoom;

  return {
    panX: newPanX,
    panY: newPanY,
    zoom: newZoom,
  };
}
