// tslint:disable max-line-length
export type ThemeType = {
  button?: any;
  link?: any;
  font?: string;
  background?: any;
};

export const defaultTheme: ThemeType = {
  button: {
    color: '#fff',
    background: '#19579F',
    hover: '#2972C4',
    active: '#0D3F78',
  },
  link: {
    color: '#19579F',
  },
  font:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  background: {
    color: '#ffffff',
    image: '',
    position: '0% 0%',
  },
};

export const menuDefaultTheme = {
  container: {
    padding: '1em',
    width: '256px',
  },
  profile: {
    color: '#545454',
    backgroundColor: '#fff',
  },
  admin: {
    color: '#545454',
    backgroundColor: '#fff',
  },
  menu: {
    padding: '1em',
    font: 'Verdana',
    fontColor: '#fff',
    hoverFontColor: '#fff',
    backgroundColor: '#1b4da2',
    backgroundColorHover: '#123f8d',
  },
};
