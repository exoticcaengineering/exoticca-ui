import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CbFranceIcon = WithIconWrapper(
  ({
    title = 'cb-france-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 34 24"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <linearGradient
        id="cb-france_svg__a"
        x1={30.37}
        x2={10.046}
        y1={-2.421}
        y2={29.568}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#11244e" />
        <stop offset={0.51} stopColor="#408cbf" />
        <stop offset={1} stopColor="#4b964d" />
      </linearGradient>
      <path fill="url(#cb-france_svg__a)" d="M1450.667 0H0v1024h1450.667z" />
      <path
        fill="#fff"
        d="m17.72 11.464.006.07v-.07zM11.363 6c3.709 0 6.054 2.183 6.357 5.464h-6.426v1.176h6.432c-.276 3.389-2.628 5.533-6.363 5.533C7.56 18.173 5 15.89 5 12.087 5 8.42 7.42 6 11.363 6zm17.983 2.974c0-.346-.07-.692-.208-1.037s-.346-.623-.553-.83c-.277-.277-.553-.485-.9-.554-.345-.138-.76-.138-1.313-.138h-7.608v5.119h7.539c.553 0 1.037-.07 1.314-.14.345-.138.622-.276.899-.553.277-.276.415-.553.553-.83.208-.345.277-.691.277-1.037m0 6.294c0-.346-.07-.692-.208-1.037s-.346-.623-.553-.83c-.277-.277-.553-.485-.9-.554-.345-.138-.76-.138-1.313-.138h-7.608v5.118h7.539c.553 0 1.037-.07 1.314-.138.345-.139.622-.277.899-.554.277-.276.415-.553.553-.83.208-.345.277-.691.277-1.037z"
      />
    </svg>
  ),
);
export default CbFranceIcon;
