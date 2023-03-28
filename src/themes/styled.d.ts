// import original module declarations
import 'styled-components';
import {} from 'styled-components/cssprop';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
