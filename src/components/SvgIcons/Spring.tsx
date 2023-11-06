import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpring = ({
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
      d="M17 11.827V13a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5V11.24M12 18v3"
    />
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 6v0a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9.5A4.5 4.5 0 0 1 5 7.5v0A4.5 4.5 0 0 1 9.5 3H13a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H10.078a1.5 1.5 0 0 1-1.5-1.5v0a1.5 1.5 0 0 1 1.5-1.5h2.03"
    />
  </svg>
);
export default SvgSpring;
