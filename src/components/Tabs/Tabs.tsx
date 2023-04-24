import { FC } from 'react';
import { Props } from './Tabs.types';
import { StyledWrapper } from './Tabs.styles';

export const Tabs: FC<Props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
