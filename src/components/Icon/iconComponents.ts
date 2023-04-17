import { FC, SVGProps } from 'react';
import { ReactComponent as LogoRebrand } from 'src/assets/icons/logo-rebrand.svg';
import { ReactComponent as IconArrow } from 'src/assets/icons/arrow.svg';
import { ReactComponent as IconClose } from 'src/assets/icons/close.svg';
import { ReactComponent as Promo } from 'src/assets/icons/pill-status.svg';
import { ReactComponent as IconContact } from 'src/assets/icons/contact.svg';
import { ReactComponent as IconUser } from 'src/assets/icons/user.svg';
import { ReactComponent as IconSearch } from 'src/assets/icons/search.svg';
import { ReactComponent as FlagUs } from 'src/assets/icons/flag-us.svg';
import { IconName } from 'src/types/IconNames';

export const iconComponents: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  'logo-rebrand': LogoRebrand,
  arrow: IconArrow,
  close: IconClose,
  'pill-status': Promo,
  contact: IconContact,
  user: IconUser,
  search: IconSearch,
  'flag-us': FlagUs,
};
