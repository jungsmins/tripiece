import { Routes, Route } from 'react-router';
import Home from '../pages/Home';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
