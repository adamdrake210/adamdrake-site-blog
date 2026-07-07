import { MediumLogo } from 'assets/icons/MediumLogo';
import { MEDIUM_SUBSCRIBE_URL } from 'constants/constants';
import { RollingButton } from './RollingButton';

export const MediumSubscribeButton = ({
  buttomText = 'Medium',
}: {
  buttomText?: string;
}) => {
  return (
    <RollingButton
      label={buttomText}
      href={MEDIUM_SUBSCRIBE_URL}
      external
      icon={<MediumLogo size={20} />}
    />
  );
};
