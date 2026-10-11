import { Outlet } from 'react-router';

import PlanHeader from './PlanHeader';
import * as styles from './PlanLayout.css';

export default function PlanLayout() {
  return (
    <div className={styles.container}>
      <PlanHeader />
      <Outlet />
    </div>
  );
}
