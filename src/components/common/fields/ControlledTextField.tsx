import { Box, Input } from '@mantine/core';
import { Control, Controller } from 'react-hook-form';

export type ControlledTextFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  type: string;
  rules?: any;
  disabled?: boolean;
  helperText?: string;
  placeholder?: string;
};

const ControlledTextField = ({
  name,
  control,
  type,
  label,
  rules,
  disabled,
  helperText,
  placeholder,
}: ControlledTextFieldProps) => {
  return (
    <Box my={8} w="100%">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <Input.Wrapper
            error={error?.message}
            description={helperText}
            label={label || name}
          >
            <Input
              name={name}
              onChange={field.onChange}
              error={!!error}
              type={type}
              value={field.value === null ? '' : field.value}
              checked={field.value}
              disabled={disabled}
              placeholder={placeholder || `Enter ${name} here`}
              w="100%"
            />
          </Input.Wrapper>
        )}
        rules={rules}
      />
    </Box>
  );
};

export default ControlledTextField;
