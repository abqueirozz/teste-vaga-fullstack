import "styled-components";
import {themeType} from '../providers/ThemeProvider'
declare module "styled-components"{
    export interface DefaultTheme extends themeType{}
}