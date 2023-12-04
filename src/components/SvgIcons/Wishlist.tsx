import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const WishlistIcon = WithIconWrapper(
  ({
    title = 'wishlist-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.002 3A8.999 8.999 0 0 1 21 11.998v.004A8.998 8.998 0 0 1 12.002 21h-.004A8.998 8.998 0 0 1 3 12.002v0A9.002 9.002 0 0 1 12.002 3"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.774 9.907.226.23.226-.23a2.187 2.187 0 0 1 3.126 0v0a2.27 2.27 0 0 1 0 3.175l-2.115 2.148a1.731 1.731 0 0 1-2.475 0l-2.114-2.148a2.27 2.27 0 0 1 0-3.175v0a2.187 2.187 0 0 1 3.126 0"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default WishlistIcon;
