import { Viewport } from '@/components/Viewport';

import * as styles from './CanvasView.css';

export default function CanvasView() {
  return (
    <main className={styles.main}>
      <section className={styles.toolPanel}>
        <button className={styles.button}>조각 만들기</button>
      </section>
      <Viewport />
      <section className={styles.chatPanel}>
        <div>채팅</div>
      </section>
    </main>
  );
}
