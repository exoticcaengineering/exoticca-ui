import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MoneyIcon = WithIconWrapper(
  ({
    title = 'money-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 40 40"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        d="M6.667 13.333h26.666a3.332 3.332 0 0 1 3.334 3.334v16.666a3.332 3.332 0 0 1-3.334 3.334H6.667a3.332 3.332 0 0 1-3.334-3.334V16.667a3.332 3.332 0 0 1 3.334-3.334Z"
      />
      <path
        stroke="currentColor"
        d="M22.946 22.054a4.167 4.167 0 1 1-5.892 5.892 4.167 4.167 0 0 1 5.892-5.892M30 29.167v-8.334M10 29.167v-8.334M33.333 8.333H6.667M31.667 3.333H8.333"
      />
    </svg>
  ),
);
export default MoneyIcon;
