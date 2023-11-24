import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPersonalDetails = ({
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
      d="M12 15H7a4 4 0 0 0-4 4v1M12.1 20.95a.05.05 0 1 1 0 0v0M9.1 20.95a.05.05 0 1 1 0 0v0"
    />
    <circle
      cx={11}
      cy={7}
      r={4}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.959 20.95H15.5a.5.5 0 0 1-.5-.5v-1.458a1 1 0 0 1 .293-.707l3.041-3.042a1 1 0 0 1 1.415 0l.958.959a1 1 0 0 1 0 1.414l-3.041 3.041a1 1 0 0 1-.707.293"
      clipRule="evenodd"
    />
  </svg>
);
export default WithIconWrapper(SvgPersonalDetails);
