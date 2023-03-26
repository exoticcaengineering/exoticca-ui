import { FC } from "react";
import { themeDefault } from "src/themes";
import { ThemeProvider } from "styled-components";

export const withThemeProvider = <Props extends JSX.IntrinsicAttributes,>(Component: FC<Props> )=> (props: Props)=> (
    <ThemeProvider theme={themeDefault}>
    <Component {...props} />
       </ThemeProvider>
)
    




