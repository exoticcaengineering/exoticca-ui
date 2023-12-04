import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CogIcon = WithIconWrapper(
  ({
    title = 'cog-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.9 15.647 1.398.214a2 2 0 0 1 1.693 2.123l-.103 1.41c-.03.412.194.799.565.978l1.034.498c.371.179.814.112 1.117-.167l1.04-.96a2 2 0 0 1 2.714 0l1.04.96c.302.28.744.346 1.116.167l1.036-.5a1 1 0 0 0 .563-.973l-.103-1.413a2 2 0 0 1 1.693-2.123l1.398-.214c.407-.062.735-.367.827-.77l.255-1.117a1.001 1.001 0 0 0-.41-1.051l-1.168-.8a2 2 0 0 1-.604-2.646l.705-1.226a1.004 1.004 0 0 0-.086-1.126l-.715-.897a1.004 1.004 0 0 0-1.079-.334l-1.352.414a2.001 2.001 0 0 1-2.448-1.178l-.518-1.313a1.004 1.004 0 0 0-.936-.635l-1.146.003a1.004 1.004 0 0 0-.933.64l-.505 1.298a2 2 0 0 1-2.452 1.186l-1.408-.432a1.004 1.004 0 0 0-1.082.336l-.71.898a1.003 1.003 0 0 0-.079 1.13l.721 1.229a2 2 0 0 1-.595 2.662l-1.153.79c-.34.233-.503.65-.41 1.05l.254 1.119c.091.403.42.708.826.77v0"
        clipRule="evenodd"
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.917 10.084a2.71 2.71 0 1 1-3.833 3.832 2.71 2.71 0 0 1 3.832-3.832"
      />
    </svg>
  ),
);
export default CogIcon;
