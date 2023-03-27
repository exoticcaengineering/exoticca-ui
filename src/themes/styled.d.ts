// import original module declarations
import 'styled-components';
import {} from 'styled-components/cssprop';

type BaseType = 'gridSize' | 'gutterWidth' | 'outerMargin';

type BreakpointsType = 'xs' | 'ms' | 'sm' | 'md' | 'mdLegacy' | 'lg' | 'xl';

type NewBreakpointsType =
  | 'mobile'
  | 'phablet'
  | 'tablet'
  | 'laptop'
  | 'desktop'
  | 'desktopXL'
  | 'desktopMAX';

type NewPaletteType =
  // ExoticcaLogo
  | 'exoticcaLogo'

  // PremiumCare
  | 'premiumCare'
  | 'premiumCareLight'

  // Guidelines
  | 'guidelines'

  // Alpha α and Omega Ω
  | 'white'
  | 'black'

  //sematic color
  | 'warning'

  // Primary Gold
  | 'primaryGold10'
  | 'primaryGold20'
  | 'primaryGold30'
  | 'primaryGold40'
  | 'primaryGold50'
  | 'primaryGold60'
  | 'primaryGold70'

  // Secondary Gold
  | 'secondaryGold10'
  | 'secondaryGold20'
  | 'secondaryGold30'
  | 'secondaryGold40'
  | 'secondaryGold50'
  | 'secondaryGold60'
  | 'secondaryGold70'

  // Primary Blue
  | 'primaryBlue05'
  | 'primaryBlue10'
  | 'primaryBlue20'
  | 'primaryBlue30'
  | 'primaryBlue40'
  | 'primaryBlue50'

  // Secondary Blue
  | 'secondaryBlue10'
  | 'secondaryBlue15'
  | 'secondaryBlue20'
  | 'secondaryBlue30'
  | 'secondaryBlue40'
  | 'secondaryBlue50'
  | 'secondaryBlue60'
  | 'secondaryBlue70'

  // Red
  | 'red10'
  | 'red20'
  | 'red30'
  | 'red40'
  | 'red50'
  | 'red60'

  // SecondaryRed
  | 'secondaryRed40'

  // Green
  | 'green10'
  | 'green20'
  | 'green30'
  | 'green40'
  | 'green50'
  | 'green60'
  | 'green70'
  | 'green80'
  | 'greenCalendar'

  // Grey
  | 'grey10'
  | 'grey20'
  | 'grey30'
  | 'grey40'
  | 'grey50'
  | 'grey60'
  | 'grey70'
  | 'grey80'

  // Purple
  | 'purple40'
  | 'purple20'

  // Promotion
  | 'promotionBackground'
  | 'yellowPromo'
  | 'bluePromo'
  | 'brownPromo'
  | 'lightBluePromo'
  | 'flashSalesTextColor'
  | 'flashSalesTextBg'
  | 'goldenPromo'
  | 'strongYellowPromo'
  | 'beigePromo'
  | 'turquoisePromo'

  //FlashSales
  | 'flashSalesYellow'

  // Auth
  | 'googleBlue'
  | 'googleRed'
  | 'googleYellow'
  | 'googleGreen'

  // Shadows
  | 'primaryShadow';

type ColorsType =
  | NewPaletteType
  | 'transparent'
  // 🎨 New Palette from 2021-Branding 🎨
  | 'emperor'
  | 'emperor38'
  | 'ferra'
  | 'ferra5'
  | 'ferra10'
  | 'ferra50'
  | 'ferraLight'
  | 'black00'
  | 'black12'
  | 'black72'
  | 'black92'
  | 'black06'
  | 'flamePea'
  | 'red'
  | 'gray'
  | 'gray50'
  | 'grayDark'
  | 'grayDark80'
  | 'green'
  | 'mineShaft'
  | 'mineShaftDarker04'
  | 'mineShaftDarker4'
  | 'mineShaftDarker50'
  | 'pearlBush'
  | 'white50'
  | 'white37'
  | 'white95'
  | 'white9'
  | 'white4'
  | 'whiteCreamy'
  | 'whiteGrey'
  | 'cafeRoyale'
  | 'goldenDarker'
  | 'golden36'
  | 'golden24'
  | 'goldenText'
  | 'goldenButton'
  | 'grandis'
  | 'grandis15'
  | 'purple'
  | 'brightSun'
  | 'merino'
  | 'lightGrey'
  | 'lightGrey15'
  | 'lightGreyHex'
  | 'alabaster'
  | 'hibiscus20'
  | 'mercury'
  | 'mercuryLight'
  | 'biscay'
  | 'springWood'
  | 'fireBush'
  | 'vinrouge'
  | 'ferraGrayDark18'
  | 'grayNickel'
  | 'athensGray'
  | 'pampasDark'
  | 'pampas'
  | 'quillGray'
  | 'marzipan'
  | 'albescentWhite'
  | 'lowGrey'
  | 'gallery'
  | 'jaffa'
  | 'jaffa20'
  | 'silver'
  | 'keppel'
  | 'keppel40'
  | 'shiny'
  | 'redBright'
  | 'mateak26'
  | 'tana40'
  | 'silverChalice'
  | 'yoBarTitle'
  | 'heroPromoButton'
  | 'pearlLusta'
  | 'concrete'
  | 'concreteLight'
  | 'froly'
  | 'elm'
  | 'doveGray'
  | 'tundora'
  | 'tundora50'
  | 'regalBlue'
  | 'drawerBg'
  | 'textFooterColorLight'
  | 'cararra'
  | 'desert'
  | 'potpourri41'
  | 'bridalHeath'
  | 'yellowMetal'
  | 'aquaHaze'
  | 'carouselPink'
  | 'dawnPink'
  | 'crimson'
  | 'linkWater12'
  | 'chathamsBlue'
  | 'systemCrimson'
  | 'linen'
  | 'linenDark'
  | 'darkBoulder'
  | 'boulder50'
  | 'foam'
  | 'compactDisc'
  | 'discCompact'
  | 'flushMahogany'
  | 'wispPink'
  | 'elfGreen'
  | 'jungleGreen'
  | 'midnightBlue'
  | 'dynamite'
  | 'alto'
  | 'geyser'
  | 'loblolly'
  | 'shareFacebook'
  | 'shareFacebookMessenger'
  | 'shareWhatsapp'
  | 'shareGrey'
  | 'crail'
  | 'madang'
  | 'roseBud'
  | 'buttermilk'
  | 'lightApricot'
  | 'whiteIce'
  | 'linkWaterDarker'
  | 'whiteLilac'
  | 'zumthor'
  | 'grayNurse'
  | 'torchRed'
  | 'sazerac'
  | 'pdfCovidInfo'
  | 'footerBgColor'
  | 'textFooterColor'
  | 'coronaBackgroundColor'
  | 'blue10'
  | 'blue20'
  | 'darkGrey';

type FontFamilyType =
  | 'main'
  | 'medium'
  | 'secondary'
  | 'secondaryMedium'
  | 'tertiary'
  | 'tertiaryMedium'
  | 'YoutubeAd';

type FontVariantType =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'default'
  | 'small1'
  | 'small2'
  | 'small3'
  | 'small4'
  | 'subtitle1'
  | 'tabletBannerTitle';

type FontWeightType =
  | 'lighter'
  | 'light'
  | 'normal'
  | 'semibold'
  | 'bold'
  | 'bolder';

type LetterSpacingType = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider';

type BorderRadiusType =
  | 'none'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'semiRounded'
  | 'rounded';

type BoxShadowType = 'none' | 'xs' | 's';

type DurationType =
  | 'shortest'
  | 'shorter'
  | 'short'
  | 'standard'
  | 'long'
  | 'longer'
  | 'longest';

type ZIndexType =
  | 'level0'
  | 'level1'
  | 'level2'
  | 'level3'
  | 'level4'
  | 'level5'
  | 'level6'
  | 'level7'
  | 'level8'
  | 'level9'
  | 'level10';
declare module 'styled-components' {
  export type Base = Record<BaseType, number>;
  export type Breakpoints = Record<BreakpointsType, string>;
  export type NewBreakpoints = Record<NewBreakpointsType, string>;
  export type FontFamily = Record<FontFamilyType, string>;
  export type FontSize = Record<FontVariantType, string>;
  export type FontWeight = Record<FontWeightType, number>;
  export type LetterSpacing = Record<LetterSpacingType, string>;
  export type NewPalette = Record<NewPaletteType, string>;
  export type Colors = Record<ColorsType, string>;
  export type BorderRadius = Record<BorderRadiusType, string>;
  export type BoxShadow = Record<BoxShadowType, string>;
  export type Duration = Record<DurationType, string>;
  export type ZIndex = Record<ZIndexType, number>;
  interface Font {
    fontFamily: FontFamily;
    fontSize: FontSize;
    fontSizeBase: string;
    fontWeight: FontWeight;
    letterSpacing: LetterSpacing;
  }

  interface Transition {
    duration: Duration;
  }

  export type MapSpacingValue = (...args: number[]) => string;
  export interface DefaultTheme {
    base: Base;
    breakpoints: Breakpoints;
    newBreakpoints: NewBreakpoints;
    typography: Font;
    colors: Colors;
    borderRadius: BorderRadius;
    boxShadow: BoxShadow;
    spacing: MapSpacingValue;
    transition: Transition;
    zIndex: ZIndex;
  }
}