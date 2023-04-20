import { FC, SVGProps } from 'react';

import { IconName } from 'src/types/IconNames';
import { IconArrowUp } from './SVGIcons/IconArrowUp';
import { IconArrowDown } from './SVGIcons/IconArrowDown';
import { IconClose } from './SVGIcons/IconClose';
import { Promo } from './SVGIcons/Promo';
import { IconContact } from './SVGIcons/IconContact';
import { LogoRebrand } from './SVGIcons/LogoRebrand';
import { IconUser } from './SVGIcons/IconUser';
import { IconSearch } from './SVGIcons/IconSearch';
import { IconLoader } from './SVGIcons/IconLoader';
import { ArrowSquare } from './SVGIcons/ArrowSquare';
import { FlagUS } from './SVGIcons/FlagUS';
import { FlagUK } from './SVGIcons/FlagUK';
import { FlagES } from './SVGIcons/FlagES';
import { FlagCA } from './SVGIcons/FlagCA';
import { FlagDE } from './SVGIcons/FlagDE';
import { FlagMX } from './SVGIcons/FlagMX';
import { FlagFR } from './SVGIcons/FlagFR';

export const iconComponents: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  'logo-rebrand': LogoRebrand,
  arrowUp: IconArrowUp,
  arrowDown: IconArrowDown,
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
  arrowSquare: ArrowSquare,
};
