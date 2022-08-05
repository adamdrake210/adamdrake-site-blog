import React from 'react';
import { ImageFlexCenter } from './ImageFlexCenter';

interface Props {
  src: string;
  altText: string;
  imageCategory: string;
}

export const Image266x400: React.FC<Props> = ({
  src,
  altText,
  imageCategory,
}) => {
  return (
    <ImageFlexCenter
      src={src}
      altText={altText}
      imageCategory={imageCategory}
      imageSize="c_scale,h_400,w_266"
      width={266}
      height={400}
    />
  );
};
