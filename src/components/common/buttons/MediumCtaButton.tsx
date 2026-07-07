import { MediumLogo } from 'assets/icons/MediumLogo';
import { RollingButton } from './RollingButton';

export const MediumCtaButton = ({ mediumUrl }: { mediumUrl: string }) => {
  return (
    <RollingButton
      label="Read This Article on Medium"
      href={mediumUrl}
      external
      icon={<MediumLogo size={20} />}
      size="lg"
    />
  );
};
