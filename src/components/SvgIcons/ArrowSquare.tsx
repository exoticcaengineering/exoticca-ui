import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const ArrowSquareIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 24"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={24} height={24} x={0.5} fill="currentColor" rx={8} />
      <path
        stroke="#fff"
        d="M7.833 12h9.333M12.5 7.333 17.167 12 12.5 16.667"
      />
    </svg>
  ),
);
export default ArrowSquareIcon;
