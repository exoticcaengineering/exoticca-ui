import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlayStoreIconDe = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 159 47"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M152.75 47H5.875C2.585 47 0 44.415 0 41.125V5.875C0 2.585 2.585 0 5.875 0H152.75c3.29 0 5.875 2.585 5.875 5.875v35.25c0 3.173-2.585 5.875-5.875 5.875"
    />
    <path
      fill="#000"
      d="M152.75.94c2.702 0 4.935 2.233 4.935 4.935v35.25c0 2.703-2.233 4.935-4.935 4.935H5.875C3.173 46.06.94 43.828.94 41.125V5.875C.94 3.173 3.173.94 5.875.94zm0-.94H5.875C2.585 0 0 2.585 0 5.875v35.25C0 44.415 2.585 47 5.875 47H152.75c3.29 0 5.875-2.585 5.875-5.875V5.875c0-3.172-2.585-5.875-5.875-5.875"
    />
    <g fill="#fff">
      <path d="M51.071 6.905h.738v4.357c0 .389-.071.72-.214.99a1.456 1.456 0 0 1-.604.62c-.26.14-.567.211-.92.211-.333 0-.63-.06-.89-.181a1.467 1.467 0 0 1-.613-.524 1.434 1.434 0 0 1-.223-.807h.726a.8.8 0 0 0 .128.453c.088.127.207.226.357.297s.323.107.515.107c.213 0 .393-.044.542-.134a.847.847 0 0 0 .34-.392c.078-.175.118-.388.118-.64zM53.288 13V6.905h3.678v.655h-2.94v2.06h2.75v.654h-2.75v2.071h2.988V13zM57.963 7.56v-.655h4.571v.655h-1.916V13h-.738V7.56zM63.47 13v-.536l3.286-4.904h-3.321v-.655h4.202v.536l-3.285 4.904h3.32V13zM68.577 7.56v-.655h4.571v.655h-1.916V13h-.738V7.56zM76.644 13V6.905h2.13c.425 0 .775.074 1.051.22.276.145.481.34.616.587.135.244.203.515.203.812 0 .262-.047.478-.14.649-.092.17-.213.305-.363.405-.15.099-.31.172-.485.22v.06c.186.011.374.077.562.196.189.119.346.29.473.512.127.222.19.494.19.815 0 .306-.069.58-.208.824-.139.244-.358.438-.657.58-.3.143-.69.215-1.17.215zm.738-.655h1.464c.482 0 .824-.093 1.027-.28a.897.897 0 0 0 .306-.684c0-.206-.052-.397-.157-.571a1.142 1.142 0 0 0-.45-.423 1.41 1.41 0 0 0-.69-.16h-1.5zm0-2.761h1.369c.222 0 .423-.044.601-.131.18-.088.323-.21.429-.37a.975.975 0 0 0 .16-.559.927.927 0 0 0-.28-.681c-.186-.189-.482-.283-.886-.283h-1.393zM82.094 13V6.905h3.678v.655h-2.94v2.06h2.75v.654h-2.75v2.071h2.988V13zM87.84 6.905V13h-.737V6.905zM80.018 25.615c-2.82 0-5.053 2.115-5.053 5.053 0 2.82 2.233 5.052 5.053 5.052s5.052-2.115 5.052-5.052c0-3.055-2.232-5.053-5.052-5.053zm0 7.99c-1.528 0-2.82-1.292-2.82-3.055s1.292-3.055 2.82-3.055 2.82 1.175 2.82 3.055c0 1.763-1.293 3.055-2.82 3.055m-10.928-7.99c-2.82 0-5.052 2.115-5.052 5.053 0 2.82 2.232 5.052 5.052 5.052s5.053-2.115 5.053-5.052c0-3.055-2.233-5.053-5.053-5.053m0 7.99c-1.527 0-2.82-1.292-2.82-3.055s1.293-3.055 2.82-3.055 2.82 1.175 2.82 3.055c0 1.763-1.292 3.055-2.82 3.055m-13.042-6.462v2.115H61.1c-.117 1.175-.587 2.115-1.175 2.702-.705.705-1.88 1.528-3.877 1.528-3.173 0-5.523-2.468-5.523-5.64s2.468-5.64 5.523-5.64c1.645 0 2.937.705 3.877 1.527l1.528-1.527c-1.293-1.175-2.938-2.115-5.288-2.115-4.23 0-7.872 3.525-7.872 7.755s3.642 7.755 7.872 7.755c2.35 0 3.995-.705 5.405-2.233 1.41-1.41 1.88-3.407 1.88-4.935 0-.47 0-.94-.117-1.292zm53.344 1.645c-.47-1.175-1.645-3.173-4.23-3.173s-4.7 1.998-4.7 5.053c0 2.82 2.115 5.052 4.935 5.052 2.233 0 3.643-1.41 4.113-2.232l-1.645-1.175c-.588.822-1.293 1.41-2.468 1.41s-1.88-.47-2.467-1.528l6.697-2.82zm-6.815 1.645c0-1.88 1.528-2.938 2.585-2.938.823 0 1.645.47 1.88 1.058zm-5.522 4.817h2.232V20.563h-2.232zm-3.525-8.577c-.588-.588-1.528-1.175-2.703-1.175-2.467 0-4.817 2.232-4.817 5.052s2.232 4.935 4.817 4.935c1.175 0 2.115-.587 2.585-1.175h.118v.705c0 1.88-1.058 2.938-2.703 2.938-1.292 0-2.232-.94-2.467-1.763l-1.88.823c.587 1.292 1.997 2.937 4.465 2.937 2.585 0 4.7-1.527 4.7-5.17v-8.93H93.53zm-2.585 6.932c-1.527 0-2.82-1.292-2.82-3.055s1.293-3.055 2.82-3.055 2.703 1.293 2.703 3.055-1.176 3.055-2.703 3.055m28.67-13.042h-5.288V35.25h2.233v-5.522h3.055c2.467 0 4.817-1.763 4.817-4.583s-2.35-4.582-4.817-4.582zm.117 7.05h-3.172V22.56h3.172c1.645 0 2.585 1.41 2.585 2.468-.117 1.292-1.057 2.585-2.585 2.585m13.513-2.115c-1.645 0-3.29.705-3.878 2.232l1.998.823c.47-.823 1.175-1.058 1.997-1.058 1.175 0 2.233.705 2.35 1.88v.118c-.352-.235-1.292-.588-2.232-.588-2.115 0-4.23 1.175-4.23 3.29 0 1.998 1.762 3.29 3.642 3.29 1.528 0 2.233-.705 2.82-1.41h.118v1.175h2.115v-5.64c-.235-2.585-2.233-4.112-4.7-4.112zm-.235 8.107c-.705 0-1.763-.352-1.763-1.292 0-1.175 1.293-1.528 2.35-1.528.94 0 1.41.235 1.998.47-.235 1.41-1.41 2.35-2.585 2.35zm12.337-7.755-2.467 6.345h-.118l-2.585-6.345h-2.35l3.878 8.93-2.233 4.935h2.233l5.992-13.865zm-19.74 9.4h2.233V20.563h-2.233z" />
    </g>
    <path
      fill="#ea4335"
      d="M24.322 22.795 11.867 36.072c.353 1.41 1.645 2.468 3.29 2.468.588 0 1.175-.118 1.763-.47l14.1-8.108z"
    />
    <path
      fill="#fbbc04"
      d="m37.012 20.563-6.11-3.525-6.815 6.11 6.815 6.815 5.993-3.525c1.057-.588 1.762-1.645 1.762-2.938.118-1.292-.587-2.35-1.645-2.937z"
    />
    <path
      fill="#4285f4"
      d="M11.868 10.928c-.118.235-.118.588-.118.823v23.5c0 .352 0 .587.118.822l12.925-12.925z"
    />
    <path
      fill="#34a853"
      d="m24.44 23.5 6.463-6.462-14.1-8.108c-.47-.352-1.058-.47-1.763-.47-1.527 0-2.937 1.058-3.29 2.468z"
    />
  </svg>
);
export default WithIconWrapper(SvgPlayStoreIconDe);
