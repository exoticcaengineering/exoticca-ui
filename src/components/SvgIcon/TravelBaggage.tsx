import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTravelBaggage = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 102 117"
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
      strokeWidth={5}
      d="M72.25 102.375h-42.5c-4.696 0-8.5-4.363-8.5-9.75v-48.75c0-5.387 3.804-9.75 8.5-9.75h42.5c4.696 0 8.5 4.363 8.5 9.75v48.75c0 5.387-3.804 9.75-8.5 9.75Z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M42.5 48.75h17M34 102.375v4.875M68 102.375v4.875M68 34.125V19.5c0-5.387-3.804-9.75-8.5-9.75h-17c-4.696 0-8.5 4.363-8.5 9.75v14.625M51 63.375V87.75M34 63.375V87.75M68 63.375V87.75"
    />
  </svg>
);
export default SvgTravelBaggage;
