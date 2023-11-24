import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownloadCloud = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 19"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g stroke="#121212">
      <path d="m6 13.191 3 3 3-3M9 9.441v6.75" />
      <path d="M15.66 14.009A3.75 3.75 0 0 0 13.5 7.19h-.945A6 6 0 1 0 2.25 12.66" />
    </g>
  </svg>
);
export default WithIconWrapper(SvgDownloadCloud);
