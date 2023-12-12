import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MgmAddIcon = WithIconWrapper(
  ({
    title = 'mgm-add-icon',
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
        <path d="M20 25v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M24 12v6M27 15h-6M12.5 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
      </g>
    </svg>
  ),
);
export default MgmAddIcon;
