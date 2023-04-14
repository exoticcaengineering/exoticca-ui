import { FC, SVGProps } from 'react';
import { ReactComponent as LogoRebrand } from 'src/assets/icons/logo-rebrand.svg';
import { ReactComponent as CloseIcon } from 'src/assets/icons/logo-rebrand.svg';
import { IconName } from 'src/types/IconNames';

export const iconComponents: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  'logo-rebrand': LogoRebrand,
  'ico-close': CloseIcon,
};
