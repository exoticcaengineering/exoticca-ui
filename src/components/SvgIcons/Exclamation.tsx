import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExclamation = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
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
      d="M7 1.75c2.9 0 5.25 2.35 5.25 5.25v0c0 2.9-2.35 5.25-5.25 5.25v0A5.25 5.25 0 0 1 1.75 7v0C1.75 4.1 4.1 1.75 7 1.75"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 7.292V4.375M7 9.333A.146.146 0 1 0 7 9.625.146.146 0 0 0 7 9.333"
    />
  </svg>
);
export default SvgExclamation;
