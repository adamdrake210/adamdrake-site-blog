import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Flex, Heading, Text } from '@chakra-ui/react';
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
      shadow={['none', 'none', 'none', 'sm']}
    >
      <Flex align={'center'} flexDir={['column', 'row']}>
        <ImageComponent
          src="strave_logo.png"
          altText="Strava logo"
          height={50}
          width={50}
        />
        <Heading
          as="h2"
          size="2xl"
          fontWeight={200}
          color={headingColor}
          mb={4}
          ml={4}
        >
          My Strava Stats - {new Date().getFullYear()}
        </Heading>
      </Flex>
      <Flex
        width="100%"
        justifyContent="space-between"
        flexDirection={['column', 'row']}
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
