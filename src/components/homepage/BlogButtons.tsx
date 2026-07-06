import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBook, IconStack2 } from '@tabler/icons-react';
import { MediumLogo } from 'assets/icons/MediumLogo';
import { RollingButton } from 'components/common/buttons/RollingButton';
import { MEDIUM_SUBSCRIBE_URL, SUBSTACK_URL } from 'constants/constants';

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
      <RollingButton label="Blog" href="/blog" icon={<IconBook size={20} />} size="lg" />
      <RollingButton
        label="Medium"
        href={MEDIUM_SUBSCRIBE_URL}
        external
        icon={<MediumLogo size={20} />}
        size="lg"
      />
      <RollingButton
        label="Substack"
        href={SUBSTACK_URL}
        external
        icon={<IconStack2 size={20} />}
        size="lg"
      />
    </Flex>
  );
};
