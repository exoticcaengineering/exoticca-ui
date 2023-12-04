import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TravelHandBaggageIcon = WithIconWrapper(
  ({
    title = 'travel-hand-baggage-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 117 117"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        d="M92.625 97.5h-68.25a9.747 9.747 0 0 1-9.75-9.75V46.313a9.747 9.747 0 0 1 9.75-9.75h68.25a9.747 9.747 0 0 1 9.75 9.75V87.75a9.747 9.747 0 0 1-9.75 9.75"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        d="M76.27 36.563v-7.669a9.747 9.747 0 0 0-9.75-9.75H50.475a9.747 9.747 0 0 0-9.75 9.75v7.669M36.563 36.563V97.5M80.438 63.375V36.563"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        d="M63.375 63.375H87.75V78H63.375z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        d="M80.438 97.5V78"
      />
    </svg>
  ),
);
export default TravelHandBaggageIcon;
