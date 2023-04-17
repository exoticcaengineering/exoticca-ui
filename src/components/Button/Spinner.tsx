import { Icon } from '../Icon/Icon';
import { Animation } from './Button.styles';

export interface SpinnerProps {
  customStyle?: object;
  size?: 'small' | 'medium' | 'large';
  color?: string;
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
      <Icon icon={'loader'} stroke={color === '#ffffff' ? 'white' : 'black'} />
    </Animation>
  );
};
