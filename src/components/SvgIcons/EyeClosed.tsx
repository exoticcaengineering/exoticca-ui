import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const EyeClosedIcon = WithIconWrapper(
  ({
    title = 'eye-closed-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 32"
      width="1em"
      height="1em"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M9.371 7.179a1.263 1.263 0 0 1-.346 1.753c-2.372 1.59-4.385 3.543-5.943 5.757l-.325.475.377.542.171.235a23.328 23.328 0 0 0 2.832 3.195c3.054 2.861 6.559 4.558 10.453 4.558 2.757-.04 5.422-.851 7.602-2.31a1.263 1.263 0 1 1 1.405 2.099c-2.59 1.733-5.732 2.69-8.989 2.737-4.632 0-8.713-1.977-12.198-5.241a25.768 25.768 0 0 1-3.14-3.542l-.372-.518c-.34-.487-.585-.876-.733-1.136-.228-.4-.22-.891.02-1.284 1.832-2.997 4.367-5.61 7.433-7.666a1.264 1.264 0 0 1 1.753.346zm7.237-3.083c4.632 0 8.713 1.977 12.198 5.241a25.768 25.768 0 0 1 3.14 3.542 18.3 18.3 0 0 1 1.105 1.655c.227.399.22.89-.019 1.282a24.063 24.063 0 0 1-3.18 4.125 1.263 1.263 0 1 1-1.824-1.748 21.765 21.765 0 0 0 1.996-2.404l.433-.635-.219-.322-.327-.456a23.328 23.328 0 0 0-2.832-3.195C24.025 8.32 20.52 6.623 16.605 6.623c-.9-.002-1.797.088-2.673.268a1.265 1.265 0 0 1-.509-2.475 15.67 15.67 0 0 1 3.184-.32zm-1.98 7.665c.442.54.362 1.336-.178 1.777-.736.602-1.023 1.462-.789 2.267.245.843 1.034 1.536 2.083 1.771 1.08.242 2.222-.052 2.955-.742a1.264 1.264 0 0 1 1.733 1.839c-1.354 1.276-3.355 1.791-5.24 1.369-1.917-.43-3.444-1.77-3.956-3.531-.523-1.799.111-3.698 1.615-4.928a1.262 1.262 0 0 1 1.777.178z" />
      <path d="M.314.851A1.263 1.263 0 0 1 1.947.622l.149.113 30.69 26.947a1.264 1.264 0 0 1-1.517 2.012l-.149-.113L.43 2.634A1.264 1.264 0 0 1 .314.851z" />
    </svg>
  ),
);
export default EyeClosedIcon;
