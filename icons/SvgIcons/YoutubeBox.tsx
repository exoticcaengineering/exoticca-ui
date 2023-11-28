import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from '../WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const YoutubeBoxIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 41 40"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 12.5A6.75 6.75 0 0 1 13 5.75h15.007a6.743 6.743 0 0 1 6.743 6.743v15.015a6.743 6.743 0 0 1-6.743 6.742H12.993a6.743 6.743 0 0 1-6.743-6.743zm21.757-8.25H13a8.25 8.25 0 0 0-8.25 8.25v15.007a8.243 8.243 0 0 0 8.243 8.243h15.014a8.243 8.243 0 0 0 8.243-8.242V12.493a8.243 8.243 0 0 0-8.243-8.243zm-10.462 10.1a.75.75 0 0 0-1.125.65v10a.75.75 0 0 0 1.125.65l8.66-5a.75.75 0 0 0 0-1.3zM24.33 20l-6.41 3.7v-7.4z"
        clipRule="evenodd"
        style={{
          stroke: 'none',
        }}
      />
    </svg>
  ),
);
export default YoutubeBoxIcon;
