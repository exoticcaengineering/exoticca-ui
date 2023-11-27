import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SvgBeachIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        d="M20 21H4"
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.906 3.666v0a8.359 8.359 0 0 1 4.774 9.982l-.075.265a1.995 1.995 0 0 1-2.7 1.291L5.217 10.242a1.995 1.995 0 0 1-.946-2.839l.138-.239a8.36 8.36 0 0 1 10.497-3.498"
        clipRule="evenodd"
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.905 3.666.26 1.047c.768 3.115.093 6.41-1.84 8.971v0M14.905 3.666l-.933.541a10.654 10.654 0 0 0-5.176 7.555v0M11.06 12.72 7.55 21"
      />
    </svg>
  ),
);
export default SvgBeachIcon;
