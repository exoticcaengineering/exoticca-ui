import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SvgPencilIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 25"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.522 20.644H3.997v-4.525c0-.464.184-.909.512-1.237L15.242 4.15a1.748 1.748 0 0 1 2.474 0l2.775 2.775a1.748 1.748 0 0 1 0 2.474L9.758 20.132a1.752 1.752 0 0 1-1.236.512"
        clipRule="evenodd"
      />
      <path
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.001 6.639 5.002 5.002M8.999 15.642 12 12.64"
      />
    </svg>
  ),
);
export default SvgPencilIcon;
