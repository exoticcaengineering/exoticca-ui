import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlagDe = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      fill="#262626"
      d="M0 9.143a4.571 4.571 0 0 1 4.571-4.571h22.857a4.571 4.571 0 0 1 4.571 4.571v3.048h-32V9.143z"
    />
    <path fill="#f01515" d="M0 19.809h32V12.19H0z" />
    <path
      fill="#ffd521"
      d="M32 19.81H0v3.048a4.571 4.571 0 0 0 4.571 4.571h22.857a4.571 4.571 0 0 0 4.571-4.571V19.81z"
    />
  </svg>
);
export default SvgFlagDe;
