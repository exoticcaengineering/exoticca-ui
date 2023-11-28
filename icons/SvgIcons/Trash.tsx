import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'icons/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TrashIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#000"
        strokeWidth={0.305}
        d="M20.139 12.394a.703.703 0 0 0-.703.703v13.28a.703.703 0 0 0 1.406 0v-13.28a.703.703 0 0 0-.703-.703zM11.848 12.394a.703.703 0 0 0-.703.703v13.28a.703.703 0 0 0 1.406 0v-13.28a.703.703 0 0 0-.703-.703z"
      />
      <path
        stroke="#000"
        strokeWidth={0.305}
        d="M5.805 10.456v17.311c0 1.023.375 1.984 1.031 2.674a3.458 3.458 0 0 0 2.511 1.085h13.294a3.465 3.465 0 0 0 2.511-1.085c.655-.689 1.031-1.65 1.031-2.674V10.456a2.684 2.684 0 0 0-.688-5.278h-3.597V4.3a2.761 2.761 0 0 0-2.783-2.776h-6.239A2.759 2.759 0 0 0 10.093 4.3v.878H6.496a2.683 2.683 0 0 0-.688 5.278zM22.64 30.121H9.346c-1.201 0-2.136-1.032-2.136-2.354V10.518h17.566v17.249c0 1.322-.935 2.354-2.136 2.354zM11.496 4.299a1.356 1.356 0 0 1 1.377-1.37h6.239a1.354 1.354 0 0 1 1.377 1.37v.878h-8.994v-.878zM6.494 6.583h18.999a1.265 1.265 0 0 1 0 2.53H6.494a1.265 1.265 0 1 1 0-2.53z"
      />
      <path
        stroke="#000"
        strokeWidth={0.305}
        d="M15.993 12.394a.703.703 0 0 0-.703.703v13.28a.703.703 0 0 0 1.406 0v-13.28a.703.703 0 0 0-.703-.703z"
      />
    </svg>
  ),
);
export default TrashIcon;
