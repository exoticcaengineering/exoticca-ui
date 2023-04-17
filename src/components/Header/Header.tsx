import { FC } from 'react';
import { Props } from './Header.types';
import {
  StyledCenterContent,
  StyledHeaderContent,
  StyledHeaderWrapper,
  StyledRightContent,
} from './Header.styles';

export const Header: FC<Props> = ({
  leftComponent,
  centerComponent,
  rightComponent,
  backgroundType = 'solid',
}) => {
  return (
    <StyledHeaderWrapper backgroundType={backgroundType}>
      <StyledHeaderContent>{leftComponent?.() ?? ''}</StyledHeaderContent>
      <StyledCenterContent>{centerComponent?.()}</StyledCenterContent>
      <StyledRightContent>{rightComponent?.()}</StyledRightContent>
    </StyledHeaderWrapper>
  );
};
