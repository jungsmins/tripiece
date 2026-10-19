import { MapPin, Clock } from 'lucide-react';

import type { Piece, PieceType } from '@/types/piece';

import * as styles from './PieceCard.css';

type PieceCardProps = {
  piece: Piece;
};

const TYPE_META: Record<PieceType, { label: string; empty: string }> = {
  map: { label: '지도', empty: '장소를 선택하면 사진이 보여요' },
  text: { label: '글', empty: '글을 작성해 보세요' },
  canvas: { label: '그림', empty: '그림을 그려 보세요' },
};

function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  if (hours === 0) {
    return `${rest}분`;
  }

  return rest === 0 ? `${hours}시간` : `${hours}시간 ${rest}분`;
}

export default function PieceCard({ piece }: PieceCardProps) {
  const { type, title, durationMinutes, location } = piece;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span
          className={`${styles.typeBadge} ${styles.typeBadgeVariants[type]}`}
        >
          <span className={styles.typeDot} />
          {TYPE_META[type].label}
        </span>
        <span className={styles.duration}>
          <Clock width={12} height={12} strokeWidth={1.75} />
          {formatDuration(durationMinutes)}
        </span>
      </div>
      <h3 className={styles.title} title={title}>
        {title ? title : '제목 없음'}
      </h3>
      <div className={`${styles.content} ${styles.contentVariants[type]}`}>
        <div className={styles.empty}>{TYPE_META[type].empty}</div>
      </div>
      <div className={styles.footer}>
        <MapPin
          className={styles.footerIcon}
          width={12}
          height={12}
          strokeWidth={1.75}
        />
        {location?.name ? (
          <span className={styles.footerLabel} title={location.name}>
            {location.name}
          </span>
        ) : (
          <span
            className={`${styles.footerLabel} ${styles.footerLabelMissing}`}
          >
            장소 미정
          </span>
        )}
      </div>
    </div>
  );
}
