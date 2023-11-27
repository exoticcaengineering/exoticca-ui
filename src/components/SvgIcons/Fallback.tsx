import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FallbackIcon = WithIconWrapper(
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
        d="M13.574 3.145A9.167 9.167 0 0 0 12 3c-.538 0-1.062.056-1.574.145M20.518 8.973c.353.969.555 2.01.555 3.1M18.948 6.243a9.108 9.108 0 0 0-2.415-2.021M7.467 4.222a9.124 9.124 0 0 0-2.415 2.02M2.927 12.073c0-1.091.202-2.132.555-3.1M7.467 19.924c.9.52 1.897.89 2.959 1.076M3.482 15.173a9.072 9.072 0 0 0 1.57 2.73M13.574 21a9.003 9.003 0 0 0 2.959-1.076M18.948 17.903a9.072 9.072 0 0 0 1.57-2.73"
      />
    </svg>
  ),
);
export default FallbackIcon;
