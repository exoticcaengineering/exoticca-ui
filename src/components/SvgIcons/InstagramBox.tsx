import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const InstagramBoxIcon = WithIconWrapper(
  ({
    title = 'instagram-box-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 41 40"
      width="1em"
      height="1em"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.993 5.75a6.742 6.742 0 0 0-6.743 6.743v15.014a6.742 6.742 0 0 0 6.743 6.743h15.014a6.742 6.742 0 0 0 6.743-6.742V12.493a6.742 6.742 0 0 0-6.742-6.743zm0-1.5h15.015c4.551 0 8.242 3.69 8.242 8.243v15.015c0 4.551-3.69 8.242-8.243 8.242H12.993a8.242 8.242 0 0 1-8.243-8.243V12.493a8.242 8.242 0 0 1 8.243-8.243zm15.75 6.189a1.313 1.313 0 1 0 1.319 1.317v-.004h-.75l.75.004a1.312 1.312 0 0 0-1.312-1.317h-.006zm-11.955 5.849a5.25 5.25 0 1 1 7.424 7.424 5.25 5.25 0 0 1-7.424-7.424m-1.061-1.061a6.75 6.75 0 1 1 9.546 9.546 6.75 6.75 0 0 1-9.546-9.546"
        clipRule="evenodd"
        style={{
          stroke: 'none',
        }}
      />
    </svg>
  ),
);
export default InstagramBoxIcon;
