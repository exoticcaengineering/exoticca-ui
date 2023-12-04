import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SyringeIcon = WithIconWrapper(
  ({
    title = 'syringe-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 25"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.33 8.88 4.16-4.16M20.01 7.24l-4.15 4.16M10.95 6.501l7.3 7.29M6.65 18.09 3 21.74M7.38 12.99l1.46 1.46M9.57 10.8l1.46 1.46M16.45 3.68 21 8.23M16.845 12.39l-6.537 6.536a2 2 0 0 1-2.828 0l-1.607-1.605a2 2 0 0 1 0-2.828l6.537-6.537"
      />
    </svg>
  ),
);
export default SyringeIcon;
