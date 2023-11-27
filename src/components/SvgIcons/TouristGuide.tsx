import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TouristGuideIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#323232"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 7.875V6a3.75 3.75 0 0 0-3.75-3.75h-6A3.75 3.75 0 0 0 1.5 6v6a3.75 3.75 0 0 0 3.75 3.75H7.5"
      />
      <circle
        cx={8.25}
        cy={7.125}
        r={1.875}
        stroke="#323232"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="#323232"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 10.875H6.592c-.745 0-1.42.442-1.717 1.125M11.25 10.125h5.25l-.75 1.688.75 1.687h-5.25M12 16.5h-1.5M11.25 16.5v-6.375"
      />
    </svg>
  ),
);
export default TouristGuideIcon;
