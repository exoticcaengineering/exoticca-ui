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
import { FlagUs } from './SVGIcons/FlagUs';

export const iconComponents: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  'logo-rebrand': LogoRebrand,
  arrowUp: IconArrowUp,
  arrowDown: IconArrowDown,
  close: IconClose,
  'pill-status': Promo,
  contact: IconContact,
  user: IconUser,
  search: IconSearch,
  'flag-us': FlagUs,
  loader: IconLoader,
};
