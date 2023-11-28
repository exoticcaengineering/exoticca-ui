import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from '../WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AlertTriangleIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 32"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M13.982 2.134C14.77.809 16.179 0 17.698 0s2.928.809 3.72 2.14l13.397 22.814c.772 1.364.777 3.044.012 4.413s-2.184 2.221-3.741 2.238H4.298c-1.544-.017-2.964-.869-3.728-2.238s-.76-3.049.022-4.429L13.983 2.135zm5.405 1.255c-.358-.602-.999-.97-1.689-.97s-1.331.368-1.686.964L2.634 26.164c-.351.62-.353 1.384-.006 2.006s.993 1.009 1.682 1.017h26.762c.702-.008 1.347-.395 1.695-1.017s.346-1.386.004-1.989L19.387 3.389z" />
      <path d="M17.698 8.85c.661 0 1.204.485 1.26 1.103l.005.104v6.436c0 .666-.566 1.207-1.264 1.207-.661 0-1.204-.485-1.26-1.103l-.005-.104v-6.436c0-.666.566-1.207 1.264-1.207zM17.706 21.492a1.26 1.26 0 0 1 1.256 1.264c0 .662-.505 1.204-1.147 1.26l-.125.005a1.26 1.26 0 0 1-1.256-1.264c0-.661.505-1.204 1.147-1.26z" />
    </svg>
  ),
);
export default AlertTriangleIcon;
