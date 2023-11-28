import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from '../WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const PlayVideoIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={40} height={40} fill="#fff" rx={20} />
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.514 14.144 8.098 4.86a1 1 0 0 1 0 1.714l-8.098 4.86A1 1 0 0 1 16 24.718v-9.718a1 1 0 0 1 1.514-.857"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default PlayVideoIcon;
