import { MIN_ZOOM, MAX_ZOOM } from '@/constants/camera';
import type { Camera } from '@/types/camera';
import type { Point } from '@/types/piece';

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function viewportToWorld(viewportPoint: Point, camera: Camera): Point {
  const worldX = (viewportPoint.x - camera.panX) / camera.zoom;
  const worldY = (viewportPoint.y - camera.panY) / camera.zoom;

  return {
    x: worldX,
    y: worldY,
  };
}

export function getZoomedCamera(
  camera: Camera,
  viewportPoint: Point,
  factor: number,
): Camera {
  const worldPoint = viewportToWorld(viewportPoint, camera);

  const newZoom = clamp(camera.zoom * factor, MIN_ZOOM, MAX_ZOOM);
  const newPanX = viewportPoint.x - worldPoint.x * newZoom;
  const newPanY = viewportPoint.y - worldPoint.y * newZoom;

  return {
    panX: newPanX,
    panY: newPanY,
    zoom: newZoom,
  };
}
