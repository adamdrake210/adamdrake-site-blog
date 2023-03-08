import React from 'react';
import { Heading, Flex, Box, Text, Image, Tag } from '@chakra-ui/react';
import { CLOUDINARY_URL } from 'constants/constants';
import { useThemeColors } from 'hooks/useThemeColors';

type Props = {
  slug: string;
  title: string;
  description: string;
};

const BlogPreviewCard = ({ slug, title, description }: Props) => {
  const { headingColor } = useThemeColors();

  return (
    <Box key={slug} w="100%" shadow="sm" p={4} borderBottom="5px solid #00A3C4">
      <Flex
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={`${CLOUDINARY_URL}c_scale,h_205,w_300/adamdrake-blog/${slug}.png`}
          alt={title}
          w={['100%', 300]}
          mr={[0, 0, 4]}
          mb={[4, 0]}
        />
        <Flex flexDirection="column">
          <Heading fontSize="4xl" color={headingColor}>
            {title}
          </Heading>
          <Text mt={2}>{description}</Text>
          <Box w="100%" textAlign={['center', 'left']}>
            <Tag colorScheme="cyan" size="md" mt={2}>
              Read Post
            </Tag>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default BlogPreviewCard;
