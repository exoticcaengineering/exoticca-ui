import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebookBox = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M13 5.75a6.75 6.75 0 0 0-6.75 6.75v15.007a6.743 6.743 0 0 0 6.743 6.743h8.257v-12H19a.75.75 0 0 1 0-1.5h2.25v-2.325a5.176 5.176 0 0 1 5.175-5.175H28a.75.75 0 0 1 0 1.5h-1.575a3.676 3.676 0 0 0-3.675 3.675v2.325H28a.75.75 0 0 1 0 1.5h-5.25v12h5.257a6.743 6.743 0 0 0 6.743-6.742V12.493a6.743 6.743 0 0 0-6.743-6.743zm9 30h6.007a8.243 8.243 0 0 0 8.243-8.242V12.493a8.243 8.243 0 0 0-8.243-8.243H13a8.25 8.25 0 0 0-8.25 8.25v15.007a8.243 8.243 0 0 0 8.243 8.243z"
      clipRule="evenodd"
      style={{
        stroke: 'none',
      }}
    />
  </svg>
);
export default SvgFacebookBox;
