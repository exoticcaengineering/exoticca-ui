import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SslEsIcon = WithIconWrapper(
  ({
    title = 'ssl-es-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 25 32"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="#eae9e5"
        d="M3.235 26.607V25.46h.257c.601 0 .835-.368.835-.74a.736.736 0 0 0-.241-.566c-.178-.154-.399-.186-.664-.186h-.479v2.638h.293zm.241-1.424h-.241v-.937h.218c.19 0 .581.04.581.459 0 .305-.21.479-.558.479zm1.816 1.471a.692.692 0 0 0 .562-.277v.229h.285v-1.641h-.285v.233a.678.678 0 0 0-.562-.273c-.419 0-.799.293-.799.858 0 .577.384.87.799.87zm.031-.253c-.34 0-.538-.265-.538-.617 0-.399.257-.605.538-.605.253 0 .546.186.546.609 0 .324-.198.613-.546.613zm2.081 1.115c.308 0 .534-.138.657-.305.158-.214.158-.467.158-.645v-1.602h-.285v.233a.683.683 0 0 0-.562-.273.814.814 0 0 0-.562.221c-.119.119-.237.316-.237.637 0 .332.127.538.237.649.127.127.32.221.562.221a.692.692 0 0 0 .562-.277v.237c0 .138-.008.285-.091.419-.095.158-.233.229-.435.229a.51.51 0 0 1-.396-.158.518.518 0 0 1-.127-.34h-.281c0 .241.103.419.214.53s.305.221.585.221zm0-1.115a.497.497 0 0 1-.352-.134c-.158-.146-.186-.34-.186-.483 0-.134.028-.308.166-.451a.51.51 0 0 1 .372-.154c.146 0 .281.055.372.146.103.099.174.269.174.463s-.075.368-.186.475a.486.486 0 0 1-.36.138zm2.119.253c.498 0 .87-.364.87-.862s-.368-.866-.87-.866-.87.368-.87.866.372.862.87.862m0-.253c-.293 0-.577-.206-.577-.609 0-.399.277-.613.577-.613s.577.21.577.613c0 .399-.281.609-.577.609zm2.674.253c.316 0 .566-.194.566-.538a.39.39 0 0 0-.087-.265c-.063-.079-.174-.154-.411-.253-.186-.079-.265-.115-.265-.233 0-.127.095-.186.198-.186.107 0 .19.071.229.166l.233-.123a.474.474 0 0 0-.451-.297c-.277 0-.479.17-.479.459 0 .083.012.162.075.241.075.091.202.154.399.241.154.067.265.119.265.273a.255.255 0 0 1-.269.261c-.206 0-.301-.182-.332-.269l-.245.103a.587.587 0 0 0 .573.419zm1.653 0c.21 0 .396-.067.546-.202a.993.993 0 0 0 .202-.265l-.237-.131a.657.657 0 0 1-.17.225.5.5 0 0 1-.336.119c-.285 0-.518-.218-.522-.558h1.277c.008-.218-.051-.471-.154-.617a.736.736 0 0 0-.621-.301c-.494 0-.795.38-.795.87 0 .609.415.858.811.858zm.467-1.048h-.965c.043-.245.241-.427.483-.427s.435.17.483.427zm1.455 1.91c.308 0 .534-.138.657-.305.144-.194.157-.421.158-.594v-1.652h-.285v.233a.683.683 0 0 0-.562-.273.814.814 0 0 0-.562.221c-.119.119-.237.316-.237.637 0 .332.127.538.237.649.127.127.32.221.562.221a.692.692 0 0 0 .562-.277v.237c0 .138-.008.285-.091.419-.095.158-.233.229-.435.229a.51.51 0 0 1-.396-.158.518.518 0 0 1-.127-.34h-.281c0 .241.103.419.214.53s.305.221.585.221zm0-1.115a.497.497 0 0 1-.352-.134c-.158-.146-.186-.34-.186-.483 0-.134.028-.308.166-.451a.51.51 0 0 1 .372-.154c.146 0 .281.055.372.146.103.099.174.269.174.463s-.075.368-.186.475a.486.486 0 0 1-.36.138zm2.006.253a.682.682 0 0 0 .502-.206c.131-.142.15-.293.15-.494v-.989h-.285v.957c0 .115 0 .249-.079.352-.044.055-.131.127-.289.127s-.245-.071-.289-.127c-.069-.09-.078-.204-.079-.308v-1.001h-.285v.989c0 .202.02.352.15.494.146.154.34.206.502.206zm1.475-.047v-.866c0-.269.047-.38.095-.443a.278.278 0 0 1 .229-.103c.044 0 .103.012.166.055l.134-.257a.594.594 0 0 0-.253-.067c-.221 0-.344.174-.372.218v-.178h-.285v1.641h.285zm1.558.047c.498 0 .87-.364.87-.862s-.368-.866-.87-.866-.87.368-.87.866.372.862.87.862m0-.253c-.293 0-.577-.206-.577-.609 0-.399.277-.613.577-.613s.577.21.577.613c0 .399-.281.609-.577.609M3.787 31.112c.308 0 .534-.138.657-.305.144-.194.157-.421.158-.594v-1.652h-.285v.233a.683.683 0 0 0-.562-.273.814.814 0 0 0-.562.221c-.119.119-.237.316-.237.637 0 .332.127.538.237.649.127.127.32.221.562.221a.692.692 0 0 0 .562-.277v.237c0 .138-.008.285-.091.419-.095.158-.233.229-.435.229a.51.51 0 0 1-.396-.158.518.518 0 0 1-.127-.34h-.281c0 .241.103.419.214.53s.305.221.585.221zm0-1.115a.497.497 0 0 1-.352-.134c-.158-.146-.186-.34-.186-.483 0-.134.028-.308.166-.451a.51.51 0 0 1 .372-.154c.146 0 .281.055.372.146.103.099.174.269.174.463s-.075.368-.186.475a.486.486 0 0 1-.36.138zm2.048.253a.692.692 0 0 0 .562-.277v.229h.285v-1.641h-.285v.233a.678.678 0 0 0-.562-.273c-.419 0-.799.293-.799.858 0 .577.384.87.799.87zm.032-.253c-.34 0-.538-.265-.538-.617 0-.399.257-.605.538-.605.253 0 .546.186.546.609 0 .324-.198.613-.546.613zm1.637.205v-.866c0-.269.047-.38.095-.443a.276.276 0 0 1 .229-.103c.043 0 .103.012.166.055l.134-.257a.594.594 0 0 0-.253-.067c-.221 0-.344.174-.372.218v-.178h-.285v1.641h.285zm1.499.048a.692.692 0 0 0 .562-.277v.229h.285v-1.641h-.285v.233a.678.678 0 0 0-.562-.273c-.419 0-.799.293-.799.858 0 .577.384.87.799.87zm.032-.253c-.34 0-.538-.265-.538-.617 0-.399.257-.605.538-.605.253 0 .546.186.546.609 0 .324-.198.613-.546.613m1.637.205v-.858c0-.119.008-.312.119-.443a.36.36 0 0 1 .289-.127c.127 0 .214.047.269.119.067.087.075.202.075.301v1.009h.285v-1.016c0-.182-.012-.316-.095-.439a.558.558 0 0 0-.471-.225.581.581 0 0 0-.471.229v-.19h-.285v1.641h.285zm1.867 0v-1.38h.285v-.261h-.285v-.593h-.285v.593h-.174v.261h.174v1.38zm.696-2.06c.111 0 .202-.091.202-.202s-.091-.202-.202-.202-.202.091-.202.202.091.202.202.202m.143 2.06v-1.641h-.285v1.641zm2.009 0v-.261h-1.139l1.187-1.38h-1.527v.261h.957l-1.187 1.38zm1.004.048a.692.692 0 0 0 .562-.277v.229h.285v-1.641h-.285v.233a.678.678 0 0 0-.562-.273c-.419 0-.799.293-.799.858 0 .577.384.87.799.87zm.032-.253c-.34 0-.538-.265-.538-.617 0-.399.257-.605.538-.605.253 0 .546.186.546.609 0 .324-.198.613-.546.613zm2.049.253a.692.692 0 0 0 .562-.277v.229h.285v-2.883h-.285v1.475a.678.678 0 0 0-.562-.273c-.419 0-.799.293-.799.858 0 .577.384.87.799.87zm.031-.253c-.34 0-.538-.265-.538-.617 0-.399.257-.605.538-.605.253 0 .546.186.546.609 0 .324-.198.613-.546.613zm2.12.253c.498 0 .87-.364.87-.862s-.368-.866-.87-.866-.87.368-.87.866.372.862.87.862m0-.253c-.293 0-.577-.206-.577-.609 0-.399.277-.613.577-.613s.577.21.577.613c0 .399-.281.609-.577.609zM12.454 1.079c3.332 0 6.044 2.76 6.044 6.152v2.14h.041c.88 0 1.596.729 1.596 1.625v8.953c0 .896-.716 1.625-1.596 1.625H6.271c-.88 0-1.596-.729-1.596-1.625V11c0-.896.716-1.625 1.596-1.625h.14v-2.14c0-3.392 2.711-6.152 6.044-6.156zm0 2.697c-1.872 0-3.398 1.549-3.398 3.459v2.14h6.796v-2.14c0-1.905-1.522-3.459-3.398-3.459z"
      />
      <g fill="currentColor">
        <path d="M8.376 20.236v-.454h-.813l.663-1.288c.035-.068.063-.126.084-.174s.035-.095.044-.143.015-.097.018-.149.004-.117.004-.194c0-.107-.013-.208-.038-.303s-.064-.18-.117-.254a.607.607 0 0 0-.513-.241.67.67 0 0 0-.477.205.696.696 0 0 0-.199.485v.25h.451v-.258c0-.074.02-.131.06-.169s.093-.058.161-.058c.056 0 .099.011.128.033s.052.05.066.082c.015.033.023.071.024.114l.002.123c0 .086-.003.158-.009.216s-.029.125-.071.203l-.813 1.546v.428h1.343zm1.032.027c.088 0 .173-.016.254-.047s.152-.076.214-.136a.666.666 0 0 0 .203-.499v-.82c0-.187-.048-.327-.144-.421s-.22-.14-.373-.14a.537.537 0 0 0-.375.147v-.855h.892v-.428h-1.29v1.711h.398l.027-.049c.009-.021.022-.04.04-.058s.04-.033.066-.047a.22.22 0 0 1 .097-.02c.062 0 .113.022.152.067s.06.098.06.16v.744c0 .074-.018.132-.055.174s-.089.062-.157.062-.123-.022-.166-.065-.064-.103-.064-.18v-.116h-.451v.134a.677.677 0 0 0 .203.499c.062.059.133.105.214.136s.166.047.254.047zm1.704 0c.124 0 .235-.027.334-.08s.177-.129.236-.227a.656.656 0 0 0 .084-.222c.006-.045.01-.1.013-.167s.004-.152.004-.256c0-.125-.001-.228-.004-.31s-.007-.149-.013-.203a.527.527 0 0 0-.08-.227.452.452 0 0 0-.38-.205c-.05 0-.091.004-.121.011s-.054.017-.068.029l-.009-.009.512-1.332h-.504l-.592 1.595-.04.118a.698.698 0 0 0-.027.123c-.006.048-.01.103-.013.167s-.004.145-.004.243c0 .104.001.189.004.256s.009.123.018.167a.44.44 0 0 0 .084.222.647.647 0 0 0 .565.307zm0-.454c-.059 0-.11-.021-.155-.062s-.066-.097-.066-.165v-.588a.218.218 0 0 1 .221-.227c.059 0 .11.021.155.062s.066.097.066.165v.588a.218.218 0 0 1-.221.227m2.829.454c.186 0 .317-.071.393-.214.027-.05.046-.113.057-.187s.018-.174.018-.299v-.86c0-.163-.004-.284-.013-.361s-.028-.14-.057-.187c-.038-.059-.088-.108-.148-.147s-.145-.058-.254-.058c-.088 0-.167.02-.236.06s-.129.097-.179.172h-.009v-1.118h-.451v3.172h.451v-.205c.056.065.113.12.172.165s.144.067.256.067zm-.203-.454c-.068 0-.122-.026-.163-.078s-.062-.12-.062-.203v-.878c0-.071.021-.13.064-.176s.096-.069.161-.069c.085 0 .144.027.175.08s.046.116.046.187v.829c0 .092-.018.166-.053.223s-.091.085-.168.085zm1.554-2.29v-.454h-.451v.454zm0 2.717v-2.259h-.451v2.259zm1.16 0v-.428c-.05 0-.092-.002-.126-.004s-.063-.012-.086-.027c-.024-.015-.041-.037-.051-.067s-.015-.071-.015-.125v-1.252h.278v-.356h-.278v-.686h-.451v.686h-.225v.356h.225v1.372c0 .059.01.121.029.185s.049.121.091.172c.041.05.096.092.166.125s.155.049.258.049h.186zm.825.027c.097 0 .187-.018.269-.053s.153-.085.212-.147a.696.696 0 0 0 .19-.481c0-.134-.032-.257-.095-.37s-.179-.202-.347-.267l-.265-.107c-.085-.033-.138-.069-.159-.109s-.031-.081-.031-.123c0-.059.019-.112.057-.158s.093-.069.163-.069c.059 0 .111.019.157.058s.07.097.073.174h.424a.692.692 0 0 0-.182-.473c-.056-.059-.123-.105-.201-.138s-.163-.049-.254-.049-.177.016-.256.047-.149.076-.208.136a.647.647 0 0 0-.199.477c0 .151.041.28.121.385s.192.185.334.238l.216.08c.085.033.144.071.177.116s.049.098.049.16c0 .077-.026.137-.077.18s-.11.065-.174.065c-.085 0-.145-.027-.179-.08s-.055-.111-.064-.174h-.424c.003.113.024.212.062.296a.645.645 0 0 0 .609.386zM8.565 15.875c.439 0 .866-.069 1.218-.424.297-.299.39-.667.39-1.048 0-.287-.056-.518-.266-.742-.216-.237-.489-.331-.748-.412l-.328-.1c-.254-.075-.328-.15-.359-.187a.28.28 0 0 1-.056-.187c0-.094.043-.162.105-.225a.51.51 0 0 1 .352-.125c.142 0 .383.025.705.281l.427-.842c-.39-.206-.866-.337-1.274-.337-.501 0-.847.181-1.058.393-.179.181-.377.493-.377 1.004 0 .212.025.505.235.736.167.187.421.281.594.337l.278.087c.266.081.427.125.532.218a.324.324 0 0 1 .117.249c0 .106-.043.2-.105.262-.068.075-.198.143-.414.143-.371 0-.717-.206-.946-.424l-.458.873c.297.206.557.306.625.331.303.112.55.137.81.137zm3.741 0c.439 0 .866-.069 1.218-.424.297-.299.39-.667.39-1.048 0-.287-.056-.518-.266-.742-.216-.237-.489-.331-.748-.412l-.328-.1c-.254-.075-.328-.15-.359-.187a.28.28 0 0 1-.056-.187c0-.094.043-.162.105-.225a.51.51 0 0 1 .352-.125c.142 0 .383.025.705.281l.427-.842c-.39-.206-.866-.337-1.274-.337-.501 0-.847.181-1.058.393-.179.181-.377.493-.377 1.004 0 .212.025.505.235.736.167.187.421.281.594.337l.278.087c.266.081.427.125.532.218a.324.324 0 0 1 .117.249c0 .106-.043.2-.105.262-.068.075-.198.143-.414.143-.371 0-.717-.206-.946-.424l-.458.873c.297.206.557.306.625.331.303.112.55.137.81.137zm5.003-.094v-.917h-1.286v-3.243h-1.07v4.16z" />
      </g>
    </svg>
  ),
);
export default SslEsIcon;
