import { Button } from '@mantine/core';
import { IconStack2 } from '@tabler/icons-react';
import { SUBSTACK_URL } from 'constants/constants';

export const SubstackButton = () => {
  return (
    <Button
      variant="filled"
      component="a"
      size="lg"
      href={SUBSTACK_URL}
      target="_blank"
      leftSection={<IconStack2 />}
      color="dark"
      style={{ fontWeight: 500 }}
      radius="md"
    >
      Read Articles on Substack
    </Button>
  );
};
