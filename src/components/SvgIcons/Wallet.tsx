import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWallet = ({
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
    <path d="M30.2 15.792V9.419a2.672 2.672 0 0 0-2.667-2.672h-.904l.2-.698a2.138 2.138 0 0 0-1.46-2.646l-6.051-1.746a.534.534 0 0 0-.295 1.027l3.804 1.097a3.27 3.27 0 0 0-.012 2.964H11.666V2.536a.534.534 0 1 0-1.066 0v4.209H8.8V2.536a.534.534 0 1 0-1.066 0v4.209H5.401v-4.61a1.07 1.07 0 0 1 1.067-1.069h9c.588 0 1.067.48 1.067 1.069v2.939a.534.534 0 1 0 1.066 0V2.135a2.138 2.138 0 0 0-2.133-2.138h-9a2.138 2.138 0 0 0-2.133 2.138v4.61H2.668A2.673 2.673 0 0 0 .001 9.417v19.908a2.672 2.672 0 0 0 2.667 2.672h24.867a2.673 2.673 0 0 0 2.667-2.672v-3.908a.534.534 0 1 0-1.066 0v3.908c0 .884-.718 1.603-1.6 1.603H2.669c-.882 0-1.6-.719-1.6-1.603V9.417c0-.884.718-1.603 1.6-1.603h24.867c.882 0 1.6.719 1.6 1.603v6.347h-4.4a2.138 2.138 0 0 0-2.133 2.138v2.939c0 1.179.957 2.138 2.133 2.138h5.135a2.138 2.138 0 0 0 2.132-2.138v-2.939a2.14 2.14 0 0 0-1.8-2.112zM23.882 4.087l1.193.344c.567.163.893.755.73 1.323l-.285.993h-1.426a2.205 2.205 0 0 1-.212-2.66zm7.051 16.756a1.07 1.07 0 0 1-1.067 1.069h-5.133a1.07 1.07 0 0 1-1.067-1.069v-2.939a1.07 1.07 0 0 1 1.067-1.069h5.133c.588 0 1.067.48 1.067 1.069zm-4.2-1.469a.534.534 0 0 1-.533.534h-.8a.533.533 0 0 1 0-1.068h.8c.295 0 .533.239.533.534z" />
  </svg>
);
export default SvgWallet;
