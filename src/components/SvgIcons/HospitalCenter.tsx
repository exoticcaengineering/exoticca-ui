import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const HospitalCenterIcon = WithIconWrapper(
  ({
    title = 'hospital-center-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 25"
      width="1em"
      height="1em"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5.39v2.5M13.25 6.64h-2.5"
      />
      <circle
        cx={12}
        cy={6.641}
        r={4}
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 14.64h6a1 1 0 0 1 1 1v6H8v-6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8.64v13M21 21.64v-13M8.537 8.64H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h5.128M15.872 5.64H21a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5.536M22 21.64H2M12 14.64v7"
      />
    </svg>
  ),
);
export default HospitalCenterIcon;
