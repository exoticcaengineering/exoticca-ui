import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'icons/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const PlayStoreIconEsIcon = WithIconWrapper(
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
        <path d="M50.619 13h-1.881V6.906h1.964c.591 0 1.097.122 1.518.366.42.242.743.59.967 1.044.224.452.336.994.336 1.625 0 .635-.113 1.181-.339 1.64a2.417 2.417 0 0 1-.988 1.053c-.432.244-.958.366-1.577.366zm-1.143-.655h1.095c.504 0 .922-.097 1.253-.291s.578-.471.741-.83c.163-.36.244-.787.244-1.283 0-.492-.08-.916-.241-1.27-.16-.358-.4-.632-.72-.822-.32-.193-.717-.289-1.193-.289h-1.179zM55.5 6.906V13h-.739V6.906zM60.312 8.43a.934.934 0 0 0-.435-.703c-.254-.167-.565-.25-.934-.25-.27 0-.506.044-.708.13-.2.088-.357.208-.47.361a.863.863 0 0 0-.167.52c0 .163.039.303.116.42.08.115.18.212.304.289.123.075.251.138.386.187.135.048.26.087.372.117l.62.166c.158.042.335.1.529.173.196.073.384.173.562.3.181.125.33.286.447.482.117.197.175.438.175.724 0 .329-.086.626-.259.892-.17.266-.42.477-.75.634-.327.157-.724.235-1.193.235-.436 0-.814-.07-1.133-.211a1.807 1.807 0 0 1-.75-.59 1.68 1.68 0 0 1-.307-.877h.762c.02.23.097.42.232.571.137.149.31.26.518.333.21.072.436.108.678.108.282 0 .535-.046.76-.137.223-.094.4-.222.532-.387a.917.917 0 0 0 .196-.583.715.715 0 0 0-.17-.494 1.244 1.244 0 0 0-.446-.31 4.68 4.68 0 0 0-.598-.208l-.75-.214c-.476-.137-.853-.333-1.13-.587-.278-.254-.417-.586-.417-.997 0-.34.092-.638.276-.892.187-.256.437-.455.75-.595a2.532 2.532 0 0 1 1.057-.215c.393 0 .742.07 1.047.212.306.138.548.329.726.57.18.243.276.518.286.825zM62.323 13V6.906h2.06c.477 0 .868.086 1.172.258.305.171.531.402.678.694.147.292.22.617.22.976s-.073.685-.22.979a1.637 1.637 0 0 1-.673.702c-.303.173-.692.26-1.166.26h-1.476v-.655h1.452c.327 0 .59-.057.789-.17.198-.113.342-.266.431-.458.091-.195.137-.414.137-.658s-.046-.462-.137-.655a.977.977 0 0 0-.434-.452c-.2-.111-.466-.167-.798-.167h-1.297V13zM72.784 9.953c0 .643-.116 1.198-.348 1.666-.232.468-.55.83-.955 1.084-.405.253-.867.38-1.387.38s-.982-.127-1.386-.38a2.615 2.615 0 0 1-.956-1.084c-.232-.468-.348-1.023-.348-1.666s.116-1.198.348-1.667c.232-.468.55-.829.956-1.083.404-.254.866-.38 1.386-.38.52 0 .982.126 1.387.38s.723.615.955 1.083c.232.469.348 1.024.348 1.667zm-.714 0c0-.528-.088-.973-.265-1.336a1.919 1.919 0 0 0-.71-.825c-.298-.186-.632-.28-1-.28s-.704.094-1.004.28a1.946 1.946 0 0 0-.71.825c-.175.363-.263.808-.263 1.336s.088.973.262 1.336c.177.363.414.638.711.824.3.187.634.28 1.003.28s.703-.093 1-.28c.3-.186.537-.46.711-.824.177-.363.265-.808.265-1.336zM78.858 6.906V13h-.714l-3.321-4.785h-.06V13h-.738V6.906h.714l3.333 4.797h.06V6.906zM81.073 6.906V13h-.738V6.906zM82.553 13V6.906h2.13c.425 0 .775.073 1.05.22.277.145.482.34.617.586.135.244.202.515.202.812 0 .262-.046.479-.14.65-.09.17-.212.305-.363.404-.149.1-.31.172-.485.22v.06c.187.012.374.077.563.196.188.12.346.29.473.512s.19.494.19.815c0 .306-.07.58-.208.825-.139.244-.358.437-.658.58-.3.143-.69.214-1.17.214zm.738-.655h1.464c.482 0 .824-.093 1.026-.28a.897.897 0 0 0 .307-.684c0-.206-.053-.397-.158-.571a1.141 1.141 0 0 0-.45-.423 1.41 1.41 0 0 0-.69-.16h-1.5zm0-2.761h1.369c.222 0 .422-.044.6-.131.181-.087.324-.21.43-.37a.976.976 0 0 0 .16-.559.927.927 0 0 0-.28-.681c-.186-.188-.482-.283-.887-.283h-1.392zM88.003 13V6.906h.738v5.44h2.833V13zM92.717 13V6.906h3.678v.654h-2.94v2.06h2.75v.654h-2.75v2.071h2.987V13zM100.082 13V6.906h3.678v.654h-2.94v2.06h2.75v.654h-2.75v2.071h2.988V13zM109.923 6.906V13h-.714l-3.321-4.785h-.06V13h-.738V6.906h.714l3.333 4.797h.06V6.906zM80.018 25.615c-2.82 0-5.053 2.115-5.053 5.053 0 2.82 2.233 5.052 5.053 5.052s5.052-2.115 5.052-5.052c0-3.055-2.232-5.053-5.052-5.053zm0 7.99c-1.528 0-2.82-1.292-2.82-3.055s1.292-3.055 2.82-3.055 2.82 1.175 2.82 3.055c0 1.763-1.293 3.055-2.82 3.055m-10.928-7.99c-2.82 0-5.052 2.115-5.052 5.053 0 2.82 2.232 5.052 5.052 5.052s5.053-2.115 5.053-5.052c0-3.055-2.233-5.053-5.053-5.053m0 7.99c-1.527 0-2.82-1.292-2.82-3.055s1.293-3.055 2.82-3.055 2.82 1.175 2.82 3.055c0 1.763-1.292 3.055-2.82 3.055m-13.042-6.462v2.115H61.1c-.117 1.175-.587 2.115-1.175 2.702-.705.705-1.88 1.528-3.877 1.528-3.173 0-5.523-2.468-5.523-5.64s2.468-5.64 5.523-5.64c1.645 0 2.937.705 3.877 1.527l1.528-1.527c-1.293-1.175-2.938-2.115-5.288-2.115-4.23 0-7.872 3.525-7.872 7.755s3.642 7.755 7.872 7.755c2.35 0 3.995-.705 5.405-2.233 1.41-1.41 1.88-3.407 1.88-4.935 0-.47 0-.94-.117-1.292zm53.344 1.645c-.47-1.175-1.645-3.173-4.23-3.173s-4.7 1.998-4.7 5.053c0 2.82 2.115 5.052 4.935 5.052 2.233 0 3.643-1.41 4.113-2.232l-1.645-1.175c-.588.822-1.293 1.41-2.468 1.41s-1.88-.47-2.467-1.528l6.697-2.82zm-6.815 1.645c0-1.88 1.528-2.938 2.585-2.938.823 0 1.645.47 1.88 1.058zm-5.522 4.817h2.232V20.563h-2.232zm-3.525-8.577c-.588-.588-1.528-1.175-2.703-1.175-2.467 0-4.817 2.232-4.817 5.052s2.232 4.935 4.817 4.935c1.175 0 2.115-.587 2.585-1.175h.118v.705c0 1.88-1.058 2.938-2.703 2.938-1.292 0-2.232-.94-2.467-1.763l-1.88.823c.587 1.292 1.997 2.937 4.465 2.937 2.585 0 4.7-1.527 4.7-5.17v-8.93H93.53zm-2.585 6.932c-1.527 0-2.82-1.292-2.82-3.055s1.293-3.055 2.82-3.055 2.703 1.293 2.703 3.055-1.176 3.055-2.703 3.055m28.67-13.042h-5.288V35.25h2.233v-5.522h3.055c2.467 0 4.817-1.763 4.817-4.583s-2.35-4.582-4.817-4.582zm.117 7.05h-3.172V22.56h3.172c1.645 0 2.585 1.41 2.585 2.468-.117 1.292-1.057 2.585-2.585 2.585m13.513-2.115c-1.645 0-3.29.705-3.878 2.232l1.998.823c.47-.823 1.175-1.058 1.997-1.058 1.175 0 2.233.705 2.35 1.88v.118c-.352-.235-1.292-.588-2.232-.588-2.115 0-4.23 1.175-4.23 3.29 0 1.998 1.762 3.29 3.642 3.29 1.528 0 2.233-.705 2.82-1.41h.118v1.175h2.115v-5.64c-.235-2.585-2.233-4.112-4.7-4.112zm-.235 8.107c-.705 0-1.763-.352-1.763-1.292 0-1.175 1.293-1.528 2.35-1.528.94 0 1.41.235 1.998.47-.235 1.41-1.41 2.35-2.585 2.35zm12.337-7.755-2.467 6.345h-.118l-2.585-6.345h-2.35l3.878 8.93-2.233 4.935h2.233l5.992-13.865zm-19.74 9.4h2.233V20.563h-2.233z" />
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
export default PlayStoreIconEsIcon;
