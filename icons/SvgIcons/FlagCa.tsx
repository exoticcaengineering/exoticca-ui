import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'icons/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagCaIcon = WithIconWrapper(
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
      <path fill="#fff" d="M9.143 4.571h13.714v22.857H9.143V4.571z" />
      <path
        fill="#ff3131"
        d="M22.857 4.571v22.857h4.571a4.571 4.571 0 0 0 4.571-4.571V9.143a4.571 4.571 0 0 0-4.571-4.571h-4.571zM9.143 27.429V4.572H4.572A4.571 4.571 0 0 0 .001 9.143v13.714a4.571 4.571 0 0 0 4.571 4.571h4.571zM18.694 14.83a.5.5 0 0 1-.845-.452l.438-2.188-1.524.762-.762-2.286-.762 2.286-1.524-.762.438 2.188c.097.486-.495.803-.845.452a.5.5 0 0 0-.708 0l-.408.408-1.524-.762L11.43 16l-.223.223a.762.762 0 0 0 0 1.078l1.747 1.747h2.286l.381 2.286h.762l.381-2.286h2.286l1.747-1.747a.762.762 0 0 0 0-1.078L20.574 16l.762-1.524-1.524.762-.408-.408a.5.5 0 0 0-.708 0z"
      />
    </svg>
  ),
);
export default FlagCaIcon;
