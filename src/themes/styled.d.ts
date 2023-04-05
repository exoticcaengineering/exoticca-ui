// import original module declarations
import 'styled-components';
import {} from 'styled-components/cssprop';
import { Theme } from 'src/types/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
