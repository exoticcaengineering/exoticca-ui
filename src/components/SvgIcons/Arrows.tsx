import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const ArrowsIcon = WithIconWrapper(
  ({
    title = 'arrows-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 17 32"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M1.255 9.244a.94.94 0 0 1 .941-.941h10.667a.94.94 0 1 1 0 1.882H2.196a.94.94 0 0 1-.941-.941" />
      <path d="M9.687 4.186a.94.94 0 0 1 1.331 0l4.392 4.392a.94.94 0 0 1 0 1.331l-4.392 4.392a.94.94 0 1 1-1.331-1.331l3.727-3.727-3.727-3.727a.94.94 0 0 1 0-1.331zM15.687 24.303a.94.94 0 0 0-.941-.941H4.079a.94.94 0 1 0 0 1.882h10.667a.94.94 0 0 0 .941-.941" />
      <path d="M7.254 19.245a.94.94 0 0 0-1.331 0l-4.392 4.392a.94.94 0 0 0 0 1.331l4.392 4.392a.942.942 0 0 0 1.331-1.331l-3.727-3.727 3.727-3.727a.94.94 0 0 0 0-1.331z" />
    </svg>
  ),
);
export default ArrowsIcon;
