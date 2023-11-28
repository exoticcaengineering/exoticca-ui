import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'icons/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const WinterIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v18M14.168 4.422 12 6.59 9.832 4.42M20 7.38 4 16.62M19.647 10.087l-2.961-.793.793-2.962M4.353 13.912l2.96.793-.792 2.962M4 7.38l16 9.24M4.353 10.087l2.96-.793-.792-2.962M19.647 13.912l-2.961.793.793 2.962M9.832 19.58 12 17.41l2.168 2.17"
      />
    </svg>
  ),
);
export default WinterIcon;
