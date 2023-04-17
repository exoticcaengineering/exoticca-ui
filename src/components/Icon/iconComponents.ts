import { FC, SVGProps } from 'react';
import { ReactComponent as LogoRebrand } from 'src/assets/icons/logo-rebrand.svg';
import { ReactComponent as CloseIcon } from 'src/assets/icons/ico-close.svg';
import { ReactComponent as Arrow } from 'src/assets/icons/Arrow.svg';
import { ReactComponent as Close } from 'src/assets/icons/Close.svg';
import { ReactComponent as Promo } from 'src/assets/icons/pill-status.svg';
import { ReactComponent as IconContact } from 'src/assets/icons/contact.svg';
import { ReactComponent as IconUser } from 'src/assets/icons/user.svg';
import { ReactComponent as IconSearch } from 'src/assets/icons/search.svg';
import { IconName } from 'src/types/IconNames';

export const iconComponents: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  'logo-rebrand': LogoRebrand,
  arrow: Arrow,
  close: Close,
  'pill-status': Promo,
  contact: IconContact,
  user: IconUser,
  search: IconSearch,
  'ico-close': CloseIcon,
};
