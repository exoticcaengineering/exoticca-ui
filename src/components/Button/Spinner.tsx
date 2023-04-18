import { Colors } from 'src/types';
import { Icon } from '../Icon/Icon';
import { Animation } from './Button.styles';

export interface SpinnerProps {
  customStyle?: object;
  size?: 'small' | 'medium' | 'large';
  color?: keyof Colors;
}

export const Spinner = ({
  customStyle,
  size = 'medium',
  color,
}: SpinnerProps) => {
  const setSize = () => {
    if (size === 'large') return 32;
    return 26;
  };
  return (
    <Animation data-testid="spinner" style={customStyle} size={setSize()}>
      <Icon icon={'loader'} stroke={color} />
    </Animation>
  );
};
