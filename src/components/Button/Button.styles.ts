import styled, { keyframes } from 'styled-components';
import { StyledProps } from './Button.types';
import { Theme } from 'src/types';

const setColor = (theme: Theme) => ({
  promoYellow: theme.colors.silentSavana,
  promoOrange: theme.colors.carribeanSunrise,
  promoBlue: theme.colors.pacificOcean,
  promoGreen: theme.colors.savageForest,
  black: theme.colors.polarNight,
  white: theme.colors.arcticWind,
});

const setSize = (theme: Theme) => ({
  small: theme.spacing(1.375),
  medium: theme.spacing(2, 2.25),
  large: theme.spacing(2.313, 2.75),
});

const setFontsize = (theme: Theme) => ({
  small: theme.typography.fontSize.body2,
  medium: theme.typography.fontSize.default,
  large: theme.typography.fontSize.button1,
});

export const setContainColor = (theme: Theme, color: string) => {
  if (color === 'black') return theme.colors.arcticWind;
  return theme.colors.polarNight;
};

export const setTertiaryColor = (theme: Theme, color: string) => {
  if (color === 'white') return theme.colors.arcticWind;
  return theme.colors.polarNight;
};

const colorWithOpacity = (hexadecimal: string, percentage: number): string => {
  const opacity = percentage / 100;
  const r = parseInt(hexadecimal.substring(1, 3), 16);
  const g = parseInt(hexadecimal.substring(3, 5), 16);
  const b = parseInt(hexadecimal.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const StyledButton = styled.button<StyledProps>`
  background-color: ${({ theme, color, variant }) =>
    variant === 'tertiary' ? 'transparent' : setColor(theme)[color]};
  color: ${({ theme, color, variant }) =>
    variant === 'tertiary'
      ? setTertiaryColor(theme, color)
      : setContainColor(theme, color)};
  border-radius: ${({ shape, theme }) =>
    shape === 'rounded'
      ? theme.newBorderRadius.semiRounded
      : theme.newBorderRadius.m};
  padding: ${({ theme, size }) => setSize(theme)[size]};
  font-size: ${({ theme, size }) => setFontsize(theme)[size]};
  border: ${({ theme, color, variant }) =>
    variant === 'secondary'
      ? `0.15rem solid ${setContainColor(theme, color)}`
      : 'none'};

  &:hover {
    background-color: ${({ theme, color }) =>
      colorWithOpacity(setColor(theme)[color], 80)};
  }

  &:disabled {
    background-color: ${({ theme, color }) =>
      colorWithOpacity(setColor(theme)[color], 20)};
    color: ${({ theme }) => theme.colors.polarNightMedium};
    border: 0.15rem solid ${({ theme }) => theme.colors.polarNightMedium};
    cursor: not-allowed;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Animation = styled.div<{ size: number }>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  transform-origin: center;
`;
