import React from 'react';
import NextLink from 'next/link';
import {
  Button,
  Flex,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useThemeColors } from 'hooks/useThemeColors';
import { SITE_NAME } from 'constants/constants';
import { SelectColorMode } from './SelectColorMode';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Navigation: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Colors for light and dark mode
  const { bgColor, color } = useThemeColors();

  function DrawerNav() {
    const btnRef = React.useRef();

    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef.current}
        >
          <DrawerOverlay />

          <DrawerContent w={250}>
            <DrawerCloseButton />
            <DrawerHeader
              borderBottomWidth="1px"
              backgroundColor={bgColor}
              color={color}
              fontWeight={600}
              fontFamily="Amatic SC"
              fontSize={36}
            >
              {SITE_NAME}
            </DrawerHeader>
            <DrawerBody>
              <Flex
                color="#000"
                direction="column"
                alignItems="flex-start"
                fontWeight={600}
                textTransform="uppercase"
              >
                <NextLink href="/articles" passHref>
                  <Button
                    as="a"
                    variant="link"
                    fontSize={18}
                    py={[3]}
                    color={color}
                    fontWeight={600}
                  >
                    Articles
                  </Button>
                </NextLink>
                <NextLink href="/about" passHref>
                  <Button
                    as="a"
                    variant="link"
                    fontSize={18}
                    py={[3]}
                    color={color}
                    fontWeight={600}
                  >
                    About
                  </Button>
                </NextLink>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <StickyNav
      width="100%"
      bg={bgColor}
      as="nav"
      p={[2]}
      fontFamily="Amatic SC"
      shadow="lg"
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1200px"
        width="100%"
        m="0 auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="link"
              fontSize={[28, 28, 46]}
              fontWeight={700}
              color={color}
              p={[1, 2]}
              fontFamily="Amatic SC"
            >
              {SITE_NAME}
            </Button>
          </NextLink>
        </Box>
        <Flex
          color="#ffffff"
          display={['none', 'none', 'none', 'flex']}
          alignItems="center"
          fontWeight={600}
          textTransform="uppercase"
        >
          <NextLink href="/articles" passHref>
            <Button
              as="a"
              variant="link"
              fontSize={32}
              p={[1, 4]}
              color={color}
            >
              Articles
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="link"
              fontSize={32}
              p={[1, 4]}
              color={color}
            >
              About
            </Button>
          </NextLink>
          <SelectColorMode />
        </Flex>
        <Box
          color="#ffffff"
          display={['flex', 'flex', 'flex', 'none']}
          alignItems="center"
        >
          <SelectColorMode />
          <Button
            as="button"
            variant="link"
            fontSize={22}
            p={[1, 4]}
            onClick={onOpen}
          >
            <HamburgerIcon color={color} />
          </Button>
        </Box>
      </Flex>
      <DrawerNav />
    </StickyNav>
  );
};

export default Navigation;
