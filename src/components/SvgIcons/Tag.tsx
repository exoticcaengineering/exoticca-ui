import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTag = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 32"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m20.261.545 14.048 4.837a1.371 1.371 0 0 1 .85 1.743l-4.837 14.048a1.377 1.377 0 0 1-.696.787l-16.217 7.898a4.338 4.338 0 0 1-5.808-2.002L.997 14.316a4.343 4.343 0 0 1 1.992-5.793L19.215.609a1.376 1.376 0 0 1 1.048-.064zm11.86 6.985L19.906 3.324 4.194 10.987a1.6 1.6 0 0 0-.731 2.131l6.602 13.537a1.6 1.6 0 0 0 .918.813l.245.063c.33.058.673.011.978-.138l15.71-7.652L32.12 7.53z" />
    <path d="M25.297 8.625a2.389 2.389 0 0 0-1.855 4.392l.299.126a2.395 2.395 0 0 0 3.057-1.475 2.39 2.39 0 0 0-1.182-2.911l-.319-.133z" />
  </svg>
);
export default WithIconWrapper(SvgTag);
