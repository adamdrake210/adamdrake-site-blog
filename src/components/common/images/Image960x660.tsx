import React from 'react';
import { ImageFlexCenter } from './ImageFlexCenter';

interface Props {
  src: string;
  altText: string;
  imageCategory: string;
}

export const Image960x660: React.FC<Props> = ({
  src,
  altText,
  imageCategory,
}) => {
  return (
    <ImageFlexCenter
      src={src}
      altText={altText}
      imageCategory={imageCategory}
      imageSize="c_scale,h_660,w_960"
      width={728}
      marginTop={8}
    />
  );
};
