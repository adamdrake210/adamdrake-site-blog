import React from 'react';
import { Box, Button, Flex, Image, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import { CLOUDINARY_URL } from 'constants/constants';
import { AnimateFadeIn } from 'components/common/animations/AnimateFadeIn';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

export const PreviewCard = ({ title, description, imageUrl }: Props) => {
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
        <AnimateFadeIn duration={3}>
          <Box style={{ borderRadius: 8 }}>
            <Image src={imageUrl} alt={`${title}`} w="100%" />
          </Box>
        </AnimateFadeIn>
      </Box>
      <Flex
        direction="column"
        align="flex-start"
        justify="space-between"
        px={16}
      >
        <Box>
          <Title order={3} fz={26} mb={8}>
            {title}
          </Title>
          <Text my={8} size="lg">
            {description.slice(0, 190).concat('...')}
          </Text>
        </Box>
        <Box
          w="100%"
          sx={{
            textAlign: 'center',
            '@media (min-width: 40em)': {
              textAlign: 'left',
            },
          }}
        >
          <motion.div whileTap={{ scale: 0.991 }}>
            <Button
              color="secondary[4]"
              size="sm"
              style={{
                textTransform: 'uppercase',
                fontFamily: "'Montserrat', sans-serif",
              }}
              mt={8}
              py={8}
            >
              Read More
            </Button>
          </motion.div>
        </Box>
      </Flex>
    </Flex>
  );
};
