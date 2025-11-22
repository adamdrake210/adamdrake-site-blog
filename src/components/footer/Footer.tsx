import { Flex, Text, useMantineTheme } from '@mantine/core';

export default function Footer() {
  const theme = useMantineTheme();

  return (
    <Flex
      style={{
        position: 'relative',
        zIndex: 10,
        backdropFilter: 'saturate(180%) blur(20px)',
        transition: 'background-color 0.1 ease-in-out',
        backgroundColor: theme.colors.myColor[2],
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
