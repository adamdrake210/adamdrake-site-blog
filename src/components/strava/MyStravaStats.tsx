import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { getMyStravaStats } from 'services/api/stravaApi';
import { Loader } from 'components/common/Loader';
import { useThemeColors } from 'hooks/useThemeColors';
import { StravaCardDetails } from './StravaCardDetails';
import { ImageComponent } from 'components/common/images/ImageComponent';

export const MyStravaStats = () => {
  const { headingColor } = useThemeColors();
  const { data, isLoading, isError, error } = useQuery<any, Error>(
    ['strave_stats'],
    getMyStravaStats,
  );

  if (isLoading) return <Loader />;

  if (isError)
    return <Text color="red.500">An error has occurred: {error.message}</Text>;

  return (
    <Flex
      as="section"
      flexDir="column"
      alignItems="center"
      w="100%"
      p={4}
      mb={8}
    >
      <Heading as="h2" size="3xl" color={headingColor} mb={4}>
        My Strava Stats - {new Date().getFullYear()}
      </Heading>
      <ImageComponent
        src="strave_logo.png"
        altText="Strava logo"
        height={70}
        width={70}
      />
      <Flex width="100%" justifyContent="space-between">
        <StravaCardDetails
          heading="Total Distance Ran"
          statistics={`${Math.floor(data.distance / 1000)} km`}
        />
        <StravaCardDetails heading="Total Runs" statistics={data.count} />
        <StravaCardDetails
          heading="Total Running Time"
          statistics={data.movingTime}
        />
      </Flex>
    </Flex>
  );
};
