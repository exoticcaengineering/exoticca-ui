import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeart = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
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
      strokeWidth={2}
      d="M17.367 3.842a4.584 4.584 0 0 0-6.484 0L10 4.725l-.883-.883a4.584 4.584 0 1 0-6.484 6.483l.884.883L10 17.692l6.483-6.484.884-.883a4.585 4.585 0 0 0 0-6.483v0"
    />
  </svg>
);
export default SvgHeart;
