import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSafari = ({
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
    <circle
      cx={12}
      cy={12}
      r={9.004}
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <circle
      cx={12}
      cy={12}
      r={9.004}
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.01 10.01 3.979 3.978"
    />
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.24 13.583 1.748-5.243a.26.26 0 0 0-.328-.329L10.417 9.76c-.31.103-.554.347-.657.657l-1.748 5.243a.26.26 0 0 0 .329.328l5.243-1.748c.31-.103.553-.346.656-.656v0Z"
      clipRule="evenodd"
    />
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.003 11.998h2M4.997 11.998h-2M16.952 16.951l1.415 1.415M7.049 7.048 5.634 5.633M12 19.002v2M12 4.997v-2"
    />
  </svg>
);
export default SvgSafari;
