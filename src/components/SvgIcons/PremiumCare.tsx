import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPremiumCare = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 89 15"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.44 3.23c2.113 0 3.513 1.667 3.513 3.879 0 2.212-1.441 3.948-3.555 3.948-1.106 0-1.974-.49-2.548-1.288v4.802H1.562V3.3h1.162l.125 1.162C3.425 3.65 4.334 3.23 5.44 3.23M5.215 9.91c1.513 0 2.465-1.246 2.465-2.8 0-1.568-.952-2.8-2.464-2.8-1.19 0-2.114.868-2.367 2.072v1.47c.252 1.19 1.176 2.058 2.366 2.058m8.942-6.678-.014 1.106c-1.596-.098-2.786.714-2.786 2.492V11h-1.316V3.3h1.176l.14 1.4c.308-.7.98-1.554 2.8-1.47m7.673 3.878c0 .14-.014.294-.028.462h-5.768c.056 1.624 1.232 2.45 2.296 2.464 1.162.014 1.89-.546 2.142-1.33h1.106c-.14.952-1.036 2.38-3.192 2.366-2.198-.014-3.584-1.736-3.584-3.906 0-2.212 1.316-3.92 3.57-3.92 2.142 0 3.458 1.582 3.458 3.864m-3.458-2.8c-1.358 0-2.142.952-2.31 2.296h4.564c-.14-1.372-.924-2.296-2.254-2.296M31.848 3.23c1.61 0 2.618 1.036 2.618 2.702V11h-1.302V6.073c0-1.036-.602-1.708-1.652-1.708-1.064 0-2.058.714-2.058 1.792V11h-1.288V6.073c0-1.036-.63-1.708-1.666-1.708-1.064 0-2.044.714-2.044 1.792V11h-1.302V3.3h1.176l.056 1.106c.504-.714 1.47-1.176 2.436-1.176 1.092 0 1.82.602 2.282 1.484.532-.868 1.624-1.484 2.744-1.484M36.8 2.083a.795.795 0 0 1-.784-.798c0-.434.364-.798.784-.798.448 0 .798.364.798.798 0 .448-.35.798-.798.798M36.17 11V3.3h1.288V11H36.17m8.422-7.7h1.302V11h-1.148l-.126-1.162c-.546.756-1.582 1.246-2.576 1.246-1.694 0-2.87-1.204-2.87-2.884V3.3h1.316v4.746c0 1.12.742 1.876 1.862 1.876 1.148 0 2.24-.756 2.24-1.876V3.3m11.619-.07c1.61 0 2.618 1.036 2.618 2.702V11h-1.302V6.073c0-1.036-.602-1.708-1.652-1.708-1.064 0-2.058.714-2.058 1.792V11h-1.288V6.073c0-1.036-.63-1.708-1.666-1.708-1.064 0-2.044.714-2.044 1.792V11h-1.302V3.3h1.176l.056 1.106c.504-.714 1.47-1.176 2.436-1.176 1.092 0 1.82.602 2.282 1.484.532-.868 1.624-1.484 2.744-1.484m7.374 7.854c-2.156 0-3.598-1.708-3.598-3.962 0-2.254 1.442-3.892 3.598-3.892 2.058 0 3.262 1.274 3.43 2.646h-1.176c-.154-.882-1.036-1.568-2.156-1.568-1.498 0-2.436 1.092-2.436 2.814 0 1.736.952 2.856 2.45 2.856 1.092 0 1.89-.714 2.142-1.61h1.148c-.266 1.372-1.344 2.716-3.402 2.716m6.771-.014c-1.47 0-2.548-.896-2.548-2.24 0-1.344.952-2.324 3.164-2.478l1.876-.126v-.252c0-1.176-.714-1.722-1.848-1.722-1.036 0-1.75.63-1.862 1.554h-1.162c.14-1.316 1.064-2.604 3.08-2.604 1.834 0 2.982 1.022 2.982 2.8 0 1.274.014 2.744.014 2.94 0 .798.182 1.064.574 1.05V11c-.14 0-.294-.014-.434-.028-.63-.098-1.092-.392-1.246-1.064-.406.644-1.442 1.162-2.59 1.162m.182-1.036c1.134 0 2.212-.784 2.31-1.666V7.193l-1.764.14c-1.582.126-2.072.728-2.072 1.47 0 .784.784 1.232 1.526 1.232m9.435-6.804-.014 1.106c-1.596-.098-2.786.714-2.786 2.492V11h-1.316V3.3h1.176l.14 1.4c.308-.7.98-1.554 2.8-1.47m7.673 3.878c0 .14-.014.294-.028.462H81.85c.056 1.624 1.232 2.45 2.296 2.464 1.162.014 1.89-.546 2.142-1.33h1.106c-.14.952-1.036 2.38-3.192 2.366-2.198-.014-3.584-1.736-3.584-3.906 0-2.212 1.316-3.92 3.57-3.92 2.142 0 3.458 1.582 3.458 3.864m-3.458-2.8c-1.358 0-2.142.952-2.31 2.296h4.564c-.14-1.372-.924-2.296-2.254-2.296"
    />
  </svg>
);
export default SvgPremiumCare;