import { TypographyProps } from 'src/components/Typography';

export interface Props
  extends Omit<TypographyProps, 'fontSize' | 'lineHeight'> {}

export interface TextOverLineProps extends Omit<Props, 'textTransform'> {}
