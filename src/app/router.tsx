import { Routes, Route } from 'react-router';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import PlanLayout from '@/layouts/PlanLayout';
import CanvasView from '@/pages/CanvasView/CanvasView';
import MapView from '@/pages/MapView/MapView';
import TimelineView from '@/pages/TimelineView/TimelineView';

const ROUTES = {
  HOME: '/',
  NOT_FOUND: '*',
  PLAN: '/plan/:planId',
  CANVAS: 'canvas',
  TIMELINE: 'timeline',
  MAP: 'map',
};

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PLAN} element={<PlanLayout />}>
        <Route path={ROUTES.CANVAS} element={<CanvasView />} />
        <Route path={ROUTES.TIMELINE} element={<TimelineView />} />
        <Route path={ROUTES.MAP} element={<MapView />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
