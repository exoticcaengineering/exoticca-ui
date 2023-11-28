import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'icons/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const NatureIcon = WithIconWrapper(
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
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15v2"
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.648 7.143-2.69 2.66A.7.7 0 0 0 9.452 11h5.097a.7.7 0 0 0 .492-1.198l-2.689-2.659a.503.503 0 0 0-.703 0v0"
        clipRule="evenodd"
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.5 11 2.34 2.856A.7.7 0 0 1 15.298 15H8.701a.7.7 0 0 1-.541-1.144L10.5 11"
      />
      <rect
        width={18}
        height={18}
        x={21}
        y={21}
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={5}
        transform="rotate(-180 21 21)"
      />
    </svg>
  ),
);
export default NatureIcon;
