import {
  Box,
  Code,
  Heading,
  Kbd,
  Link,
  Text,
  Divider,
  useColorMode,
  Alert,
} from '@chakra-ui/react';
import { useThemeColors } from 'hooks/useThemeColors';
import NextLink from 'next/link';

export const CustomLink = (props: any) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)',
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props: any) => {
  const { headingColor, bgColor } = useThemeColors();

  return (
    <Alert
      mt={4}
      w="95%"
      color={headingColor}
      backgroundColor={bgColor}
      fontSize="20px"
      fontStyle="italic"
      fontWeight="600"
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const CodeBlock = (props: any) => {
  return <Code width="100%" p={4} mt={4} {...props} />;
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const H1 = (props: any) => {
  const { headingColor } = useThemeColors();

  return <Heading as="h1" size="xl" color={headingColor} my={4} {...props} />;
};

const H2 = (props: any) => {
  const { headingColor } = useThemeColors();

  return (
    <Heading
      as="h2"
      fontWeight="bold"
      color={headingColor}
      size="lg"
      m="32px 0 0px"
      {...props}
    />
  );
};

const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: (props: any) => (
    <Heading
      as="h3"
      size="md"
      color="cyan.900"
      fontWeight="bold"
      m="32px 0 0px"
      {...props}
    />
  ),

  kbd: Kbd,
  br: (props: any) => <Box height="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props: any) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props: any) => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
  code: CodeBlock,
};

export default MDXComponents;
