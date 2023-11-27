import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagUkIcon = WithIconWrapper(
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
        fill="#fff"
        d="M27.429 4.571H4.572A4.571 4.571 0 0 0 .001 9.142v13.714a4.571 4.571 0 0 0 4.571 4.571h22.857A4.571 4.571 0 0 0 32 22.856V9.142a4.571 4.571 0 0 0-4.571-4.571z"
      />
      <path
        fill="#0a17a7"
        d="M0 9.143a4.571 4.571 0 0 1 4.571-4.571h22.857a4.571 4.571 0 0 1 4.571 4.571v13.714a4.571 4.571 0 0 1-4.571 4.571H4.571A4.571 4.571 0 0 1 0 22.857V9.143z"
      />
      <path
        fill="#fff"
        d="m.384 24.695 7.243-4.885H0v-7.619h7.627L.384 7.306a4.589 4.589 0 0 1 2.125-2.243l9.682 6.53V4.572h7.619v7.021l9.681-6.53a4.589 4.589 0 0 1 2.125 2.243l-7.243 4.885H32v7.619h-7.627l7.243 4.885a4.589 4.589 0 0 1-2.125 2.243l-9.681-6.53v7.021h-7.619v-7.021l-9.682 6.53a4.589 4.589 0 0 1-2.125-2.243z"
      />
      <path
        fill="red"
        d="M30.917 6.188a4.568 4.568 0 0 0-.872-.794l-9.024 5.937a.57.57 0 1 0 .628.954zM1.914 26.577a4.606 4.606 0 0 1-.861-.801l9.248-6.133a.572.572 0 0 1 .632.952l-9.019 5.981zM31.331 25.239a4.628 4.628 0 0 1-.716.896L22.552 20.7a.57.57 0 1 1 .639-.947l8.14 5.487zM.671 6.758a4.56 4.56 0 0 1 .717-.895L9.47 11.31a.571.571 0 0 1-.638.948L.672 6.759z"
      />
      <path
        fill="#e6273e"
        d="M0 18.286h13.714v9.143h4.571v-9.143h13.714v-4.571H18.285V4.572h-4.571v9.143H0v4.571z"
      />
    </svg>
  ),
);
export default FlagUkIcon;
