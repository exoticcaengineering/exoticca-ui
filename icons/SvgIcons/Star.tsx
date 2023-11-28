import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'icons/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StarIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 32"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M10.761 9.491 1.01 10.918l-.185.042c-.828.256-1.119 1.333-.467 1.969l7.054 6.87-1.663 9.711-.018.189c-.013.866.921 1.477 1.728 1.053l8.721-4.59 8.721 4.59.174.075c.82.28 1.69-.419 1.536-1.318l-1.665-9.711 7.056-6.87.126-.143c.52-.693.124-1.736-.777-1.868L21.598 9.49 17.238.656c-.432-.876-1.681-.876-2.114 0L10.762 9.49zm5.419-5.649 3.578 7.248.099.165c.185.258.468.433.788.48l8.003 1.17-5.789 5.64-.126.145c-.189.256-.268.58-.213.899l1.365 7.965-7.155-3.762-.213-.087a1.175 1.175 0 0 0-.884.087l-7.157 3.762 1.367-7.965.017-.191a1.18 1.18 0 0 0-.356-.852l-5.792-5.64 8.005-1.17c.383-.056.715-.297.886-.645l3.578-7.248z"
      />
    </svg>
  ),
);
export default StarIcon;
