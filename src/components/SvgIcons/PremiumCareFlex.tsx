import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPremiumCareFlex = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 203 28"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M7.396 6.68c-1.896 0-3.456.72-4.44 2.112L2.74 6.8H.748v19.32h2.208v-8.232c.984 1.368 2.472 2.208 4.368 2.208 3.624 0 6.096-2.976 6.096-6.768S11.02 6.68 7.396 6.68m-.384 11.448c-2.04 0-3.624-1.488-4.056-3.528v-2.52c.432-2.064 2.016-3.552 4.056-3.552 2.592 0 4.224 2.112 4.224 4.8 0 2.664-1.632 4.8-4.224 4.8M22.34 6.68c-3.12-.144-4.272 1.32-4.8 2.52l-.24-2.4h-2.016V20h2.256v-7.152c0-3.048 2.04-4.44 4.776-4.272l.024-1.896m13.154 6.648c0-3.912-2.256-6.624-5.928-6.624-3.864 0-6.12 2.928-6.12 6.72 0 3.72 2.376 6.672 6.144 6.696 3.696.024 5.232-2.424 5.472-4.056h-1.896c-.432 1.344-1.68 2.304-3.672 2.28-1.824-.024-3.84-1.44-3.936-4.224h9.888c.024-.288.048-.552.048-.792m-5.928-4.8c2.28 0 3.624 1.584 3.864 3.936h-7.824c.288-2.304 1.632-3.936 3.96-3.936M52.667 6.68c-1.92 0-3.792 1.056-4.704 2.544-.792-1.512-2.04-2.544-3.912-2.544-1.656 0-3.312.792-4.176 2.016L39.78 6.8h-2.016V20h2.232v-8.304c0-1.848 1.68-3.072 3.504-3.072 1.776 0 2.856 1.152 2.856 2.928V20h2.208v-8.304c0-1.848 1.704-3.072 3.528-3.072 1.8 0 2.832 1.152 2.832 2.928V20h2.232v-8.688c0-2.856-1.728-4.632-4.488-4.632m8.489-1.968c.768 0 1.368-.6 1.368-1.368 0-.744-.6-1.368-1.368-1.368-.72 0-1.344.624-1.344 1.368 0 .768.624 1.368 1.344 1.368M60.076 20h2.208V6.8h-2.208zM74.514 6.8v8.136c0 1.92-1.872 3.216-3.84 3.216-1.92 0-3.192-1.296-3.192-3.216V6.8h-2.256v8.4c0 2.88 2.016 4.944 4.92 4.944 1.704 0 3.48-.84 4.416-2.136L74.778 20h1.968V6.8h-2.232m19.919-.12c-1.92 0-3.792 1.056-4.704 2.544-.792-1.512-2.04-2.544-3.912-2.544-1.656 0-3.312.792-4.176 2.016L81.545 6.8h-2.016V20h2.232v-8.304c0-1.848 1.68-3.072 3.504-3.072 1.776 0 2.856 1.152 2.856 2.928V20h2.208v-8.304c0-1.848 1.704-3.072 3.528-3.072 1.8 0 2.832 1.152 2.832 2.928V20h2.232v-8.688c0-2.856-1.728-4.632-4.488-4.632m12.641 13.464c3.528 0 5.376-2.304 5.832-4.656h-1.968c-.432 1.536-1.8 2.76-3.672 2.76-2.568 0-4.2-1.92-4.2-4.896 0-2.952 1.608-4.824 4.176-4.824 1.92 0 3.432 1.176 3.696 2.688h2.016c-.288-2.352-2.352-4.536-5.88-4.536-3.696 0-6.168 2.808-6.168 6.672s2.472 6.792 6.168 6.792m11.608-.024c1.968 0 3.744-.888 4.44-1.992.264 1.152 1.056 1.656 2.136 1.824.24.024.504.048.744.048v-1.728c-.672.024-.984-.432-.984-1.8 0-.336-.024-2.856-.024-5.04 0-3.048-1.968-4.8-5.112-4.8-3.456 0-5.04 2.208-5.28 4.464h1.992c.192-1.584 1.416-2.664 3.192-2.664 1.944 0 3.168.936 3.168 2.952v.432l-3.216.216c-3.792.264-5.424 1.944-5.424 4.248 0 2.304 1.848 3.84 4.368 3.84m.312-1.776c-1.272 0-2.616-.768-2.616-2.112 0-1.272.84-2.304 3.552-2.52l3.024-.24v2.016c-.168 1.512-2.016 2.856-3.96 2.856M135.168 6.68c-3.12-.144-4.272 1.32-4.8 2.52l-.24-2.4h-2.016V20h2.256v-7.152c0-3.048 2.04-4.44 4.776-4.272zm13.154 6.648c0-3.912-2.256-6.624-5.928-6.624-3.864 0-6.12 2.928-6.12 6.72 0 3.72 2.376 6.672 6.144 6.696 3.696.024 5.232-2.424 5.472-4.056h-1.896c-.432 1.344-1.68 2.304-3.672 2.28-1.824-.024-3.84-1.44-3.936-4.224h9.888c.024-.288.048-.552.048-.792m-5.928-4.8c2.28 0 3.624 1.584 3.864 3.936h-7.824c.288-2.304 1.632-3.936 3.96-3.936M169.19 20v-7.616h1.888v-1.12h-1.888v-.608c0-.528.064-1.024.496-1.344.544-.384 1.472-.08 1.808.096l.016-1.12c-.4-.272-1.152-.4-1.776-.32-1.28.16-1.968 1.2-1.968 2.512v.784h-1.2v1.12h1.2V20zm5.616 0V8h-1.392v12zm9.971-4.448c0-2.608-1.504-4.416-3.952-4.416-2.576 0-4.08 1.952-4.08 4.48 0 2.48 1.584 4.448 4.096 4.464 2.464.016 3.488-1.616 3.648-2.704h-1.264c-.288.896-1.12 1.536-2.448 1.52-1.216-.016-2.56-.96-2.624-2.816h6.592c.016-.192.032-.368.032-.528m-3.952-3.2c1.52 0 2.416 1.056 2.576 2.624h-5.216c.192-1.536 1.088-2.624 2.64-2.624m12.907-1.152h-1.76l-2.288 3.36-2.272-3.36h-1.76l3.12 4.432-3.12 4.368h1.776l2.256-3.296L191.972 20h1.76l-3.136-4.368z"
    />
    <path
      stroke="currentColor"
      d="M198.5.5h-37A3.5 3.5 0 0 0 158 4v20a3.5 3.5 0 0 0 3.5 3.5h37A3.5 3.5 0 0 0 202 24V4a3.5 3.5 0 0 0-3.5-3.5Z"
    />
  </svg>
);
export default WithIconWrapper(SvgPremiumCareFlex);
