import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlagEs = ({
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
    <path fill="#ffd133" d="M0 9.143h32v13.714H0V9.143z" />
    <path
      fill="#dd172c"
      d="M0 9.143a4.571 4.571 0 0 1 4.571-4.571h22.857a4.571 4.571 0 0 1 4.571 4.571v1.524h-32V9.143zM32 21.333H0v1.524a4.57 4.57 0 0 0 4.565 4.571h22.87A4.571 4.571 0 0 0 32 22.857v-1.524z"
    />
    <path fill="#ffd133" d="M0 21.333h32V10.666H0v10.667z" />
    <path
      fill="#a41517"
      d="M8.132 14.476c-.892 0-1.593.762-1.519 1.65l.117 1.402a1.657 1.657 0 0 0 3.3 0l.117-1.402a1.524 1.524 0 0 0-1.519-1.65h-.497zM5.333 13.714a.762.762 0 0 0-.762.762v3.81a.762.762 0 1 0 1.524 0v-3.81a.762.762 0 0 0-.762-.762zM11.429 13.714a.762.762 0 0 0-.762.762v3.81a.762.762 0 1 0 1.524 0v-3.81a.762.762 0 0 0-.762-.762zM6.857 13.41a1.22 1.22 0 0 1 1.219-1.219h.61a1.22 1.22 0 0 1 1.219 1.219.305.305 0 0 1-.305.305H7.162a.305.305 0 0 1-.305-.305z"
    />
  </svg>
);
export default SvgFlagEs;
