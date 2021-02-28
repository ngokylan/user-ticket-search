import { defaultTheme, withTheme, ThemeProvider } from '../_lib/style';

export function ApplicationTheme(props: any) {
  const { theme } = props;
  if (theme) {
    const style = document.createElement('style');
    style.setAttribute('id', 'ApplicationTheme');
    document.head.appendChild(style);
    const stylesheet = style.sheet;
    if (theme.font) {
      (stylesheet as CSSStyleSheet).insertRule(
        '.elements *{ font-family:' + theme.font + '}'
      );
    }
  }

  return <></>;
}

ApplicationTheme.defaultProps = defaultTheme;

export default withTheme(ApplicationTheme);
export { ThemeProvider, defaultTheme };
