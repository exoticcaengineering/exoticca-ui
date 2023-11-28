import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from '../WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TravelNoBaggageIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 117 117"
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
        strokeWidth={5}
        d="M34.125 102.375h48.75a9.747 9.747 0 0 0 9.75-9.75V46.313M78 34.125H34.125a9.747 9.747 0 0 0-9.75 9.75v39M48.75 48.75h19.5M39 102.375v4.875M78 102.375v4.875"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        d="M78 34.125V19.5a9.747 9.747 0 0 0-9.75-9.75h-19.5A9.747 9.747 0 0 0 39 19.5v14.625M58.5 63.375V87.75M39 63.375V87.75M78 63.375V87.75"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={5}
        d="m17.063 102.375 82.731-75.837"
      />
    </svg>
  ),
);
export default TravelNoBaggageIcon;
