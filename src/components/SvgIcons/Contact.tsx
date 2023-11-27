import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SvgContactIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        d="M2.334 6.418v-.583a4.667 4.667 0 1 1 9.333 0v.583M11.666 10.208a2.042 2.042 0 0 1-2.042 2.042H8.166M8.75 12.25h-.584M.75 8.165c0-.874.709-1.583 1.583-1.583h.39c.337 0 .61.274.61.611v1.945a.611.611 0 0 1-.61.61h-.39A1.583 1.583 0 0 1 .75 8.166ZM13.25 8.167c0 .874-.709 1.583-1.583 1.583h-.39a.611.611 0 0 1-.61-.611V7.194c0-.337.273-.61.61-.61h.39c.874 0 1.583.708 1.583 1.583Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M8.334 11.832v.833"
      />
    </svg>
  ),
);
export default SvgContactIcon;
