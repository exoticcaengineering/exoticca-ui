import { FC, useEffect, useState } from 'react';
import { Input } from '../Input';
import { Props } from './PasswordInput.types';
import { EyeClosedIcon } from 'src/components/SvgIcons/EyeClosed';
import { EyeOpenIcon } from 'src/components/SvgIcons/EyeOpen';

export const PasswordInput: FC<Props> = ({
  defaultShowPassword,
  testId = 'password-input',
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

  const renderIcon = () => {
    if (showPassword)
      return <EyeClosedIcon onClick={handleToggleShowPassword} />;
    <EyeOpenIcon onClick={handleToggleShowPassword} />;
  };

  return (
    <Input
      {...inputProps}
      testId={testId}
      type={inputType}
      endIcon={renderIcon()}
    />
  );
};
