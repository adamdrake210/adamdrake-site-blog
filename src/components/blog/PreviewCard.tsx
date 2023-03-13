import { Box, Button, Flex, Image, Text, Title } from '@mantine/core';
import { CLOUDINARY_URL } from 'constants/constants';
import React from 'react';

type Props = {
  title: string;
  description: string;
  slug: string;
};

export const PreviewCard = ({ title, description, slug }: Props) => {
  return (
    <Flex
      mb={32}
      sx={{
        flexDirection: 'column',
        '@media (min-width: 40em)': {
          flexDirection: 'row',
        },
      }}
    >
      <Box
        sx={{
          '@media (min-width: 40em)': {
            flex: '0 0 40%',
          },
        }}
      >
        <Image
          src={`${CLOUDINARY_URL}c_scale,h_230,w_400/adamdrake-blog/${slug}.png`}
          alt={`${title}`}
          w="100%"
        />
      </Box>
      <Flex
        direction="column"
        align="flex-start"
        justify="flex-start"
        px={16}
        sx={{
          '@media (min-width: 40em)': {
            flex: '0 0 60%',
          },
        }}
      >
        <Title order={3}>{title}</Title>
        <Text my={8} size="lg">
          {description}
        </Text>
        <Box
          w="100%"
          sx={{
            textAlign: 'center',
            '@media (min-width: 40em)': {
              textAlign: 'left',
            },
          }}
        >
          <Button size="md" mt={2} py={3}>
            Read Blog Post
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
