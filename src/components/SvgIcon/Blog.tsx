import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBlog = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 3h9.004A4.496 4.496 0 0 1 21 7.496v9.009A4.496 4.496 0 0 1 16.504 21H7.496A4.496 4.496 0 0 1 3 16.504V7.5A4.5 4.5 0 0 1 7.5 3v0Z"
      clipRule="evenodd"
      style={{
        fill: 'none',
      }}
    />
    <path
      fill="currentColor"
      d="M5.589 9.705h1.716c.34 0 .593.015.76.044a1.09 1.09 0 0 1 .778.536.964.964 0 0 1 .132.501.994.994 0 0 1-.164.554.999.999 0 0 1-.44.378c.262.076.464.206.604.39.14.183.211.399.211.647 0 .195-.046.386-.137.571-.09.184-.214.331-.373.443a1.23 1.23 0 0 1-.58.202c-.144.015-.493.025-1.046.029H5.59V9.705Zm.867.715v.993h.568c.338 0 .548-.005.63-.015a.57.57 0 0 0 .349-.152.456.456 0 0 0 .129-.337.462.462 0 0 0-.112-.322.487.487 0 0 0-.325-.152 10.12 10.12 0 0 0-.741-.015h-.498Zm0 1.708v1.148h.802c.313 0 .511-.008.595-.026a.534.534 0 0 0 .314-.17.53.53 0 0 0 .123-.366.56.56 0 0 0-.094-.328.53.53 0 0 0-.272-.196c-.118-.042-.374-.062-.768-.062h-.7Z"
      style={{
        stroke: '&quot',
      }}
    />
    <path
      fill="currentColor"
      d="M10.036 14V9.705h.823V14h-.823ZM11.635 12.4c0-.273.068-.538.202-.794a1.39 1.39 0 0 1 .572-.585c.248-.135.524-.203.829-.203.47 0 .856.154 1.157.46.3.305.451.69.451 1.157 0 .471-.152.862-.457 1.172-.303.309-.684.463-1.145.463-.286 0-.558-.064-.818-.193a1.33 1.33 0 0 1-.589-.566c-.134-.25-.202-.553-.202-.91Zm.844.044c0 .309.073.545.22.71a.698.698 0 0 0 .542.245.69.69 0 0 0 .539-.246c.146-.164.22-.402.22-.715 0-.304-.074-.539-.22-.703a.69.69 0 0 0-.54-.246.698.698 0 0 0-.541.246c-.147.164-.22.4-.22.71ZM15.537 14.205l.94.114c.017.11.053.185.11.226.077.059.2.088.368.088.215 0 .376-.032.484-.097a.398.398 0 0 0 .164-.208c.025-.068.038-.194.038-.378v-.454c-.246.336-.557.504-.932.504-.418 0-.749-.177-.993-.53-.191-.28-.287-.627-.287-1.043 0-.522.125-.92.375-1.196a1.22 1.22 0 0 1 .937-.413c.385 0 .703.17.953.507v-.436h.77v2.792c0 .367-.03.641-.09.823a1.02 1.02 0 0 1-.255.428c-.11.103-.256.184-.44.243a2.29 2.29 0 0 1-.691.088c-.528 0-.902-.091-1.122-.273a.846.846 0 0 1-.332-.685l.003-.1Zm.736-1.825c0 .33.063.572.19.726a.599.599 0 0 0 .475.229.656.656 0 0 0 .51-.234c.138-.159.208-.392.208-.7 0-.323-.067-.562-.2-.718a.633.633 0 0 0-.503-.235.61.61 0 0 0-.49.232c-.127.152-.19.385-.19.7Z"
      style={{
        fill: 'none',
      }}
    />
  </svg>
);
export default SvgBlog;
