import { FC, SVGProps } from 'react';

import { IconName } from 'src/types/IconNames';
import { IconArrow } from './SVGIcons/IconArrow';
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
import { Fall } from './SVGIcons/Fall';
import { Honeymoon } from './SVGIcons/IconHoneymoon';
import { IconLuxury } from './SVGIcons/IconLuxury';
import { IconMultiCountry } from './SVGIcons/IconMultiCountry';
import { IconNature } from './SVGIcons/IconNature';
import { IconSafari } from './SVGIcons/IconSafari';
import { IconSpring } from './SVGIcons/IconSpring';
import { IconSummer } from './SVGIcons/IconSummer';
import { IconWinter } from './SVGIcons/IconWinter';
import { IconPhoneCall } from './SVGIcons/IconPhoneCall';

export const iconComponents: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  'logo-rebrand': LogoRebrand,
  arrow: IconArrow,
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
  loader: IconLoader,
  adventure: IconAdventure,
  beach: IconBeach,
  culture: IconCulture,
  fall: Fall,
  honeymoon: Honeymoon,
  luxury: IconLuxury,
  'multi-country': IconMultiCountry,
  nature: IconNature,
  safari: IconSafari,
  spring: IconSpring,
  summer: IconSummer,
  winter: IconWinter,
  arrowSquare: IconArrowSquare,
  'phone-call': IconPhoneCall,
};
