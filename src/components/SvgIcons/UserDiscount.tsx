import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const UserDiscountIcon = WithIconWrapper(
  ({
    title = 'user-discount-icon',
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
        d="M20.782 5.038a5.82 5.82 0 1 1-8.23 8.23 5.82 5.82 0 0 1 8.23-8.23M23.938 21.327c-2.165-.865-4.705-1.342-7.271-1.342-6.747 0-13.334 3.278-13.334 8.32v1.667c0 .92.747 1.666 1.667 1.666h15.688"
      />
      <path
        stroke="currentColor"
        d="M28.333 36.667A8.333 8.333 0 0 1 20 28.333c0-4.506 3.833-8.338 8.34-8.333a8.333 8.333 0 0 1 8.327 8.333 8.333 8.333 0 0 1-8.334 8.334M25.417 31.25l5.833-5.833"
      />
      <path
        stroke="currentColor"
        d="M31.514 31.046a.333.333 0 1 1-.471.471.333.333 0 0 1 .471-.471M25.626 25.15a.333.333 0 1 1-.472.47.333.333 0 0 1 .472-.47"
      />
    </svg>
  ),
);
export default UserDiscountIcon;
