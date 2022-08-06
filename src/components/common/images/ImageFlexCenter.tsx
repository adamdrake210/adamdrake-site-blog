import React from 'react';
import { Image, Flex } from '@chakra-ui/react';
import { CLOUDINARY_URL } from 'constants/constants';

interface Props {
  src: string;
  altText: string;
  imageSize: string;
  width: number;
  height?: number;
  marginTop?: number;
}

export const ImageFlexCenter: React.FC<Props> = ({
  src,
  altText,
  imageSize,
  width,
  height,
  marginTop,
}) => {
  return (
    <Flex justifyContent="center" alignItems="center" mt={marginTop || 3}>
      <Image
        src={`${CLOUDINARY_URL}${imageSize}/adamdrake-blog/${src}`}
        alt={altText}
        w={width}
        h={height}
        mb={4}
        loading="lazy"
      />
    </Flex>
  );
};
