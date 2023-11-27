import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SvgClockIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 50 50"
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
        strokeWidth={2}
        d="M25 45.833c11.506 0 20.833-9.327 20.833-20.833 0-11.506-9.327-20.833-20.833-20.833C13.494 4.167 4.167 13.494 4.167 25c0 11.506 9.327 20.833 20.833 20.833"
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M25 12.5V25l8.333 4.167"
      />
    </svg>
  ),
);
export default SvgClockIcon;
