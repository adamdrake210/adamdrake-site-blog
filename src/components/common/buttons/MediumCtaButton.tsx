import { Button } from '@mantine/core';
import { MediumLogo } from 'assets/icons/MediumLogo';

export const MediumCtaButton = ({ mediumUrl }: { mediumUrl: string }) => {
  return (
    <Button
      variant="filled"
      component="a"
      size="lg"
      href={mediumUrl}
      target="_blank"
      leftSection={<MediumLogo />}
      color="dark"
      style={{ fontWeight: 500 }}
      radius="md"
    >
      Read This Article on Medium
    </Button>
  );
};
