import React from 'react';
import { Box, Flex, Grid, Text, Title } from '@mantine/core';
import { IconBook, IconDownload } from '@tabler/icons-react';

import { RollingButton } from 'components/common/buttons/RollingButton';
import { SmoothImage } from 'components/common/images/SmoothImage';
import {
  MEDRITER_DESCRIPTION,
  MEDRITER_DETAILS,
  MEDRITER_IMAGE,
  MEDRITER_POST_SLUG,
  MEDRITER_URL,
} from 'constants/constants';
import { BLOG_ROUTE } from 'constants/routeConstants';

export const HomepageMedriterBanner = () => {
  return (
    <Box component="section" w="100%" my={24}>
      <Grid gutter={32} align="center">
        <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 1, md: 1 }}>
          <Box
            style={{
              overflow: 'hidden',
              borderRadius: 'var(--mantine-radius-md)',
              border: '1px solid var(--mantine-color-myColor-2)',
            }}
          >
            <SmoothImage
              src={MEDRITER_IMAGE}
              alt="Medriter — write once, publish everywhere"
              aspectRatio={2}
              sizes="(max-width: 768px) calc(100vw - 32px), 395px"
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: 2 }}>
          <Title order={2} fz={{ base: 28, md: 40 }} mb={16}>
            I built a writing app
          </Title>
          <Text fz={{ base: 16, md: 18 }} mb={12}>
            {MEDRITER_DESCRIPTION}
          </Text>
          <Text fz="sm" c="dimmed" mb={24}>
            {MEDRITER_DETAILS}
          </Text>
          <Flex gap={16} wrap="wrap">
            <RollingButton
              label="Read the story"
              href={`${BLOG_ROUTE}/${MEDRITER_POST_SLUG}`}
              icon={<IconBook size={20} />}
              size="lg"
            />
            <RollingButton
              label="Get Medriter"
              href={MEDRITER_URL}
              external
              icon={<IconDownload size={20} />}
              size="lg"
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
