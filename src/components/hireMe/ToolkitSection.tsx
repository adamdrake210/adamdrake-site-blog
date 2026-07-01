import React from 'react';

import { Badge, Box, Flex, Text, Title } from '@mantine/core';

import { toolkitData } from './data/toolkitData';

export const ToolkitSection: React.FC = () => {
  return (
    <Box my={40}>
      <Title order={2} mb={24}>
        Toolkit
      </Title>
      {toolkitData.map(({ category, items }) => (
        <Flex key={category} align="flex-start" gap={16} mb={16} wrap="wrap">
          <Text
            size="sm"
            fw={600}
            c="myColor.8"
            w={90}
            style={{ flexShrink: 0, textTransform: 'uppercase' }}
          >
            {category}
          </Text>
          <Flex gap={8} wrap="wrap">
            {items.map(item => (
              <Badge
                key={item}
                variant="light"
                color="myColor.6"
                size="lg"
                radius="sm"
                style={{ textTransform: 'none' }}
              >
                {item}
              </Badge>
            ))}
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};
