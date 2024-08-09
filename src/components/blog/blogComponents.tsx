import { Box, Center, Text, Title } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
import Image from 'next/image';

export const blogComponents = {
  types: {
    myCodeField: ({ value }: any) => {
      return (
        <CodeHighlight
          language="tsx"
          style={{
            margin: '16px 0',
          }}
          code={value.code}
        />
      );
    },
    myImage: ({ value }: any) => {
      return (
        <Center>
          <Image
            src={value.cloudinaryurl}
            alt={value.alt}
            width={value.width}
            height={value.height}
          />
        </Center>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: { children?: any }) => <ul>{children}</ul>,
    number: ({ children }: { children?: any }) => <ol>{children}</ol>,
  },
  block: {
    h1: ({ children }: { children?: any }) => (
      <Title order={1} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    h2: ({ children }: { children?: any }) => (
      <Title order={2} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    h3: ({ children }: { children?: any }) => (
      <Title order={3} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    h4: ({ children }: { children?: any }) => (
      <Title order={4} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    h5: ({ children }: { children?: any }) => (
      <Title order={5} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    h6: ({ children }: { children?: any }) => (
      <Title order={6} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    normal: ({ children }: { children?: any }) => {
      return (
        <Text fz="xl" fw={400} pb={8}>
          {children}
        </Text>
      );
    },
    blockquote: ({ children }: { children?: any }) => (
      <Box
        style={theme => ({
          borderLeft: `5px solid ${theme.colors.blue[5]}`,
        })}
        pl={16}
        my={24}
        fs="italic"
        fz={20}
      >
        {children}
      </Box>
    ),
  },
};
