import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAppStoreIconFr = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 126.515 40"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M116.986 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013A13.215 13.215 0 0 0 5.517.19a6.665 6.665 0 0 0-1.9.627 6.438 6.438 0 0 0-1.62 1.18A6.258 6.258 0 0 0 .82 3.617a6.601 6.601 0 0 0-.625 1.903 12.993 12.993 0 0 0-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921a12.992 12.992 0 0 0 .18 2.002 6.588 6.588 0 0 0 .624 1.905A6.208 6.208 0 0 0 1.998 38a6.274 6.274 0 0 0 1.618 1.179 6.7 6.7 0 0 0 1.901.63 13.455 13.455 0 0 0 2.004.177c.31.007.613.011.919.011.366.002.728.002 1.095.002h107.451c.36 0 .725 0 1.084-.002.305 0 .617-.004.922-.01a13.279 13.279 0 0 0 2-.178 6.804 6.804 0 0 0 1.908-.63A6.277 6.277 0 0 0 124.517 38a6.395 6.395 0 0 0 1.182-1.614 6.604 6.604 0 0 0 .62-1.905 13.506 13.506 0 0 0 .185-2.002c.004-.31.004-.61.004-.921.007-.364.007-.725.007-1.094V9.536c0-.366 0-.73-.007-1.092 0-.306 0-.614-.004-.92a13.507 13.507 0 0 0-.186-2.003 6.618 6.618 0 0 0-.619-1.903 6.466 6.466 0 0 0-2.799-2.8 6.768 6.768 0 0 0-1.908-.627 13.044 13.044 0 0 0-2-.176c-.305-.005-.617-.011-.922-.013C117.71 0 117.346 0 116.986 0z" />
    <path d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.687 12.687 0 0 1-1.87-.164 5.884 5.884 0 0 1-1.656-.548 5.406 5.406 0 0 1-1.397-1.016 5.32 5.32 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.414 12.414 0 0 1-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 0 1 .165-1.872 5.756 5.756 0 0 1 .544-1.662 5.373 5.373 0 0 1 1.015-1.398 5.565 5.565 0 0 1 1.402-1.023 5.823 5.823 0 0 1 1.653-.544A12.586 12.586 0 0 1 7.543.887l.902-.012h109.62l.913.013a12.385 12.385 0 0 1 1.859.162 5.938 5.938 0 0 1 1.67.548 5.594 5.594 0 0 1 2.416 2.42 5.763 5.763 0 0 1 .535 1.649 12.995 12.995 0 0 1 .174 1.887c.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93a12.731 12.731 0 0 1-.171 1.853 5.739 5.739 0 0 1-.54 1.67 5.48 5.48 0 0 1-1.016 1.386 5.413 5.413 0 0 1-1.4 1.022 5.862 5.862 0 0 1-1.667.55 12.542 12.542 0 0 1-1.87.163c-.292.007-.599.011-.897.011l-1.084.002z" />
    <path
      fill="#fff"
      d="M24.997 19.89a5.146 5.146 0 0 1 2.45-4.318 5.268 5.268 0 0 0-4.15-2.244c-1.746-.183-3.44 1.045-4.33 1.045-.906 0-2.276-1.027-3.752-.997a5.527 5.527 0 0 0-4.65 2.837c-2.012 3.482-.512 8.6 1.415 11.414.963 1.378 2.09 2.918 3.564 2.863 1.442-.06 1.981-.92 3.722-.92 1.725 0 2.23.92 3.734.886 1.548-.026 2.523-1.385 3.453-2.776a11.4 11.4 0 0 0 1.58-3.216 4.973 4.973 0 0 1-3.036-4.575M22.156 11.477a5.067 5.067 0 0 0 1.16-3.63 5.155 5.155 0 0 0-3.336 1.726 4.821 4.821 0 0 0-1.19 3.495 4.263 4.263 0 0 0 3.366-1.591zM35.622 14.702V9.578h-1.877v-.843h4.676v.843h-1.873v5.124zM42.731 13.486a1.828 1.828 0 0 1-1.951 1.303 2.045 2.045 0 0 1-2.08-2.325 2.077 2.077 0 0 1 2.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.08 1.08 0 0 0 1.07-.546zm-3.126-1.451h2.274a1.086 1.086 0 0 0-1.108-1.167 1.152 1.152 0 0 0-1.166 1.167zm.637-2.59 1.038-1.422h1.042L41.16 9.446zM44.02 8.44h.888v6.262h-.889zM50.174 13.486a1.828 1.828 0 0 1-1.95 1.303 2.045 2.045 0 0 1-2.08-2.325 2.077 2.077 0 0 1 2.075-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.08 1.08 0 0 0 1.07-.546zm-3.126-1.451h2.275a1.086 1.086 0 0 0-1.109-1.167 1.152 1.152 0 0 0-1.166 1.167zm.637-2.59 1.038-1.422h1.042l-1.162 1.423zM54.37 11.67a1.005 1.005 0 0 0-1.064-.764c-.744 0-1.199.57-1.199 1.53 0 .976.459 1.559 1.2 1.559a.979.979 0 0 0 1.063-.74h.864a1.762 1.762 0 0 1-1.923 1.534 2.068 2.068 0 0 1-2.113-2.353 2.053 2.053 0 0 1 2.108-2.324 1.777 1.777 0 0 1 1.928 1.558zM56.414 8.44h.88v2.482h.07a1.386 1.386 0 0 1 1.374-.806 1.483 1.483 0 0 1 1.55 1.678v2.908h-.89v-2.688c0-.72-.334-1.084-.962-1.084a1.052 1.052 0 0 0-1.134 1.142v2.63h-.888zM61.406 13.428c0-.81.603-1.278 1.675-1.344l1.22-.07v-.389c0-.476-.315-.744-.923-.744-.496 0-.84.182-.938.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.348zm2.894-.385v-.376l-1.1.07c-.62.042-.9.253-.9.65 0 .405.35.64.834.64a1.062 1.062 0 0 0 1.166-.984zM66.577 10.199h.855v.69h.067a1.22 1.22 0 0 1 1.215-.765 1.868 1.868 0 0 1 .397.037v.877a2.434 2.434 0 0 0-.496-.054 1.055 1.055 0 0 0-1.15 1.059v2.659h-.888zM69.928 15.152h.91c.075.327.45.538 1.05.538.74 0 1.179-.352 1.179-.947v-.864H73a1.514 1.514 0 0 1-1.39.756c-1.15 0-1.86-.888-1.86-2.237 0-1.373.718-2.274 1.869-2.274a1.56 1.56 0 0 1 1.414.794h.07v-.72h.852v4.54c0 1.03-.807 1.684-2.08 1.684-1.125 0-1.853-.505-1.948-1.27zm3.156-2.758c0-.897-.464-1.472-1.221-1.472-.765 0-1.195.575-1.195 1.472 0 .898.43 1.472 1.195 1.472.762 0 1.22-.57 1.22-1.472zM79.18 13.486a1.828 1.828 0 0 1-1.952 1.303 2.045 2.045 0 0 1-2.08-2.325 2.077 2.077 0 0 1 2.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.08 1.08 0 0 0 1.07-.546zm-3.127-1.451h2.275a1.086 1.086 0 0 0-1.109-1.167 1.152 1.152 0 0 0-1.166 1.167zM80.426 10.199h.856v.69h.066a1.22 1.22 0 0 1 1.216-.765 1.868 1.868 0 0 1 .396.037v.877a2.434 2.434 0 0 0-.496-.054 1.055 1.055 0 0 0-1.149 1.059v2.659h-.889zM86.163 12.448c0-1.423.731-2.324 1.869-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.441h.889v6.26h-.852v-.71h-.07a1.563 1.563 0 0 1-1.414.785c-1.146 0-1.87-.901-1.87-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.749 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.579-1.203 1.526zM91.569 13.428c0-.81.603-1.278 1.675-1.344l1.22-.07v-.389c0-.476-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.348zm2.894-.385v-.376l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.062 1.062 0 0 0 1.166-.984zM96.74 10.199h.855v.715h.067a1.348 1.348 0 0 1 1.343-.802 1.465 1.465 0 0 1 1.559 1.675v2.915h-.889V12.01c0-.724-.314-1.084-.971-1.084a1.033 1.033 0 0 0-1.076 1.141v2.635h-.888zM103.584 10.112c1.013 0 1.675.471 1.762 1.265h-.852c-.082-.33-.406-.542-.91-.542-.496 0-.873.236-.873.587 0 .27.228.439.716.55l.748.174c.857.199 1.258.567 1.258 1.229 0 .847-.79 1.414-1.865 1.414-1.071 0-1.77-.484-1.849-1.282h.89a.914.914 0 0 0 .98.562c.553 0 .947-.248.947-.608 0-.269-.211-.442-.662-.55l-.786-.182c-.856-.203-1.253-.587-1.253-1.257 0-.798.732-1.36 1.75-1.36zM35.192 18.078h1.86v12.418h-1.86zM39.292 22.622l1.016-4.544h1.806l-1.23 4.544zM49.14 27.14h-4.733l-1.136 3.356h-2.005l4.483-12.418h2.083l4.483 12.418h-2.039zm-4.243-1.55h3.752l-1.85-5.446h-.05zM61.997 25.97c0 2.813-1.506 4.62-3.778 4.62a3.07 3.07 0 0 1-2.849-1.583h-.043v4.484H53.47V21.442h1.799v1.506h.034a3.212 3.212 0 0 1 2.883-1.6c2.297 0 3.812 1.816 3.812 4.622zm-1.91 0c0-1.833-.947-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.446 0 2.393-1.197 2.393-3.046M71.962 25.97c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.849-1.583h-.043v4.484h-1.858V21.442h1.799v1.506h.034a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.812 1.816 3.812 4.622zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zM78.548 27.036c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.692-.808 2.692-1.919 0-.964-.68-1.54-2.289-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614H84.1c-.112-1.239-1.137-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.794 3.778-2.754 0-4.613-1.42-4.733-3.667zM90.185 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137a5.808 5.808 0 0 0 .611-.043v1.463a5.104 5.104 0 0 1-1.032.086c-1.833 0-2.548-.689-2.548-2.445v-5.189H87v-1.472h1.317V19.3zM92.903 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638m6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.106 2.4 3.106s2.401-1.144 2.401-3.106M103.024 21.442h1.772v1.541h.043a2.16 2.16 0 0 1 2.178-1.635 2.866 2.866 0 0 1 .637.069v1.738a2.598 2.598 0 0 0-.835-.112 1.873 1.873 0 0 0-1.937 2.083v5.37h-1.858zM116.221 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 0 0 2.436 2.564 2.048 2.048 0 0 0 2.09-1.273zm-6.282-2.702h4.526a2.177 2.177 0 0 0-2.22-2.298 2.292 2.292 0 0 0-2.306 2.298"
    />
  </svg>
);
export default SvgAppStoreIconFr;
