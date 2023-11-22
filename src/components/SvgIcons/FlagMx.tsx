import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlagMx = ({
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
    <path fill="#fff" d="M9.143 4.571h13.714v22.857H9.143V4.571z" />
    <path
      fill="#e3283e"
      d="M21.333 4.571v22.857h6.095a4.571 4.571 0 0 0 4.571-4.526V9.096a4.571 4.571 0 0 0-4.571-4.526h-6.095z"
    />
    <path
      fill="#128a60"
      d="M10.667 27.429V4.572H4.572A4.571 4.571 0 0 0 .001 9.143v13.714a4.571 4.571 0 0 0 4.571 4.571h6.095z"
    />
    <path
      fill="#8c9157"
      d="M12.15 14.857c.399 0 .722.309.722.691 0 1.106.626 2.073 1.561 2.592.345.192.462.614.262.944s-.642.442-.987.251c-1.362-.756-2.28-2.169-2.28-3.787 0-.382.323-.691.722-.691zM19.849 14.857c.399 0 .722.309.722.691 0 1.551-.843 2.912-2.111 3.689-.336.206-.782.112-.997-.21s-.117-.749.219-.954c.871-.533 1.445-1.465 1.445-2.524 0-.382.323-.691.722-.691z"
    />
    <path
      fill="#c59262"
      d="M16 18.286c1.262 0 2.286-1.535 2.286-3.429S17.263 11.428 16 11.428s-2.286 1.535-2.286 3.429 1.023 3.429 2.286 3.429"
    />
  </svg>
);
export default SvgFlagMx;
