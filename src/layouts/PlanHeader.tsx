import { Link, NavLink } from 'react-router';
import * as styles from './PlanHeader.css';

export default function PlanHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to="/dashboard" className={styles.backToLink}>
          ← 대시보드
        </Link>
        <h1 className={styles.Title}>여행 계획</h1>
        <nav className={styles.Navigation}>
          <NavLink
            to="canvas"
            className={({ isActive }) =>
              isActive ? `${styles.Link} ${styles.activeLink}` : styles.Link
            }
          >
            캔버스
          </NavLink>
          <NavLink
            to="timeline"
            className={({ isActive }) =>
              isActive ? `${styles.Link} ${styles.activeLink}` : styles.Link
            }
          >
            계획표
          </NavLink>
          <NavLink
            to="map"
            className={({ isActive }) =>
              isActive ? `${styles.Link} ${styles.activeLink}` : styles.Link
            }
          >
            지도
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
