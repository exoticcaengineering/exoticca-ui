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
  background = 'header',
  backgroundShade = 'main',
}) => {
  return (
    <StyledHeaderWrapper
      background={background}
      backgroundShade={backgroundShade}
    >
      <StyledHeaderContent background={background}>
        {leftComponent ?? ''}
      </StyledHeaderContent>
      <StyledCenterContent background={background}>
        {centerComponent ?? ''}
      </StyledCenterContent>
      <StyledRightContent background={background}>
        {rightComponent ?? ''}
      </StyledRightContent>
    </StyledHeaderWrapper>
  );
};
