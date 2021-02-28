import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { defaultTheme, ThemeType } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents as ThemedStyledComponentsModule<ThemeType>;

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  defaultTheme,
  withTheme,
};
export default styled;
