import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Flex, Text, Title } from '@mantine/core';

import { getMyStravaStats } from 'services/api/stravaApi';
import { Loader } from 'components/common/Loader';
import { StravaCardDetails } from './StravaCardDetails';
import { ImageComponent } from 'components/common/images/ImageComponent';

export const MyStravaStats = () => {
  const { data, isLoading, isError, error } = useQuery<any, Error>(
    ['strave_stats'],
    getMyStravaStats,
  );

  if (isLoading) return <Loader />;

  if (isError)
    return <Text color="red">An error has occurred: {error.message}</Text>;

  return (
    <Flex direction="column" align="center" w="100%" p={4} mb={8}>
      <Flex
        align={'center'}
        sx={{
          flexDirection: 'column',
          '@media (min-width: 40em)': {
            flexDirection: 'row',
          },
        }}
      >
        <ImageComponent
          src="strave_logo.png"
          altText="Strava logo"
          height={50}
          width={50}
        />
        <Title order={2} mb={4} ml={4}>
          My Strava Stats - {new Date().getFullYear()}
        </Title>
      </Flex>
      <Flex
        w="100%"
        justify="space-between"
        sx={{
          flexDirection: 'column',
          '@media (min-width: 40em)': {
            flexDirection: 'row',
          },
        }}
      >
        <StravaCardDetails
          heading="Total Distance Ran"
          statistics={`${Math.floor(data.distance / 1000)} km`}
        />
        <StravaCardDetails heading="Total Runs" statistics={data.count} />
        <StravaCardDetails
          heading="Total Running Time"
          statistics={`${(data.movingTime * 0.0166667).toFixed(0)} mins`}
        />
      </Flex>
    </Flex>
  );
};
