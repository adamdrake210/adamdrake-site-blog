import { Button } from '@mantine/core';
import { MediumLogo } from 'assets/icons/MediumLogo';
import { MEDIUM_SUBSCRIBE_URL } from 'constants/constants';

export const MediumSubscribeButton = () => {
  return (
    <Button
      variant="filled"
      component="a"
      size="lg"
      href={MEDIUM_SUBSCRIBE_URL}
      target="_blank"
      leftSection={<MediumLogo />}
      color="dark"
      style={{ fontWeight: 500 }}
      radius="md"
    >
      See More Articles on Medium
    </Button>
  );
};
