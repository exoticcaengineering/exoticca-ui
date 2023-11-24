import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAdventure = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M22 21 15.383 8.531a1 1 0 0 0-1.766 0L7 21M18.08 13.613l-1.79 1M14.5 13.613l1.79 1M12.71 14.613l1.79-1M10.92 13.613l1.79 1M23 21H1"
    />
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.435 4.519A1.745 1.745 0 0 1 8.25 8H4.5a1.5 1.5 0 1 1 0-3 1.997 1.997 0 0 1 3.935-.481"
      clipRule="evenodd"
    />
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.96 15.423 8.378 12.52a1 1 0 0 0-1.756 0L2 21.001"
    />
  </svg>
);
export default WithIconWrapper(SvgAdventure);
