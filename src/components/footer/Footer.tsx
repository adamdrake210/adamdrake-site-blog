import { Flex, Text, useMantineTheme } from '@mantine/core';

import { useNightMode } from 'context/NightModeContext';

export default function Footer() {
  const theme = useMantineTheme();
  const { night } = useNightMode();

  return (
    <Flex
      style={{
        position: 'relative',
        zIndex: 10,
        backdropFilter: 'saturate(180%) blur(20px)',
        transition: 'background-color 0.6s ease',
        backgroundColor: night ? theme.colors.dark[8] : theme.colors.myColor[2],
      }}
    >
      <Flex
        w="100%"
        p="16px 24px"
        justify="center"
        align="center"
        direction="column"
      >
        <Text size="sm">
          Adam Drakes Site &#169; {new Date().getFullYear()}
        </Text>
      </Flex>
    </Flex>
  );
}
