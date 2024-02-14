import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CardBackSideIcon = WithIconWrapper(
  ({
    title = 'card-back-side-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 47 32"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M46.545 28.578a2.908 2.908 0 0 1-2.909 2.909H2.909A2.908 2.908 0 0 1 0 28.578V2.91A2.908 2.908 0 0 1 2.909.001h40.727a2.908 2.908 0 0 1 2.909 2.909zM45.091 9.583H1.455v18.995c0 .746.562 1.361 1.285 1.445l.17.01h40.727c.746 0 1.361-.561 1.445-1.285l.01-.17V9.583zm-1.455-8.128H2.909c-.746 0-1.361.562-1.445 1.285l-.01.17v1.197H45.09V2.91c0-.746-.562-1.361-1.285-1.445l-.17-.01z"
      />
      <path fill="#f2f2f2" d="M5.989 19.166h37.818v5.476H5.989z" />
      <path
        fill="#ed6370"
        d="M34.438 16.428c4.418 0 8 2.452 8 5.476s-3.582 5.476-8 5.476-8-2.452-8-5.476 3.582-5.476 8-5.476m0 1.454c-3.706 0-6.545 1.943-6.545 4.021s2.839 4.021 6.545 4.021 6.545-1.943 6.545-4.021-2.839-4.021-6.545-4.021"
      />
    </svg>
  ),
);
export default CardBackSideIcon;
