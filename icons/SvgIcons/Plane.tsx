import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'icons/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const PlaneIcon = WithIconWrapper(
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.011 14.687-2.666.667v-1.2c0-.067.066-.2.133-.267l1.2-1.066v-3.2l-4.867 2.133c-.2.133-.466 0-.466-.267v-1.133c0-.2.133-.4.266-.533l5.067-3.334V3.354c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333v3.133l5.066 3.334c.2.133.267.333.267.533v1.133c0 .267-.267.4-.467.334L9.345 9.687v3.2l1.2 1.067c.066.067.133.133.133.267v1.133l-2.667-.667"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default PlaneIcon;
