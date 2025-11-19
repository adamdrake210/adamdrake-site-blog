import React from 'react';
import { Image } from '@mantine/core';
import { SELFIE_IMAGE } from 'constants/constants';

type Props = {
  maxWidth: number;
};

export const SelfieImage = ({ maxWidth }: Props) => {
  return (
    <Image
      w={maxWidth}
      h={maxWidth}
      mr={16}
      radius="xl"
      src={SELFIE_IMAGE}
      alt="Adam Drake AI Selfie"
    />
  );
};
