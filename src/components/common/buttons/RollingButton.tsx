import React from 'react';
import NextLink from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
};

// Pill button where the label rolls up and its twin rolls in from
// below on hover, while the arrow swaps out to the right
export const RollingButton = ({ label, href, onClick, external }: Props) => {
  const content = (
    <>
      <span className="rolling-btn-text">
        <span className="rolling-btn-line">{label}</span>
        <span className="rolling-btn-line" aria-hidden="true">
          {label}
        </span>
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
        className="rolling-btn"
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
      <NextLink className="rolling-btn" href={href}>
        {content}
      </NextLink>
    );
  }

  return (
    <button className="rolling-btn" type="button" onClick={onClick}>
      {content}
    </button>
  );
};
