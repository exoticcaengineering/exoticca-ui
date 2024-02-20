import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MapPinCheckIcon = WithIconWrapper(
  ({
    title = 'map-pin-check-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path
          d="M11.518 4.015a4.975 4.975 0 0 1 0 7.035L8.829 13.74c-.458.458-1.2.458-1.658 0L4.482 11.05a4.975 4.975 0 1 1 7.036-7.035z"
          clipRule="evenodd"
        />
        <path d="M9.64 6.822 7.69 8.77l-.948-.944" />
      </g>
    </svg>
  ),
);
export default MapPinCheckIcon;
