import React from 'react';
import { Flex, Text, Box, Link, Tag, Image, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import { CLOUDINARY_URL } from 'constants/constants';
import { useThemeColors } from 'hooks/useThemeColors';

type Props = {
  post: any;
  pageCategory: string;
  cta: string;
  pageTitle: string;
};

export default function HomepageBanner({
  post,
  pageCategory,
  cta,
  pageTitle,
}: Props) {
  const { slug, title, description, imageUniqueIdentifier } = post;
  const { headingColor } = useThemeColors();

  return (
    <Box
      as="section"
      w="100%"
      shadow={['none', 'none', 'none', 'sm']}
      p={4}
      mb={8}
      borderBottom="5px solid #00A3C4"
    >
      <Heading
        as="h2"
        fontSize={['4xl', '5xl']}
        mb={4}
        w="100%"
        textAlign={['center', 'center', 'left']}
        color={headingColor}
        px={[4]}
      >
        {pageTitle}
      </Heading>
      <NextLink
        as={`/${pageCategory}/${slug}`}
        href={`/${pageCategory}/[slug]`}
      >
        <Link
          _hover={{
            backgroundColor: '#f6f6f6',
          }}
          w="100%"
        >
          <Flex
            flexDirection={['column', 'column', 'column', 'row']}
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Image
              src={`${CLOUDINARY_URL}c_scale,h_345,w_500/images/${pageCategory}/${slug}_${imageUniqueIdentifier}.jpg`}
              alt={`${title}`}
              w={['100%', '100%', '100%', '50%']}
              mr={[0, 0, 0, 4]}
              mb={[4, 4, 4, 0]}
            />
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Heading fontSize={40} color={headingColor}>
                {title}
              </Heading>
              <Text mt={2} fontSize={20}>
                {description}
              </Text>
              <Box w="100%" textAlign={['center', 'left']}>
                <Tag colorScheme="cyan" size="lg" mt={2}>
                  {cta}
                </Tag>
              </Box>
            </Flex>
          </Flex>
        </Link>
      </NextLink>
    </Box>
  );
}
