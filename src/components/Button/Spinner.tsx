import { Palette } from 'src/types';
import { Icon } from '../Icon/Icon';
import { Animation } from './Button.styles';

export interface SpinnerProps {
  customStyle?: object;
  size?: 'small' | 'medium' | 'large';
  color?: keyof Palette | 'currentColor';
}

export const Spinner = ({
  customStyle,
  size = 'medium',
  color = 'primary',
}: SpinnerProps) => {
  const setSize = () => {
    if (size === 'large') return 32;
    if (size === 'medium') return 26;
    return 22;
  };
  return (
    <Animation data-testid="spinner" style={customStyle} size={setSize()}>
      <Icon
        icon={'loader'}
        stroke={color}
        size={size === 'small' ? 'regular' : 'medium'}
      />
    </Animation>
  );
};
