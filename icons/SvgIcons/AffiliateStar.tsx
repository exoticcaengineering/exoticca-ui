import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'icons/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AffiliateStarIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 50 50"
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
        strokeWidth={2}
        d="m9.153 30.149-1.98.643M25 43.75v-2.083M13.99 9.846l1.223 1.684M42.828 30.793l-1.981-.644M36.01 9.846l-1.224 1.684"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M23.132 16.845a2.083 2.083 0 0 1 3.736 0l1.06 2.149c.304.615.89 1.041 1.57 1.14l2.37.345a2.083 2.083 0 0 1 1.155 3.553l-1.716 1.674a2.083 2.083 0 0 0-.599 1.843l.405 2.361a2.084 2.084 0 0 1-3.023 2.196l-2.12-1.114a2.083 2.083 0 0 0-1.94 0l-2.12 1.114a2.083 2.083 0 0 1-3.023-2.196l.405-2.36a2.084 2.084 0 0 0-.598-1.844l-1.717-1.674a2.084 2.084 0 0 1 1.155-3.553l2.371-.345a2.083 2.083 0 0 0 1.569-1.14l1.06-2.149"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default AffiliateStarIcon;
