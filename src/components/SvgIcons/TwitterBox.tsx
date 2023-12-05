import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TwitterBoxIcon = WithIconWrapper(
  ({
    title = 'twitter-box-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 41 40"
      width="1em"
      height="1em"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 12.5A6.75 6.75 0 0 1 13 5.75h15.007a6.743 6.743 0 0 1 6.743 6.743v15.015a6.743 6.743 0 0 1-6.743 6.742H12.993a6.743 6.743 0 0 1-6.743-6.743zm21.757-8.25H13a8.25 8.25 0 0 0-8.25 8.25v15.007a8.243 8.243 0 0 0 8.243 8.243h15.014a8.243 8.243 0 0 0 8.243-8.242V12.493a8.243 8.243 0 0 0-8.243-8.243zm-14.43 7.978a.75.75 0 0 0-1.27-.082c-2.584 3.61-2.55 8.491.297 12.086l-.413.138a551.304 551.304 0 0 1-1.37.456l-.095.031-.01.003a.776.776 0 0 0-.312.175.746.746 0 0 0-.18.836c.025.06.057.116.096.166.692.949 1.504 2.038 2.687 2.875 1.21.857 2.765 1.421 4.91 1.421 3.69 0 6.654-1.325 8.687-3.629 1.98-2.244 3.018-5.349 3.061-8.892L31.541 15a.75.75 0 0 0-.624-1.166h-2.613a4.855 4.855 0 0 0-1.588-1.375c-.777-.415-1.7-.625-2.8-.625-1.66 0-3.084.6-4.104 1.642-.807.825-1.336 1.9-1.546 3.113-1.91-.761-3.677-2.478-4.689-4.36zm.113 13.222.465-.156a.75.75 0 0 0 .295-1.238c-2.783-2.814-3.238-6.84-1.537-10.047 1.383 2 3.503 3.738 5.826 4.303a.75.75 0 0 0 .927-.704c.042-1.28.494-2.344 1.218-3.084.72-.735 1.748-1.191 3.033-1.191.905 0 1.575.172 2.093.448.516.276.928.68 1.28 1.215a.75.75 0 0 0 .627.337h1.598l-1.217 1.825a.748.748 0 0 0-.131.435c-.002 3.358-.962 6.163-2.688 8.119-1.717 1.946-4.253 3.121-7.562 3.121-1.856 0-3.103-.48-4.043-1.145-.681-.482-1.223-1.075-1.73-1.72l.522-.176 1.025-.342z"
        clipRule="evenodd"
        style={{
          stroke: 'none',
        }}
      />
    </svg>
  ),
);
export default TwitterBoxIcon;
