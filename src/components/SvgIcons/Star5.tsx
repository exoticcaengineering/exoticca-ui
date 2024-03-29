import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const Star5Icon = WithIconWrapper(
  ({
    title = 'star5icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 136 24"
      width="1em"
      height="1em"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.731 20.833A1.5 1.5 0 0 1 5.56 19.24l.81-4.639-3.408-3.265a1.5 1.5 0 0 1 .828-2.572l4.73-.677 2.136-4.26a1.5 1.5 0 0 1 2.69 0l2.135 4.26 4.731.677a1.5 1.5 0 0 1 .828 2.572L17.63 14.6l.81 4.64a1.5 1.5 0 0 1-2.172 1.593L12 18.628l-4.269 2.205M35.731 20.833a1.5 1.5 0 0 1-2.172-1.593l.81-4.639-3.408-3.265a1.5 1.5 0 0 1 .828-2.572l4.73-.677 2.136-4.26a1.5 1.5 0 0 1 2.69 0l2.136 4.26 4.73.677a1.5 1.5 0 0 1 .828 2.572L45.63 14.6l.81 4.64a1.5 1.5 0 0 1-2.172 1.593L40 18.628l-4.269 2.205M63.731 20.833a1.5 1.5 0 0 1-2.172-1.593l.81-4.639-3.408-3.265a1.5 1.5 0 0 1 .828-2.572l4.73-.677 2.136-4.26a1.5 1.5 0 0 1 2.69 0l2.136 4.26 4.73.677a1.5 1.5 0 0 1 .828 2.572L73.63 14.6l.81 4.64a1.5 1.5 0 0 1-2.172 1.593L68 18.628l-4.269 2.205M91.731 20.833a1.5 1.5 0 0 1-2.172-1.593l.81-4.639-3.408-3.265a1.5 1.5 0 0 1 .828-2.572l4.73-.677 2.136-4.26a1.5 1.5 0 0 1 2.69 0l2.136 4.26 4.73.677a1.503 1.503 0 0 1 .828 2.572l-3.408 3.265.81 4.64a1.501 1.501 0 0 1-2.172 1.593L96 18.628l-4.269 2.205M119.731 20.833a1.501 1.501 0 0 1-2.172-1.593l.81-4.639-3.408-3.265a1.502 1.502 0 0 1 .828-2.572l4.731-.677 2.135-4.26a1.502 1.502 0 0 1 2.69 0l2.135 4.26 4.731.677a1.503 1.503 0 0 1 .828 2.572l-3.408 3.265.81 4.64a1.501 1.501 0 0 1-2.172 1.593L124 18.628l-4.269 2.205"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default Star5Icon;
