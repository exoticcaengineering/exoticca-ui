import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const WalletAddIcon = WithIconWrapper(
  ({
    title = 'wallet-add-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 40"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        d="M7.167 19.843v-6.358A5.002 5.002 0 0 1 10.4 8.807L24.322 3.55c2.181-.822 4.511.788 4.511 3.12v5.583M29.248 23.502a.418.418 0 0 0-.415.418.417.417 0 1 0 .415-.418"
      />
      <path
        stroke="currentColor"
        d="M18.27 35H30.5c2.75 0 5-2.25 5-5V17.252a5 5 0 0 0-5-5h-20a3.332 3.332 0 0 0-3.333 3.333v4.843"
      />
      <path
        stroke="currentColor"
        d="M13 36.667a9.168 9.168 0 0 1 0-18.334 9.167 9.167 0 0 1 0 18.334M13 23.845v7.312M16.655 27.5h-7.31"
      />
    </svg>
  ),
);
export default WalletAddIcon;
