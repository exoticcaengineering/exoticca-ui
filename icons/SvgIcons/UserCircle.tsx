import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from '../WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const UserCircleIcon = WithIconWrapper(
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
      <circle
        cx={25}
        cy={25}
        r={18.758}
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M33.337 33.337a4.387 4.387 0 0 0-1.1-1.603v0a4.393 4.393 0 0 0-2.989-1.175h-8.493a4.4 4.4 0 0 0-2.991 1.175v0c-.48.446-.857.994-1.1 1.603"
      />
      <circle
        cx={25}
        cy={21.354}
        r={4.689}
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  ),
);
export default UserCircleIcon;
