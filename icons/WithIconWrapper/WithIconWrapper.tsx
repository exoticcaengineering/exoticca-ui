import { IconProps, Props } from 'icons//WithIconWrapper/WithIconWrapper.types';
import { IconWrapper } from 'icons/IconWrapper';

export const WithIconWrapper = (Component: (props: Props) => JSX.Element) => {
  return (props: IconProps) => (
    <IconWrapper {...props}>
      <Component />
    </IconWrapper>
  );
};
