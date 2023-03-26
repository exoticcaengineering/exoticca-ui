import { withThemeProvider } from "src/utils/withThemeProvider";
import {Box as BoxComponent} from "./Box";
import {Typography as TypographyComponent} from "./Typography";

export const Box = withThemeProvider(BoxComponent)
export const Typography = withThemeProvider(TypographyComponent)