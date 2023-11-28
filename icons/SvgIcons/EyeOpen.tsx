import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from '../WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const EyeOpenIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 32"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M21.333.747C15.578.747 10.51 3.31 6.182 7.542a33.106 33.106 0 0 0-3.901 4.593c-.666.946-1.123 1.69-1.366 2.135a1.385 1.385 0 0 0 0 1.328l.222.388c.262.441.644 1.037 1.144 1.747a33.095 33.095 0 0 0 3.901 4.593c4.328 4.232 9.396 6.795 15.151 6.795s10.823-2.563 15.151-6.795a33.106 33.106 0 0 0 3.901-4.593c.666-.946 1.123-1.69 1.366-2.135a1.385 1.385 0 0 0 0-1.328l-.222-.388a27.645 27.645 0 0 0-1.144-1.747 33.095 33.095 0 0 0-3.901-4.593C32.156 3.31 27.088.747 21.333.747zm0 2.773c4.936 0 9.359 2.237 13.212 6.005a30.363 30.363 0 0 1 3.572 4.207l.414.602.389.597-.389.602a30.373 30.373 0 0 1-3.986 4.809c-3.854 3.768-8.277 6.005-13.212 6.005s-9.359-2.237-13.212-6.005a30.363 30.363 0 0 1-3.572-4.207l-.414-.602-.391-.602.391-.597a30.373 30.373 0 0 1 3.986-4.809c3.854-3.768 8.277-6.005 13.212-6.005z" />
      <path d="M21.333 9.28a5.653 5.653 0 1 0 0 11.306 5.653 5.653 0 0 0 0-11.306zm0 2.333a3.32 3.32 0 1 1 .001 6.639 3.32 3.32 0 0 1-.001-6.639" />
    </svg>
  ),
);
export default EyeOpenIcon;
