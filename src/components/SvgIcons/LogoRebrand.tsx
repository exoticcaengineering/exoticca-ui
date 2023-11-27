import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SvgLogoRebrandIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2192 384"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M1157.39 21.31c0 20.55 16.67 37.22 37.22 37.22 20.55 0 37.24-16.67 37.24-37.22h-74.46M529.68 228.16l105.89 149.77h-73.52l-70.21-104.8-70.23 104.8h-73.52l105.34-150.32L348.09 76.19h72.98l70.77 106.43 70.77-106.43h72.96zM1225.62 76.18h-61.99v301.74h61.99V76.18ZM1256.24 225.96c0-88.87 56.51-152.51 142.64-152.51 92.16 0 133.85 58.7 139.33 110.26h-55.95c-4.94-32.36-37.3-58.7-78.46-58.7-54.3 0-86.12 40.05-86.12 100.94S1350.04 328 1404.36 328c40.04 0 70.23-27.98 77.9-59.8h55.4c-8.22 52.11-46.08 113.01-138.79 113.01-86.14 0-142.64-65.83-142.64-155.26M1557.25 225.96c0-88.87 56.51-152.51 142.64-152.51 92.16 0 133.85 58.7 139.35 110.26h-55.96c-4.94-32.36-37.3-58.7-78.44-58.7-54.32 0-86.14 40.05-86.14 100.94S1651.06 328 1705.38 328c40.04 0 70.23-27.98 77.9-59.8h55.4c-8.22 52.11-46.08 113.01-138.79 113.01-86.14 0-142.64-65.83-142.64-155.26" />
      <path d="M629.86 226.09c0-87.62 62.12-156.95 151.4-156.95s151.4 69.34 151.4 156.95c0 87.61-62.11 156.95-151.4 156.95s-151.4-69.88-151.4-156.95m240.14 0c0-56.57-35.49-100.94-88.74-100.94-53.25 0-88.74 44.37-88.74 100.94s34.95 100.38 88.74 100.38c53.79 0 88.74-44.37 88.74-100.38M1042.19 0h-59.24v59.37c0 5.35-4.35 9.68-9.68 9.68h-39.15v50.2h49.33v184.08c-.1 42.74 34.44 77.47 77.16 77.64l59.83.25v-54.48h-59.09c-10.69 0-19.37-8.66-19.37-19.37V119.26h63.59v-50.2h-63.37V0zM361.47 225.96C361.47 134.34 309.34 74 224.86 74 140.38 74 93.1 127.18 83.83 201.28h-4.04c-18.61 0-33.75-15.15-33.75-33.75H0c0 43.99 35.8 79.78 79.79 79.78h3.51c7.97 76.63 61.27 133.35 141.56 133.35 83.95.56 121.79-52.11 128.92-95.46h-51.57c-11.53 29.63-40.6 46.64-77.9 46.64-39.49-.54-79-30.17-82.3-85.59h218.35c1.1-7.13 1.1-14.26 1.1-20.29m-218.35-24.69c7.13-46.08 33.47-77.9 81.19-77.9s72.96 30.72 78.44 77.9H143.1zM2191.65 154.95h-46.05c0 18.61-15.14 33.75-33.75 33.75h-2.32v-4.97c0-72.96-46.08-110.82-119.04-110.82-83.39 0-119.04 51.58-123.44 105.34h53.77c3.84-36.76 31.26-55.96 68.02-55.96 38.95 0 63.64 18.66 63.64 60.34v5.96l-69.12 7.08c-82.2 7.51-123.98 42.92-123.98 96.68 0 53.76 42.24 88.89 99.84 88.89 42.79 0 82.3-18.1 98.75-41.7 8.78 28.53 31.82 35.11 56.51 37.86 6.59.54 12.62.54 18.66.54v-47.73c-13.72.54-23.04-8.78-23.04-39.49 0-9.03-.21-30.65-.36-55.96h2.12c44.01 0 79.79-35.79 79.79-79.79m-139.17 125.88c-8.23 27.98-42.79 52.11-81.19 52.11-26.33 0-51.57-15.35-51.57-42.79 0-25.77 19.19-43.25 72.96-49.92l59.8-5.48z" />
    </svg>
  ),
);
export default SvgLogoRebrandIcon;
