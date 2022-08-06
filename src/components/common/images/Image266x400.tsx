import React from 'react';
import { ImageFlexCenter } from './ImageFlexCenter';

interface Props {
  src: string;
  altText: string;
}

export const Image266x400: React.FC<Props> = ({ src, altText }) => {
  return (
    <ImageFlexCenter
      src={src}
      altText={altText}
      imageSize="c_scale,h_400,w_266"
      width={266}
      height={400}
    />
  );
};
