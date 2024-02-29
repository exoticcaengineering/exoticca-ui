import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MultipleUsersIcon = WithIconWrapper(
  ({
    title = 'multiple-users-icon',
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
        d="M15.594 7.143a1.517 1.517 0 1 1-2.145 2.145 1.517 1.517 0 0 1 2.145-2.145M10.652 4.434a2.336 2.336 0 1 1-3.304 3.304 2.336 2.336 0 0 1 3.304-3.304M4.551 7.143a1.517 1.517 0 1 1-2.145 2.145A1.517 1.517 0 0 1 4.55 7.143M17.25 14.25v-.822c0-1.036-.84-1.875-1.875-1.875h-.6M.75 14.25v-.822c0-1.036.84-1.875 1.875-1.875h.6M13.004 14.25v-1.2a2.625 2.625 0 0 0-2.625-2.626H7.62a2.625 2.625 0 0 0-2.625 2.625v1.201"
      />
    </svg>
  ),
);
export default MultipleUsersIcon;
