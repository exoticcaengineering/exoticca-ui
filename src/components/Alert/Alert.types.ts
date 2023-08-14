import { BoxProps } from 'src/components/Box';
import { IconConfig } from 'src/components/Icon';
import { TypographyProps } from 'src/components/Typography';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export interface Props
  extends ComponentPropsBase,
    Pick<TypographyProps, 'fontSize'>,
    Pick<BoxProps, 'borderColor' | 'borderRadius' | 'padding' | 'borderWidth'> {
  text?: string;
  startIcon?: IconConfig;
}
