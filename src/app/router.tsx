import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Plan from '../pages/Plan';
import NotFound from '@/pages/NotFound';

const ROUTES = {
  HOME: '/',
  NOT_FOUND: '*',
  PLAN: '/plan/:id',
};

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PLAN} element={<Plan />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
