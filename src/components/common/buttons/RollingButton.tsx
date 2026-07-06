import React from 'react';
import NextLink from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  icon?: React.ReactNode;
  size?: 'default' | 'lg';
};

const STAGGER_MS = 30;

// Pill button where each letter rolls up individually in rapid
// sequence on hover, while the arrow swaps out to the right
export const RollingButton = ({
  label,
  href,
  onClick,
  external,
  icon,
  size = 'default',
}: Props) => {
  const chars = label.split('');
  const cls = `rolling-btn${size === 'lg' ? ' rolling-btn--lg' : ''}`;

  const content = (
    <>
      {icon && <span className="rolling-btn-leading-icon">{icon}</span>}
      <span className="rolling-btn-text" aria-label={label}>
        {chars.map((ch, i) => (
          <span
            key={i}
            className="rolling-btn-char"
            style={
              { '--char-delay': `${i * STAGGER_MS}ms` } as React.CSSProperties
            }
          >
            <span className="rolling-btn-line">{ch === ' ' ? '\u00A0' : ch}</span>
            <span className="rolling-btn-line" aria-hidden="true">
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          </span>
        ))}
      </span>
      <span className="rolling-btn-icon">
        <IconArrowRight size={16} stroke={2.2} />
        <IconArrowRight size={16} stroke={2.2} aria-hidden="true" />
      </span>
    </>
  );

  if (href && external) {
    return (
      <a
        className={cls}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <NextLink className={cls} href={href}>
        {content}
      </NextLink>
    );
  }

  return (
    <button className={cls} type="button" onClick={onClick}>
      {content}
    </button>
  );
};
