import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MgmStepSmileIcon = WithIconWrapper(
  ({
    title = 'mgm-step-smile-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M7 10c.395-.485.935-.76 1.5-.76s1.09.275 1.5.76M14 10c.395-.485.935-.76 1.5-.76s1.09.275 1.5.76" />
        <path d="M18.364 5.636A9 9 0 1 1 5.636 18.364 9 9 0 0 1 18.364 5.636" />
        <path d="M15.5 14.688S14.187 16 12 16c-2.188 0-3.5-1.312-3.5-1.312" />
      </g>
    </svg>
  ),
);
export default MgmStepSmileIcon;
