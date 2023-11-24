import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaymentSuccess = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 50"
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
      strokeWidth={2}
      d="M18.765 30.208h12.5M21.875 21.458l2.5 2.5 4.167-4.167"
    />
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m40.519 42.492-2.063 1.036a2.083 2.083 0 0 1-1.859.006l-3.276-1.62-3.21 1.613a2.083 2.083 0 0 1-1.863.003L25 41.913l-3.247 1.617a2.083 2.083 0 0 1-1.864-.003l-3.21-1.613-3.276 1.62a2.083 2.083 0 0 1-1.859-.006l-2.063-1.036a2.083 2.083 0 0 1-1.147-1.862V9.37c0-.788.444-1.508 1.147-1.862l2.063-1.036a2.083 2.083 0 0 1 1.859-.006l3.276 1.62 3.21-1.613a2.083 2.083 0 0 1 1.864-.003L25 8.086l3.248-1.616a2.083 2.083 0 0 1 1.863.003l3.21 1.613 3.276-1.62a2.083 2.083 0 0 1 1.86.006l2.062 1.036a2.083 2.083 0 0 1 1.148 1.862v31.26c0 .788-.444 1.508-1.148 1.862"
      clipRule="evenodd"
    />
  </svg>
);
export default WithIconWrapper(SvgPaymentSuccess);
