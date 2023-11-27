import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SvgCircleThreeQuarterIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 17"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.638 8.5c0 4.01-3.226 7.25-7.194 7.25S1.25 12.51 1.25 8.5c0-4.008 3.226-7.249 7.194-7.249s7.194 3.24 7.194 7.25Z"
      />
      <path
        fill="currentColor"
        d="M16.5 8.5c0 4.42-3.557 8-7.945 8-2.222 0-4.373-.918-5.815-2.4l5.815-5.6V.502c4.388 0 7.944 3.582 7.944 8"
      />
    </svg>
  ),
);
export default SvgCircleThreeQuarterIcon;
