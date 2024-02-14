import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const WalkingGuyIcon = WithIconWrapper(
  ({
    title = 'walking-guy-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 13 13"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M7.717 3.25c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-1.85 1.7L4.467 12h1.05l.9-4 1.05 1v3h1V8.25l-1.05-1 .3-1.5c.65.75 1.65 1.25 2.75 1.25V6c-.95 0-1.75-.5-2.15-1.2l-.5-.8a1.073 1.073 0 0 0-1.325-.42L3.967 4.65V7h1V5.3z"
      />
    </svg>
  ),
);
export default WalkingGuyIcon;
