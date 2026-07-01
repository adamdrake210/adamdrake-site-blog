import React from 'react';

import { Box, List, Text, Timeline, Title } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';

import { experienceData } from './data/experienceData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <Box my={40}>
      <Title order={2} mb={24}>
        Experience
      </Title>
      <Timeline active={experienceData.length} bulletSize={28} lineWidth={2}>
        {experienceData.map(({ id, company, location, title, period, bullets }) => (
          <Timeline.Item
            key={id}
            bullet={<IconBriefcase size={16} />}
            title={
              <Text fw={600} size="lg">
                {title} &mdash; {company}, {location}
              </Text>
            }
          >
            <Text size="sm" c="myColor.7" mb={8}>
              {period}
            </Text>
            <List size="sm" spacing={4}>
              {bullets.map(bullet => (
                <List.Item key={bullet}>{bullet}</List.Item>
              ))}
            </List>
          </Timeline.Item>
        ))}
      </Timeline>
    </Box>
  );
};
