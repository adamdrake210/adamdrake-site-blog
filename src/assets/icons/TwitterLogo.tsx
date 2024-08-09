import { useMantineTheme } from '@mantine/core';
import React from 'react';

export const TwitterLogo = () => {
  const theme = useMantineTheme();

  const iconColor = theme.colors.gray[6];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill={iconColor}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
};
