import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from '../WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const ShieldIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1075 1024"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="#currentColor"
        d="M890.209 177.859c-10.865-8.686-26.061-13.015-39.071-8.686-99.876 21.701-204.083 0-286.587-58.624-15.191-10.865-36.895-10.865-52.116 0-82.504 58.624-186.708 80.325-286.584 58.624-13.015-4.328-28.237 0-39.073 8.686s-17.372 21.701-17.372 36.894v343.03c0 134.589 65.131 260.526 173.693 338.673l167.157 119.393c15.194 10.87 36.892 10.87 54.264 0l167.158-119.393c108.564-78.147 173.696-204.083 173.696-338.673v-343.03c2.176-15.194-4.332-28.237-15.196-36.894zm-75.996 379.955c0 104.202-49.94 201.897-134.589 262.702l-141.128 99.876-141.13-99.876c-84.683-60.805-134.591-158.5-134.591-262.702V266.9c95.518 8.686 193.215-15.194 275.721-62.952C621 253.886 718.694 275.587 814.213 266.9z"
      />
    </svg>
  ),
);
export default ShieldIcon;
