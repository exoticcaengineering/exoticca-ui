import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IcoEarthCircledIcon = WithIconWrapper(
  ({
    title = 'ico-earth-circled-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 40"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        d="M9.25 20h5.215A3.536 3.536 0 0 0 18 16.465c0-.938-.372-1.837-1.035-2.5l-3.068-3.068M28.365 28.047l-2.222-3.332a2.166 2.166 0 0 0-1.803-.965 2.165 2.165 0 0 1-1.938-1.198l-.167-.332a2.167 2.167 0 0 1 0-1.938l1.417-2.832a2.167 2.167 0 0 1 1.938-1.198h5.51"
      />
      <path
        stroke="currentColor"
        d="M20.5 8.75A11.23 11.23 0 0 1 31.75 20 11.23 11.23 0 0 1 20.5 31.25M20.5 31.25A11.23 11.23 0 0 1 9.25 20 11.23 11.23 0 0 1 20.5 8.75M8.15 9.455a16.28 16.28 0 0 1 2.82-2.597M29.528 33.51a16.18 16.18 0 0 1-9.028 2.74c-1.647 0-3.233-.25-4.732-.705M10.297 32.638a16.26 16.26 0 0 1-5.102-7.221M5.195 14.583A16.164 16.164 0 0 0 4.25 20"
      />
      <path
        stroke="currentColor"
        d="M33.975 29.028c1.74-2.583 2.775-5.678 2.775-9.028 0-8.975-7.275-16.25-16.25-16.25"
      />
    </svg>
  ),
);
export default IcoEarthCircledIcon;
