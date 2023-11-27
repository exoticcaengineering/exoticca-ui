import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SvgCheckCircleIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <circle
        cx={20}
        cy={20}
        r={15.006}
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m14.07 20.565 3.614 3.613-.023-.023 8.151-8.152"
      />
    </svg>
  ),
);
export default SvgCheckCircleIcon;
