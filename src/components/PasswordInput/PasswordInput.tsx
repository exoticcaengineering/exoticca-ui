import { FC, useEffect, useState } from 'react';
import { Input } from '../Input';
import { Props } from './PasswordInput.types';

export const PasswordInput: FC<Props> = ({
  defaultShowPassword,
  ...inputProps
}) => {
  const [showPassword, setShowPassword] = useState(defaultShowPassword);

  useEffect(() => {
    setShowPassword(defaultShowPassword);
  }, [defaultShowPassword]);

  const handleToggleShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const inputType = showPassword ? 'text' : 'password';

  const icon = showPassword ? 'eye-closed' : 'eye-open';

  return (
    <Input
      {...inputProps}
      type={inputType}
      endIcon={{ icon: icon, onClick: handleToggleShowPassword }}
    />
  );
};
