import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SvgArrowCircleLoginIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
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
        d="M11 8.999 14 12l-3 3.002"
      />
      <path
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.01 12H4.183a1.354 1.354 0 0 1-1.353-1.354v0c0-1.882.746-3.687 2.074-5.02v0a9.525 9.525 0 0 1 6.75-2.796A9.187 9.187 0 1 1 3.45 16.077"
      />
    </svg>
  ),
);
export default SvgArrowCircleLoginIcon;
