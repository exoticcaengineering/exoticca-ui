import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpotifyBox = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 41 40"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.25 12.5A6.75 6.75 0 0 1 13 5.75h15.007a6.743 6.743 0 0 1 6.743 6.743v15.015a6.743 6.743 0 0 1-6.743 6.742H12.993a6.743 6.743 0 0 1-6.743-6.743zm21.757-8.25H13a8.25 8.25 0 0 0-8.25 8.25v15.007a8.243 8.243 0 0 0 8.243 8.243h15.014a8.243 8.243 0 0 0 8.243-8.242V12.493a8.243 8.243 0 0 0-8.243-8.243zm-16.28 11.696c3.071-.909 6.643-1.056 9.933-.667 3.302.39 6.233 1.308 8.046 2.455a.75.75 0 0 0 .802-1.268c-2.07-1.309-5.243-2.272-8.672-2.677-3.439-.406-7.223-.262-10.534.718a.75.75 0 1 0 .426 1.438zm.778 4.86c5.407-1.685 11.815-.463 15.303 1.78a.75.75 0 0 0 .811-1.262c-3.856-2.48-10.724-3.769-16.56-1.95a.75.75 0 1 0 .446 1.432zm13.7 5.982c-3.1-1.86-7.242-2.83-13.332-1.463a.75.75 0 1 1-.329-1.464c6.42-1.44 10.964-.44 14.432 1.64a.75.75 0 0 1-.772 1.287"
      clipRule="evenodd"
      style={{
        stroke: 'none',
      }}
    />
  </svg>
);
export default SvgSpotifyBox;
