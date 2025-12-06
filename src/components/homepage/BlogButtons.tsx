import { Button, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBook } from '@tabler/icons-react';
import { MediumSubscribeButton } from 'components/common/buttons/MediumSubscribeButton';
import { SubstackButton } from 'components/common/buttons/SubstackButton';

export const BlogButtons = () => {
  const isMdDown = useMediaQuery('(max-width: 747px)');

  return (
    <Flex
      direction={isMdDown ? 'column' : 'row'}
      gap={16}
      justify="center"
      align="center"
      w="100%"
      my={64}
    >
      <Button
        component="a"
        href="/blog"
        variant="filled"
        size="lg"
        color="dark"
        radius="md"
        leftSection={<IconBook />}
        w={200}
      >
        Blog
      </Button>
      <MediumSubscribeButton />
      <SubstackButton />
    </Flex>
  );
};
