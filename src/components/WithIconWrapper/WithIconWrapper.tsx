import {
  IconProps,
  Props,
} from 'src/components/WithIconWrapper/WithIconWrapper.types';
import { IconWrapper } from '../IconWrapper';

export const WithIconWrapper = (Component: (props: Props) => JSX.Element) => {
  return (props: IconProps) => (
    <IconWrapper {...props}>
      <Component />
    </IconWrapper>
  );
};
