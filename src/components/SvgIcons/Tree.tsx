import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TreeIcon = WithIconWrapper(
  ({
    title = 'tree-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#323232"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.293 4.293 8.295 7.29a1 1 0 0 0 .707 1.707h5.996a1 1 0 0 0 .707-1.707l-2.998-2.998a1 1 0 0 0-1.414 0"
        clipRule="evenodd"
      />
      <path
        stroke="#323232"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.655 8.933-2.36 2.36A1 1 0 0 0 7.002 13h9.996a1 1 0 0 0 .707-1.707l-2.36-2.36M13.5 18v3M10.5 21v-3M15 21H9M7.588 13l-3.293 3.293A1 1 0 0 0 5.002 18h13.996a1 1 0 0 0 .707-1.707L16.412 13"
      />
    </svg>
  ),
);
export default TreeIcon;
