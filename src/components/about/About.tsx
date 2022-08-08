import React from 'react';
import { Heading, Text, Box, Divider } from '@chakra-ui/react';
import { useThemeColors } from 'hooks/useThemeColors';

export const About: React.FC = () => {
  const { headingColor } = useThemeColors();

  return (
    <Box p={[4, 8]}>
      <Heading as="h1" size="3xl" mb={4} color={headingColor}>
        About Me
      </Heading>
      <Text mb={4}>
        I am a Frontend Developer with some Backend Experience based in Prague
        with 5 years experience. I work with React, Redux, JavaScript, Next.js,
        Nodejs and Jest daily. I love building React based applications, front
        end architecture, Backend APIs and coding in general. I am currently
        diving deep on Computer Science fundamentals to give me a solid, general
        overview.
      </Text>
      <Divider />
    </Box>
  );
};
