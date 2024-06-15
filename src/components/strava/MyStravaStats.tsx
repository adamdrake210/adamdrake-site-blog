import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Flex, Image, Text, Title } from '@mantine/core';

import { getMyStravaStats } from 'services/api/stravaApi';
import { CustomLoader } from 'components/common/CustomLoader';
import { StravaCardDetails } from './StravaCardDetails';
import { CLOUDINARY_URL } from 'constants/constants';

export const MyStravaStats = () => {
  const { data, isLoading, isError, error } = useQuery<any, Error>(
    ['strave_stats'],
    getMyStravaStats,
  );

  if (isLoading) return <CustomLoader />;

  if (isError)
    return <Text color="red">An error has occurred: {error.message}</Text>;

  return (
    <Flex direction="column" align="center" w="100%" p={16} mb={48}>
      <Flex
        align={'center'}
        justify={'center'}
        mb={24}
        style={{
          flexDirection: 'column',
          '@media (minWidth: 40em)': {
            flexDirection: 'row',
          },
        }}
      >
        <Box>
          <Image
            w={40}
            h={40}
            radius="lg"
            src={`${CLOUDINARY_URL}c_scale,h_40,w_40/adamdrake-blog/strave_logo.png`}
            alt="Strava logo"
          />
        </Box>

        <Title
          order={2}
          ml={16}
          style={{
            textAlign: 'center',
          }}
        >
          My Strava Stats - {new Date().getFullYear()}
        </Title>
      </Flex>
      <Flex
        w="100%"
        justify="space-between"
        style={{
          flexDirection: 'column',
          '@media (minWidth: 40em)': {
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
