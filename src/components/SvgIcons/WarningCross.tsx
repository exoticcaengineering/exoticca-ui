import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const WarningCrossIcon = WithIconWrapper(
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
      <path
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M34.621 23.335a15.006 15.006 0 1 1-5.199-15.006M35.007 13.334l-5.003 4.995M30.007 13.33l4.996 5.003M20 19.448v-5.45"
      />
      <path
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 25.466a.267.267 0 0 0-.267.27c.003.146.12.264.267.267a.27.27 0 0 0 0-.54"
      />
    </svg>
  ),
);
export default WarningCrossIcon;
