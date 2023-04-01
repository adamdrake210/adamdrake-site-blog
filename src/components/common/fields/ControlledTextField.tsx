import { Box, Input, Textarea } from '@mantine/core';
import { Control, Controller } from 'react-hook-form';

export type ControlledTextFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  rules?: any;
  disabled?: boolean;
  helperText?: string;
  placeholder?: string;
};

const ControlledTextField = ({
  name,
  control,
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
            <Textarea
              name={name}
              onChange={field.onChange}
              error={!!error}
              minRows={4}
              // type={type}
              value={field.value === null ? '' : field.value}
              // checked={field.value}
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
