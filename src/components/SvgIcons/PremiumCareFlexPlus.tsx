import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const PremiumCareFlexPlusIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 215 28"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M6.896 6.68C5 6.68 3.44 7.4 2.456 8.792L2.24 6.8H.248v19.32h2.208v-8.232c.984 1.368 2.472 2.208 4.368 2.208 3.624 0 6.096-2.976 6.096-6.768S10.52 6.68 6.896 6.68m-.384 11.448c-2.04 0-3.624-1.488-4.056-3.528v-2.52c.432-2.064 2.016-3.552 4.056-3.552 2.592 0 4.224 2.112 4.224 4.8 0 2.664-1.632 4.8-4.224 4.8M21.84 6.68c-3.12-.144-4.272 1.32-4.8 2.52l-.24-2.4h-2.016V20h2.256v-7.152c0-3.048 2.04-4.44 4.776-4.272zm13.154 6.648c0-3.912-2.256-6.624-5.928-6.624-3.864 0-6.12 2.928-6.12 6.72 0 3.72 2.376 6.672 6.144 6.696 3.696.024 5.232-2.424 5.472-4.056h-1.896c-.432 1.344-1.68 2.304-3.672 2.28-1.824-.024-3.84-1.44-3.936-4.224h9.888c.024-.288.048-.552.048-.792m-5.928-4.8c2.28 0 3.624 1.584 3.864 3.936h-7.824c.288-2.304 1.632-3.936 3.96-3.936M52.167 6.68c-1.92 0-3.792 1.056-4.704 2.544-.792-1.512-2.04-2.544-3.912-2.544-1.656 0-3.312.792-4.176 2.016L39.279 6.8h-2.016V20h2.232v-8.304c0-1.848 1.68-3.072 3.504-3.072 1.776 0 2.856 1.152 2.856 2.928V20h2.208v-8.304c0-1.848 1.704-3.072 3.528-3.072 1.8 0 2.832 1.152 2.832 2.928V20h2.232v-8.688c0-2.856-1.728-4.632-4.488-4.632m8.489-1.968c.768 0 1.368-.6 1.368-1.368 0-.744-.6-1.368-1.368-1.368-.72 0-1.344.624-1.344 1.368 0 .768.624 1.368 1.344 1.368M59.576 20h2.208V6.8h-2.208zM74.014 6.8v8.136c0 1.92-1.872 3.216-3.84 3.216-1.92 0-3.192-1.296-3.192-3.216V6.8h-2.256v8.4c0 2.88 2.016 4.944 4.92 4.944 1.704 0 3.48-.84 4.416-2.136L74.278 20h1.968V6.8h-2.232m19.919-.12c-1.92 0-3.792 1.056-4.704 2.544-.792-1.512-2.04-2.544-3.912-2.544-1.656 0-3.312.792-4.176 2.016L81.045 6.8h-2.016V20h2.232v-8.304c0-1.848 1.68-3.072 3.504-3.072 1.776 0 2.856 1.152 2.856 2.928V20h2.208v-8.304c0-1.848 1.704-3.072 3.528-3.072 1.8 0 2.832 1.152 2.832 2.928V20h2.232v-8.688c0-2.856-1.728-4.632-4.488-4.632m12.641 13.464c3.528 0 5.376-2.304 5.832-4.656h-1.968c-.432 1.536-1.8 2.76-3.672 2.76-2.568 0-4.2-1.92-4.2-4.896 0-2.952 1.608-4.824 4.176-4.824 1.92 0 3.432 1.176 3.696 2.688h2.016c-.288-2.352-2.352-4.536-5.88-4.536-3.696 0-6.168 2.808-6.168 6.672s2.472 6.792 6.168 6.792m11.608-.024c1.968 0 3.744-.888 4.44-1.992.264 1.152 1.056 1.656 2.136 1.824.24.024.504.048.744.048v-1.728c-.672.024-.984-.432-.984-1.8 0-.336-.024-2.856-.024-5.04 0-3.048-1.968-4.8-5.112-4.8-3.456 0-5.04 2.208-5.28 4.464h1.992c.192-1.584 1.416-2.664 3.192-2.664 1.944 0 3.168.936 3.168 2.952v.432l-3.216.216c-3.792.264-5.424 1.944-5.424 4.248 0 2.304 1.848 3.84 4.368 3.84m.312-1.776c-1.272 0-2.616-.768-2.616-2.112 0-1.272.84-2.304 3.552-2.52l3.024-.24v2.016c-.168 1.512-2.016 2.856-3.96 2.856M134.668 6.68c-3.12-.144-4.272 1.32-4.8 2.52l-.24-2.4h-2.016V20h2.256v-7.152c0-3.048 2.04-4.44 4.776-4.272zm13.154 6.648c0-3.912-2.256-6.624-5.928-6.624-3.864 0-6.12 2.928-6.12 6.72 0 3.72 2.376 6.672 6.144 6.696 3.696.024 5.232-2.424 5.472-4.056h-1.896c-.432 1.344-1.68 2.304-3.672 2.28-1.824-.024-3.84-1.44-3.936-4.224h9.888c.024-.288.048-.552.048-.792m-5.928-4.8c2.28 0 3.624 1.584 3.864 3.936h-7.824c.288-2.304 1.632-3.936 3.96-3.936M168.815 20h-1.424v-7.616h-1.2v-1.12h1.2v-.784c0-1.312.688-2.352 1.968-2.512.624-.08 1.376.048 1.776.32l-.016 1.12c-.336-.176-1.264-.48-1.808-.096-.432.32-.496.816-.496 1.344v.608h1.888v1.12h-1.888zm5.616 0h-1.392V8h1.392zm9.971-4.448c0 .16-.016.336-.032.528h-6.592c.064 1.856 1.408 2.8 2.624 2.816 1.328.016 2.16-.624 2.448-1.52h1.264c-.16 1.088-1.184 2.72-3.648 2.704-2.512-.016-4.096-1.984-4.096-4.464 0-2.528 1.504-4.48 4.08-4.48 2.448 0 3.952 1.808 3.952 4.416m-3.952-3.2c-1.552 0-2.448 1.088-2.64 2.624h5.216c-.16-1.568-1.056-2.624-2.576-2.624m12.907-1.152-3.136 4.432L193.357 20h-1.76l-2.288-3.296L187.053 20h-1.776l3.12-4.368-3.12-4.432h1.76l2.272 3.36 2.288-3.36zm6.454 8.448v-3.84h-3.6v-.96h3.6v-3.84h.944v3.84h3.6v.96h-3.6v3.84z"
      />
      <path
        stroke="currentColor"
        d="M211 .5h-50a3.5 3.5 0 0 0-3.5 3.5v20a3.5 3.5 0 0 0 3.5 3.5h50a3.5 3.5 0 0 0 3.5-3.5V4A3.5 3.5 0 0 0 211 .5Z"
      />
    </svg>
  ),
);
export default PremiumCareFlexPlusIcon;
