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
import { FlagUS } from './SVGIcons/FlagUS';
import { FlagUK } from './SVGIcons/FlagUK';
import { FlagES } from './SVGIcons/FlagES';
import { FlagCA } from './SVGIcons/FlagCA';
import { FlagDE } from './SVGIcons/FlagDE';
import { FlagMX } from './SVGIcons/FlagMX';
import { FlagFR } from './SVGIcons/FlagFR';
import { Adventure } from './SVGIcons/Adventure';
import { Beach } from './SVGIcons/Beach';
import { Culture } from './SVGIcons/Culture';
import { Fall } from './SVGIcons/Fall';
import { Honeymoon } from './SVGIcons/Honeymoon';
import { Luxury } from './SVGIcons/Luxury';
import { MultiCountry } from './SVGIcons/MultiCountry';
import { Nature } from './SVGIcons/Nature';
import { Safari } from './SVGIcons/Safari';
import { Spring } from './SVGIcons/Spring';
import { Summer } from './SVGIcons/Summer';
import { Winter } from './SVGIcons/Winter';

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
  adventure: Adventure,
  beach: Beach,
  culture: Culture,
  fall: Fall,
  honeymoon: Honeymoon,
  luxury: Luxury,
  'multi-country': MultiCountry,
  nature: Nature,
  safari: Safari,
  spring: Spring,
  summer: Summer,
  winter: Winter,
};
