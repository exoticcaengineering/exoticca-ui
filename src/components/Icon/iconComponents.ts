import { FC, SVGProps } from 'react';

import { IconName } from 'src/types/IconNames';
import { IconArrow } from './SVGIcons/IconArrow';
import { IconArrowSimple } from './SVGIcons/IconArrowSimple';
import { IconClose } from './SVGIcons/IconClose';
import { Promo } from './SVGIcons/Promo';
import { IconContact } from './SVGIcons/IconContact';
import { LogoRebrand } from './SVGIcons/LogoRebrand';
import { IconUser } from './SVGIcons/IconUser';
import { IconSearch } from './SVGIcons/IconSearch';
import { IconLoader } from './SVGIcons/IconLoader';
import { IconArrowSquare } from './SVGIcons/IconArrowSquare';
import { FlagUS } from './SVGIcons/FlagUS';
import { FlagUK } from './SVGIcons/FlagUK';
import { FlagES } from './SVGIcons/FlagES';
import { FlagCA } from './SVGIcons/FlagCA';
import { FlagDE } from './SVGIcons/FlagDE';
import { FlagMX } from './SVGIcons/FlagMX';
import { FlagFR } from './SVGIcons/FlagFR';
import { IconAdventure } from './SVGIcons/IconAdventure';
import { IconBeach } from './SVGIcons/IconBeach';
import { IconCulture } from './SVGIcons/IconCulture';
import { IconFall } from './SVGIcons/IconFall';
import { Honeymoon } from './SVGIcons/IconHoneymoon';
import { IconLuxury } from './SVGIcons/IconLuxury';
import { IconMultiCountry } from './SVGIcons/IconMultiCountry';
import { IconNature } from './SVGIcons/IconNature';
import { IconSafari } from './SVGIcons/IconSafari';
import { IconSpring } from './SVGIcons/IconSpring';
import { IconSummer } from './SVGIcons/IconSummer';
import { IconWinter } from './SVGIcons/IconWinter';
import { IconPhoneCall } from './SVGIcons/IconPhoneCall';
import { IconLogout } from './SVGIcons/IconLogout';
import { IconEasterEgg } from './SVGIcons/IconEasterEgg';
import { IconTree } from './SVGIcons/IconTree';
import { IconHamburgerMenu } from './SVGIcons/IconHamburgerMenu';
import { IconPaymentSuccess } from './SVGIcons/IconPaymentSuccess';
import { IconUserCircle } from './SVGIcons/IconUserCircle';
import { IconExclamation } from './SVGIcons/IconExclamation';
import { IconFallback } from './SVGIcons/IconFallback';
import { IconCheck } from './SVGIcons/IconCheck';
import { IconHeart } from './SVGIcons/IconHeart';
import { IconMoon } from './SVGIcons/IconMoon';
import { IconCalendar } from './SVGIcons/IconCalendar';
import { Star5 } from './SVGIcons/Star5';
import { Star5GL } from './SVGIcons/Star5GL';
import { Star4 } from './SVGIcons/Star4';
import { Star4SP } from './SVGIcons/Star4SP';
import { Star3SP } from './SVGIcons/Star3SP';
import { IconBlog } from './SVGIcons/IconBlog';
import { IconPlane } from './SVGIcons/IconPlane';
import { IconMapPin } from './SVGIcons/IconMapPin';
import { IconFacebookBox } from './SVGIcons/IconFacebookBox';
import { IconInstagramBox } from './SVGIcons/IconInstagramBox';
import { IconTwitterBox } from './SVGIcons/IconTwitterBox';
import { IconYoutubeBox } from './SVGIcons/IconYoutubeBox';
import { IconSpotifyBox } from './SVGIcons/IconSpotifyBox';
import { IconClock } from './SVGIcons/IconClock';
import { IconWarningCross } from './SVGIcons/IconWarningCross';
import { IconClockFast } from './SVGIcons/IconClockFast';
import { IconSmile } from './SVGIcons/IconSmile';
import { IconCog } from './SVGIcons/IconCog';
import { IconBaggage } from 'src/components/Icon/SVGIcons/IconBaggage';
import { IconNoBaggage } from 'src/components/Icon/SVGIcons/IconNoBaggage';
import { IconHandBaggage } from 'src/components/Icon/SVGIcons/IconHandBaggage';
import { IconArrowDownCircle } from 'src/components/Icon/SVGIcons/IconArrowDownCircle';
import { IconCheckCircle } from 'src/components/Icon/SVGIcons/IconCheckCircle';
import { IconAlertTriangle } from 'src/components/Icon/SVGIcons/IconAlertTriangle';
import { IconEnvelope } from 'src/components/Icon/SVGIcons/IconEnvelope';
import { IconTrash } from './SVGIcons/IconTrash';
import { IconDocumentText } from './SVGIcons/IconDocumentText';
import { TouristGuide } from './SVGIcons/TouristGuide';
import { IconShield } from './SVGIcons/IconShield';
import { IconPiggyBank } from './SVGIcons/IconPiggyBank';
import { IconCalendarCross } from './SVGIcons/IconCalendarCross';
import { PremiumCare } from './SVGIcons/PremiumCare';
import { PremiumCareFlex } from './SVGIcons/PremiumCareFlex';
import { PremiumCareFlexPlus } from './SVGIcons/PremiumCareFlexPlus';
import { IconLoop } from './SVGIcons/IconLoop';
import { IconStar } from './SVGIcons/IconStar';
import { IconTag } from './SVGIcons/IconTag';
import { IconWallet } from './SVGIcons/IconWallet';
import { PlayStoreDE } from 'src/components/Icon/SVGIcons/PlayStoreDE';
import { PlayStoreEN } from 'src/components/Icon/SVGIcons/PlayStoreEN';
import { PlayStoreES } from 'src/components/Icon/SVGIcons/PlayStoreES';
import { PlayStoreFR } from 'src/components/Icon/SVGIcons/PlayStoreFR';
import { PlayStoreMX } from 'src/components/Icon/SVGIcons/PlayStoreMX';
import { AppStoreDE } from 'src/components/Icon/SVGIcons/AppStoreDE';
import { AppStoreEN } from 'src/components/Icon/SVGIcons/AppStoreEN';
import { AppStoreES } from 'src/components/Icon/SVGIcons/AppStoreES';
import { AppStoreFR } from 'src/components/Icon/SVGIcons/AppStoreFR';
import { IconArrowCircleLogin } from 'src/components/Icon/SVGIcons/IconArrowCircleLogin';
import { IconEyeOpen } from './SVGIcons/IconEyeOpen';
import { IconEyeClosed } from './SVGIcons/IconEyeClosed';
import { IconInfo } from 'src/components/Icon/SVGIcons/IconInfo';
import { IconPencil } from 'src/components/Icon/SVGIcons/IconPencil';
import { IconHospitalCenter } from 'src/components/Icon/SVGIcons/IconHospitalCenter';
import { IconSyringe } from 'src/components/Icon/SVGIcons/IconSyringe';

export const iconComponents: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  'logo-rebrand': LogoRebrand,
  arrow: IconArrow,
  'arrow-simple': IconArrowSimple,
  close: IconClose,
  'pill-status': Promo,
  contact: IconContact,
  user: IconUser,
  search: IconSearch,
  'flag-us': FlagUS,
  'flag-uk': FlagUK,
  'flag-es': FlagES,
  'flag-ca': FlagCA,
  'flag-de': FlagDE,
  'flag-mx': FlagMX,
  'flag-fr': FlagFR,
  touristGuide: TouristGuide,
  loader: IconLoader,
  adventure: IconAdventure,
  beach: IconBeach,
  culture: IconCulture,
  fall: IconFall,
  honeymoon: Honeymoon,
  luxury: IconLuxury,
  'multi-country': IconMultiCountry,
  nature: IconNature,
  safari: IconSafari,
  spring: IconSpring,
  summer: IconSummer,
  winter: IconWinter,
  'arrow-square': IconArrowSquare,
  'phone-call': IconPhoneCall,
  logout: IconLogout,
  'easter-egg': IconEasterEgg,
  tree: IconTree,
  'hamburger-menu': IconHamburgerMenu,
  'payment-success': IconPaymentSuccess,
  'user-circle': IconUserCircle,
  exclamation: IconExclamation,
  fallback: IconFallback,
  check: IconCheck,
  heart: IconHeart,
  moon: IconMoon,
  calendar: IconCalendar,
  'star-5': Star5,
  'star-5-gl': Star5GL,
  'star-4': Star4,
  'star-4-sp': Star4SP,
  'star-3-sp': Star3SP,
  blog: IconBlog,
  plane: IconPlane,
  'map-pin': IconMapPin,
  'facebook-box': IconFacebookBox,
  'instagram-box': IconInstagramBox,
  'twitter-box': IconTwitterBox,
  'youtube-box': IconYoutubeBox,
  'spotify-box': IconSpotifyBox,
  clock: IconClock,
  'clock-fast': IconClockFast,
  cog: IconCog,
  smile: IconSmile,
  'travel-baggage': IconBaggage,
  'travel-no-baggage': IconNoBaggage,
  'travel-hand-baggage': IconHandBaggage,
  'arrow-down-circle': IconArrowDownCircle,
  'check-circle': IconCheckCircle,
  'warning-cross': IconWarningCross,
  'alert-triangle': IconAlertTriangle,
  envelope: IconEnvelope,
  trash: IconTrash,
  'document-text': IconDocumentText,
  shield: IconShield,
  'piggy-bank': IconPiggyBank,
  'calendar-cross': IconCalendarCross,
  'premium-care': PremiumCare,
  'premium-care-flex': PremiumCareFlex,
  'premium-care-flex-plus': PremiumCareFlexPlus,
  loop: IconLoop,
  star: IconStar,
  tag: IconTag,
  wallet: IconWallet,
  'arrow-circle-login': IconArrowCircleLogin,
  play_store_icon_de: PlayStoreDE,
  play_store_icon_en: PlayStoreEN,
  play_store_icon_es: PlayStoreES,
  play_store_icon_fr: PlayStoreFR,
  play_store_icon_mx: PlayStoreMX,
  app_store_icon_de: AppStoreDE,
  app_store_icon_en: AppStoreEN,
  app_store_icon_es: AppStoreES,
  app_store_icon_fr: AppStoreFR,
  'eye-open': IconEyeOpen,
  'eye-closed': IconEyeClosed,
  info: IconInfo,
  pencil: IconPencil,
  'hospital-center': IconHospitalCenter,
  syringe: IconSyringe,
};
