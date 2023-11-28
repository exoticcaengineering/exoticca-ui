import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CalendarCrossIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 21 20"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        <path d="M9.176 9.176a.6.6 0 0 1 .848 0l2.084 2.083a.6.6 0 0 1-.849.849l-2.083-2.084a.6.6 0 0 1 0-.848z" />
        <path d="M12.108 9.176a.6.6 0 0 1 0 .848l-2.084 2.084a.6.6 0 0 1-.848-.849l2.083-2.083a.6.6 0 0 1 .849 0z" />
        <path d="M7.183 2.5a.6.6 0 0 0-1.2 0v.9H5.5a3.1 3.1 0 0 0-3.1 3.1v8.75a3.1 3.1 0 0 0 3.1 3.1h8.131a3.1 3.1 0 0 0 2.192-.908l1.869-1.869a3.1 3.1 0 0 0 .908-2.192V6.5a3.1 3.1 0 0 0-3.1-3.1h-.817v-.9a.6.6 0 1 0-1.2 0v.9h-6.3zM5.5 4.6h.483V5a.6.6 0 0 0 1.2 0v-.4h6.3V5a.6.6 0 1 0 1.2 0v-.4h.817c1.05 0 1.9.85 1.9 1.9v5.817h-2.483a2.267 2.267 0 0 0-2.267 2.266v2.567H5.5a1.9 1.9 0 0 1-1.9-1.9V6.5c0-1.05.85-1.9 1.9-1.9zm8.35 12.537a1.9 1.9 0 0 0 1.125-.544l1.868-1.869a1.9 1.9 0 0 0 .552-1.207h-2.478c-.59 0-1.067.477-1.067 1.066z" />
      </g>
    </svg>
  ),
);
export default CalendarCrossIcon;
