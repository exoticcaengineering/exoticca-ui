import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const Star4SpIcon = WithIconWrapper(
  ({
    title = 'star4sp-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 141 24"
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
        d="M7.731 20.833A1.5 1.5 0 0 1 5.56 19.24l.81-4.639-3.408-3.265a1.5 1.5 0 0 1 .828-2.572l4.73-.677 2.136-4.26a1.5 1.5 0 0 1 2.69 0l2.135 4.26 4.731.677a1.5 1.5 0 0 1 .828 2.572L17.63 14.6l.81 4.64a1.5 1.5 0 0 1-2.172 1.593L12 18.628l-4.269 2.205M35.731 20.833a1.5 1.5 0 0 1-2.172-1.593l.81-4.639-3.408-3.265a1.5 1.5 0 0 1 .828-2.572l4.73-.677 2.136-4.26a1.5 1.5 0 0 1 2.69 0l2.136 4.26 4.73.677a1.5 1.5 0 0 1 .828 2.572L45.63 14.6l.81 4.64a1.5 1.5 0 0 1-2.172 1.593L40 18.628l-4.269 2.205M63.731 20.833a1.5 1.5 0 0 1-2.172-1.593l.81-4.639-3.408-3.265a1.5 1.5 0 0 1 .828-2.572l4.73-.677 2.136-4.26a1.5 1.5 0 0 1 2.69 0l2.136 4.26 4.73.677a1.5 1.5 0 0 1 .828 2.572L73.63 14.6l.81 4.64a1.5 1.5 0 0 1-2.172 1.593L68 18.628l-4.269 2.205M91.731 20.833a1.5 1.5 0 0 1-2.172-1.593l.81-4.639-3.408-3.265a1.5 1.5 0 0 1 .828-2.572l4.73-.677 2.136-4.26a1.5 1.5 0 0 1 2.69 0l2.136 4.26 4.73.677a1.503 1.503 0 0 1 .828 2.572l-3.408 3.265.81 4.64a1.501 1.501 0 0 1-2.172 1.593L96 18.628l-4.269 2.205"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M118.578 21.22c-3.432 0-5.72-2.222-5.962-4.906h1.914c.264 1.496 1.474 3.058 4.092 3.058 2.222 0 3.916-.946 3.938-2.882 0-2.09-2.354-2.728-4.466-3.476-2.42-.836-4.972-1.76-4.972-4.422 0-2.838 2.75-4.312 5.5-4.312 3.586 0 5.346 1.826 5.808 4.532h-1.76c-.198-1.43-1.518-2.86-4.026-2.86-1.672 0-3.52.792-3.52 2.53 0 1.694 2.046 2.354 3.982 3.102 2.376.924 5.434 1.76 5.434 4.84 0 3.124-2.838 4.796-5.962 4.796M128.45 4.5h6.82c2.574 0 4.62 2.332 4.62 4.906s-2.046 4.862-4.62 4.862h-4.884V21h-1.936zm1.936 8.14h4.752c1.628 0 2.992-1.496 2.992-3.212 0-1.694-1.364-3.212-2.992-3.212h-4.752z"
      />
    </svg>
  ),
);
export default Star4SpIcon;
