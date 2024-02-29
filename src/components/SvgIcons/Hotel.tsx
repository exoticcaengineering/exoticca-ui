import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const HotelIcon = WithIconWrapper(
  ({
    title = 'hotel-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 18 18"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 5.25h6A.75.75 0 0 1 15 6v9.75H7.5V6a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.125 12.75h2.25v3h-2.25zM10.125 7.875v2.25M12.375 7.875v2.25M10.125 9h2.25"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 5.25V3a.75.75 0 0 0-.75-.75h-6A.75.75 0 0 0 3 3v12.75h7.5M16.5 15.75h-15M3 6.75h1.5M3 9h1.5M3 11.25h1.5"
      />
    </svg>
  ),
);
export default HotelIcon;
