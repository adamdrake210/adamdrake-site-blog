import React from 'react';
import { ImageFlexCenter } from './ImageFlexCenter';

interface Props {
  src: string;
  altText: string;
}

export const Image960x660: React.FC<Props> = ({ src, altText }) => {
  return (
    <ImageFlexCenter
      src={src}
      altText={altText}
      imageSize="c_scale,h_460,w_960"
      width={728}
      marginTop={8}
    />
  );
};
