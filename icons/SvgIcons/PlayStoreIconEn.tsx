import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'icons/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const PlayStoreIconEnIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        <path d="M53.128 9.239c-.066-.2-.152-.38-.259-.539a1.663 1.663 0 0 0-.378-.41c-.145-.114-.31-.2-.494-.26s-.387-.089-.607-.089c-.361 0-.69.094-.985.28-.296.187-.53.461-.705.824-.175.363-.262.809-.262 1.337 0 .527.088.973.265 1.336.176.363.415.638.717.824.301.187.64.28 1.018.28.349 0 .656-.075.922-.223.268-.151.476-.363.625-.637a2 2 0 0 0 .226-.973l.226.047h-1.833v-.654h2.321v.654c0 .502-.107.939-.321 1.31a2.22 2.22 0 0 1-.88.863 2.653 2.653 0 0 1-1.286.303c-.54 0-1.014-.127-1.423-.38a2.567 2.567 0 0 1-.952-1.084c-.226-.468-.34-1.024-.34-1.666 0-.483.065-.916.194-1.3a2.88 2.88 0 0 1 .554-.989c.238-.272.52-.48.845-.625a2.613 2.613 0 0 1 1.074-.217c.321 0 .621.049.899.146a2.412 2.412 0 0 1 1.297 1.035c.147.242.248.511.304.807zM55.19 13.429V7.334h3.678v.655h-2.94v2.06h2.75v.654h-2.75v2.071h2.987v.655zM59.865 7.989v-.655h4.57v.655H62.52v5.44h-.738v-5.44zM68.67 7.334v6.095h-.739V7.334zM69.816 7.989v-.655h4.57v.655H72.47v5.44h-.738v-5.44zM83.025 10.382c0 .642-.116 1.198-.348 1.666s-.55.83-.956 1.083c-.404.254-.867.381-1.386.381s-.982-.127-1.387-.38c-.405-.255-.723-.616-.955-1.084s-.348-1.024-.348-1.666c0-.643.115-1.199.348-1.667s.55-.83.955-1.083.867-.381 1.387-.381.982.127 1.386.38.723.616.956 1.084.348 1.024.348 1.667zm-.714 0c0-.528-.089-.974-.265-1.337a1.918 1.918 0 0 0-.712-.824c-.297-.186-.63-.28-1-.28s-.703.094-1.002.28a1.945 1.945 0 0 0-.711.824c-.175.363-.262.809-.262 1.337 0 .527.087.973.262 1.336.176.363.413.638.71.824.3.187.635.28 1.004.28s.702-.093 1-.28c.3-.186.536-.461.71-.824.177-.363.266-.809.266-1.336M89.099 7.334v6.095h-.715l-3.32-4.785h-.06v4.785h-.738V7.334h.714l3.333 4.797h.06V7.334zM80.018 25.615c-2.82 0-5.053 2.115-5.053 5.053 0 2.82 2.233 5.052 5.053 5.052s5.052-2.115 5.052-5.052c0-3.055-2.232-5.053-5.052-5.053zm0 7.99c-1.528 0-2.82-1.292-2.82-3.055s1.292-3.055 2.82-3.055 2.82 1.175 2.82 3.055c0 1.763-1.293 3.055-2.82 3.055m-10.928-7.99c-2.82 0-5.052 2.115-5.052 5.053 0 2.82 2.232 5.052 5.052 5.052s5.053-2.115 5.053-5.052c0-3.055-2.233-5.053-5.053-5.053m0 7.99c-1.527 0-2.82-1.292-2.82-3.055s1.293-3.055 2.82-3.055 2.82 1.175 2.82 3.055c0 1.763-1.292 3.055-2.82 3.055m-13.042-6.462v2.115H61.1c-.117 1.175-.587 2.115-1.175 2.702-.705.705-1.88 1.528-3.877 1.528-3.173 0-5.523-2.468-5.523-5.64s2.468-5.64 5.523-5.64c1.645 0 2.937.705 3.877 1.527l1.528-1.527c-1.293-1.175-2.938-2.115-5.288-2.115-4.23 0-7.872 3.525-7.872 7.755s3.642 7.755 7.872 7.755c2.35 0 3.995-.705 5.405-2.233 1.41-1.41 1.88-3.407 1.88-4.935 0-.47 0-.94-.117-1.292zm53.344 1.645c-.47-1.175-1.645-3.173-4.23-3.173s-4.7 1.998-4.7 5.053c0 2.82 2.115 5.052 4.935 5.052 2.233 0 3.643-1.41 4.113-2.232l-1.645-1.175c-.588.822-1.293 1.41-2.468 1.41s-1.88-.47-2.467-1.528l6.697-2.82zm-6.815 1.645c0-1.88 1.528-2.938 2.585-2.938.823 0 1.645.47 1.88 1.058zm-5.522 4.817h2.232V20.563h-2.232zm-3.525-8.577c-.588-.588-1.528-1.175-2.703-1.175-2.467 0-4.817 2.232-4.817 5.052s2.232 4.935 4.817 4.935c1.175 0 2.115-.587 2.585-1.175h.118v.705c0 1.88-1.058 2.938-2.703 2.938-1.292 0-2.232-.94-2.467-1.763l-1.88.823c.587 1.292 1.997 2.937 4.465 2.937 2.585 0 4.7-1.527 4.7-5.17v-8.93H93.53zm-2.585 6.932c-1.527 0-2.82-1.292-2.82-3.055s1.293-3.055 2.82-3.055 2.703 1.293 2.703 3.055-1.176 3.055-2.703 3.055m28.67-13.042h-5.288V35.25h2.233v-5.522h3.055c2.467 0 4.817-1.763 4.817-4.583s-2.35-4.582-4.817-4.582zm.117 7.05h-3.172V22.56h3.172c1.645 0 2.585 1.41 2.585 2.468-.117 1.292-1.057 2.585-2.585 2.585m13.513-2.115c-1.645 0-3.29.705-3.878 2.232l1.998.823c.47-.823 1.175-1.058 1.997-1.058 1.175 0 2.233.705 2.35 1.88v.118c-.352-.235-1.292-.588-2.232-.588-2.115 0-4.23 1.175-4.23 3.29 0 1.998 1.762 3.29 3.642 3.29 1.528 0 2.233-.705 2.82-1.41h.118v1.175h2.115v-5.64c-.235-2.585-2.233-4.112-4.7-4.112zm-.235 8.107c-.705 0-1.763-.352-1.763-1.292 0-1.175 1.293-1.528 2.35-1.528.94 0 1.41.235 1.998.47-.235 1.41-1.41 2.35-2.585 2.35zm12.337-7.755-2.467 6.345h-.118l-2.585-6.345h-2.35l3.878 8.93-2.233 4.935h2.233l5.992-13.865zm-19.74 9.4h2.233V20.563h-2.233z" />
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
  ),
);
export default PlayStoreIconEnIcon;
