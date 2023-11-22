import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBookings = ({
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.5 14-3.707-3.707A1 1 0 0 0 9.085 10H8.001a1 1 0 0 0-.888 1.46L8.426 14M22 11h-3.75c-.69 0-1.25-.56-1.25-1.25v-1c0-.69-.56-1.25-1.25-1.25h-1a1.25 1.25 0 0 1-1.25-1.25V2.015"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.76 7A8.496 8.496 0 0 1 22 10.5v.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.5 18-3.707 3.707a1 1 0 0 1-.707.293H7.002a1 1 0 0 1-.889-1.46L7.427 18H5.055a2 2 0 0 1-1.897-1.367l-1.106-3.317A1 1 0 0 1 3.001 12h.995a1 1 0 0 1 .894.553L5.614 14H16a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-3.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookings;
