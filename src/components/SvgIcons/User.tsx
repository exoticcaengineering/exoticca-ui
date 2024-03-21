import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const UserIcon = WithIconWrapper(
  ({
    title = 'user-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 19 18"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 15v-.562a3.188 3.188 0 0 0-3.187-3.188H6.687A3.188 3.188 0 0 0 3.5 14.438V15"
      />
      <circle
        cx={9.5}
        cy={5.25}
        r={3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);
export default UserIcon;
