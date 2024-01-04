import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const ExclamationIcon = WithIconWrapper(
  ({
    title = 'exclamation-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path
          d="M12 3a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9v0a9 9 0 0 1-9-9v0a9 9 0 0 1 9-9"
          clipRule="evenodd"
        />
        <path d="M12 12.5v-5M11.999 16a.25.25 0 1 0 .002.5A.25.25 0 0 0 12 16" />
      </g>
    </svg>
  ),
);
export default ExclamationIcon;
