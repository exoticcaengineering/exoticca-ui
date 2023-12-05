import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagFrIcon = WithIconWrapper(
  ({
    title = 'flag-fr-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill="#fff" d="M9.143 4.571h13.714v22.857H9.143V4.571z" />
      <path
        fill="#f44653"
        d="M21.333 4.571v22.857h6.095a4.571 4.571 0 0 0 4.571-4.526V9.096a4.571 4.571 0 0 0-4.571-4.526h-6.095z"
      />
      <path
        fill="#1035bb"
        d="M10.667 27.429V4.572H4.572A4.571 4.571 0 0 0 .001 9.143v13.714a4.571 4.571 0 0 0 4.571 4.571h6.095z"
      />
    </svg>
  ),
);
export default FlagFrIcon;
