import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LoaderIcon = WithIconWrapper(
  ({
    title = 'loader-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 24"
      width="1em"
      height="1em"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 2v4M12.5 18v4M5.43 4.93l2.83 2.83M16.74 16.24l2.83 2.83M2.5 12h4M18.5 12h4M5.43 19.07l2.83-2.83M16.74 7.76l2.83-2.83"
      />
    </svg>
  ),
);
export default LoaderIcon;
