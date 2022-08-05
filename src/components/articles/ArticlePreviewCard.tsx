import React from 'react';
import { Heading, Flex, Box, Text, Image, Tag } from '@chakra-ui/react';
import { CLOUDINARY_URL } from 'constants/constants';
import { ReadTime } from 'types/types';
import { useHeadingColors } from 'hooks/useHeadingColors';

type Props = {
  slug: string;
  title: string;
  imageUniqueIdentifier: string;
  description: string;
  readTime: ReadTime;
};

const ArticlePreviewCard = ({
  slug,
  title,
  imageUniqueIdentifier,
  description,
  readTime,
}: Props) => {
  const headingColor = useHeadingColors();

  return (
    <Box key={slug} w="100%" shadow="sm" p={4} borderBottom="5px solid #00A3C4">
      <Flex
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={`${CLOUDINARY_URL}c_scale,h_205,w_300/images/articles/${slug}_${imageUniqueIdentifier}.jpg`}
          alt={title}
          w={['100%', 300]}
          mr={[0, 0, 4]}
          mb={[4, 0]}
        />
        <Flex flexDirection="column">
          <Heading fontSize="2xl" color={headingColor}>
            {title}
          </Heading>
          <Text mt={2}>{description}</Text>
          <Box w="100%" textAlign={['center', 'left']}>
            <Tag colorScheme="cyan" size="md" mt={2} width="116px">
              Read Article
            </Tag>
            <Text fontStyle="italic" color="grey" mt={1}>
              {`${readTime.text}`}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ArticlePreviewCard;
