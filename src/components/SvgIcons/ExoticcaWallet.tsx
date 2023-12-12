import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const ExoticcaWalletIcon = WithIconWrapper(
  ({
    title = 'exoticca-wallet-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.503 6.951-2.366-3.154a2 2 0 0 0-2.71-.464L7.929 6.998"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.503 11.5h2.501a1 1 0 0 1 1 1v3.002a1 1 0 0 1-1 1h-2.501a2.501 2.501 0 0 1-2.501-2.501v0a2.501 2.501 0 0 1 2.501-2.501"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.004 11.5v-2a2.501 2.501 0 0 0-2.501-2.502H5.497a2.501 2.501 0 0 0-2.5 2.501v9.004a2.501 2.501 0 0 0 2.5 2.5h13.006a2.501 2.501 0 0 0 2.5-2.5v-2.001"
      />
    </svg>
  ),
);
export default ExoticcaWalletIcon;
