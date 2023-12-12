import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MgmShareIcon = WithIconWrapper(
  ({
    title = 'mgm-share-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 32 32"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M22 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6M10 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6M12.59 17.51l6.83 3.98M22 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6M19.41 10.51l-6.82 3.98" />
      </g>
    </svg>
  ),
);
export default MgmShareIcon;
