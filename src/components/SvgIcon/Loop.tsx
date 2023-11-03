import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLoop = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 38 32"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.56}
      d="M2.133 3.681v9.309h9.309M36.267 28.506v-9.309h-9.309"
    />
    <path d="M8.427 5.321a15.244 15.244 0 0 1 25.152 5.691 1.28 1.28 0 1 1-2.414.854 12.683 12.683 0 0 0-9.158-8.14 12.699 12.699 0 0 0-11.404 3.053l-.395.379-7.199 6.765a1.28 1.28 0 0 1-1.906-1.693l.154-.173 7.17-6.737zM35.39 18.264a1.28 1.28 0 0 1 1.906 1.693l-.154.173-7.17 6.737A15.244 15.244 0 0 1 4.82 21.176a1.28 1.28 0 1 1 2.414-.854 12.683 12.683 0 0 0 9.158 8.14 12.699 12.699 0 0 0 11.404-3.053l.395-.379 7.199-6.765z" />
  </svg>
);
export default SvgLoop;
