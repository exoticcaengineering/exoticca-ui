import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SuccessIcon = WithIconWrapper(
  ({
    title = 'success-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor">
        <path d="M15.987 0C7.157 0 0 7.158 0 15.987s7.158 15.988 15.987 15.988c8.83 0 15.988-7.158 15.988-15.988C31.965 7.162 24.813.01 15.987 0zm0 30.376c-7.947 0-14.389-6.442-14.389-14.389S8.04 1.598 15.987 1.598 30.376 8.04 30.376 15.987c-.009 7.943-6.446 14.38-14.389 14.389z" />
        <path d="m20.959 11.491-5.837 7.296-3.365-3.364a.8.8 0 0 0-1.131 1.131l3.997 3.997c.15.15.353.234.565.234.015 0 .03 0 .044-.002a.798.798 0 0 0 .58-.298l6.395-7.994a.8.8 0 1 0-1.249-.999z" />
      </g>
    </svg>
  ),
);
export default SuccessIcon;
