import React from 'react';
import Image from 'next/image';

import { CLOUDINARY_URL } from 'constants/constants';

type Props = {
  src: string;
  altText: string;
  width: number;
  height: number;
};

export const ImageComponent = ({ src, altText, width, height }: Props) => {
  return (
    <Image
      src={`${CLOUDINARY_URL}c_scale,h_${height},w_${width}/adamdrake-blog/${src}`}
      alt={altText}
      width={width}
      height={height}
      priority
    />
  );
};
