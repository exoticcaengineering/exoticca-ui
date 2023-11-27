import type { SVGProps } from 'react';
import { Props as IconWrapperProps } from '../IconWrapper';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

export type Props = SVGProps<SVGSVGElement> & SVGRProps;

export type IconProps = Omit<IconWrapperProps, 'children'>;
