import React from 'react';

import { Box, Divider, Flex, Grid, Text } from '@mantine/core';

import { aiWorkflowData } from './data/toolkitData';

export const AIWorkflowPanel: React.FC = () => {
  return (
    <Box
      p={32}
      my={40}
      style={{
        backgroundColor: '#171412',
        borderRadius: 12,
      }}
    >
      <Flex align="center" gap={16} mb={24}>
        <Text
          size="sm"
          c="gray.5"
          style={{ letterSpacing: 3, textTransform: 'uppercase' }}
        >
          How I work with AI
        </Text>
        <Divider style={{ flexGrow: 1 }} color="gray.8" />
      </Flex>

      <Text size="lg" c="gray.2" mb={24} maw={780}>
        I treat AI as a collaborator, not a replacement. Day to day I drive
        Claude Code and multi-agent workflows to move faster while keeping a
        human firmly in the loop — reviewing, steering, and owning every
        result.
      </Text>

      <Grid gutter={24}>
        {aiWorkflowData.map(({ title, text }) => (
          <Grid.Col key={title} span={{ base: 12, sm: 4 }}>
            <Text fw={600} c="gray.1" mb={6}>
              {title}
            </Text>
            <Text size="sm" c="gray.5">
              {text}
            </Text>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
