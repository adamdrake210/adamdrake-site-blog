import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

export type ErrorMessageProps = {
  errorMessage: string;
};

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <Alert icon={<IconAlertCircle />} title="Error" color="red">
      Something went wrong: <br /> {errorMessage}
    </Alert>
  );
};

export default ErrorMessage;
