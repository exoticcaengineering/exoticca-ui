import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TwentyFourHoursIcon = WithIconWrapper(
  ({
    title = 'twenty-four-hours-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 32 32"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M16 28.001c-6.46.03-11.783-5.06-12.044-11.514-.26-6.454 4.636-11.956 11.077-12.446 6.441-.49 12.114 4.207 12.833 10.627"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M10.667 16.668h6V9.334"
      />
      <path
        fill="currentColor"
        d="M18.44 26.001v-.91c3.24-3.41 3.54-3.77 3.54-4.46 0-.79-.55-1.12-1.11-1.13-.65-.01-1.15.45-1.11 1.19l-1.21-.01c-.08-1.36 1.05-2.29 2.38-2.29 1.26 0 2.24.84 2.26 2.1.02 1.19-.54 1.77-3.09 4.4h3.28v1.11zm11.011-2.69v1.11h-.7v1.58h-1.25v-1.58h-3.58v-.8l3.26-5.12h1.57v4.81h.7m-4.09 0h2.14v-3.56l-2.14 3.56"
      />
    </svg>
  ),
);
export default TwentyFourHoursIcon;
