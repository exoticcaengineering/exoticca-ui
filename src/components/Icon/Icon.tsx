import { FC, useEffect, useRef, useState } from 'react';
import { StyledWrapper } from './Icon.styles';
import { Props } from './Icon.types';

export const Icon: FC<Props> = ({ icon, testId, ...props }) => {
  const iconRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const defaultTestId = `${icon}-icon`;
  const isClickable = !!props.onClick;

  useEffect(() => {
    const importIcon = async () => {
      setIsLoading(true);
      const importedIcon = await import(`../../assets/svg/${icon}.svg`);
      iconRef.current = importedIcon.default;
      setIsLoading(false);
    };
    importIcon();
  }, []);

  if (isLoading || !iconRef.current)
    return (
      <StyledWrapper
        data-testid={testId || defaultTestId}
        isClickable={isClickable}
        {...props}
      >
        asdsa
      </StyledWrapper>
    );

  const Icon = iconRef.current;

  return (
    <StyledWrapper
      data-testid={testId || defaultTestId}
      isClickable={isClickable}
      {...props}
    >
      <Icon />
    </StyledWrapper>
  );
};
