export const BreakpointNames = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
};

export type Breakpoint =
  | typeof BreakpointNames.xs
  | typeof BreakpointNames.sm
  | typeof BreakpointNames.md
  | typeof BreakpointNames.lg
  | typeof BreakpointNames.xl
  | typeof BreakpointNames.xxl;

export const breakpoints = {
  xs: {
    size: 600,
    container: 570,
  }, // ~ xs
  sm: {
    size: 840,
    container: 810,
  }, // ~ sm
  md: {
    size: 1024,
    container: 1000,
  }, // ~ md
  lg: {
    size: 1280,
    container: 1250,
  }, // ~ lg
  xl: {
    size: 1440,
    container: 1410,
  }, // ~ xl
  xxl: {
    size: 1880,
    container: 1850,
  }, // xxl
};

export const font: any = {
  family:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ' +
    'Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, ' +
    'Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ' +
    '"Segoe UI Symbol"',
  size: {
    base: '16px',
    100: '0.694em',
    200: '0.833em',
    300: '1em',
    400: '1.2em',
    500: '1.44em',
    600: '1.728em',
    700: '2.074em',
    800: '2.488em',
  },
};

export const colours = {
  white: '#FFFFFF',
  primaryA: {
    800: '#0D3F78',
    700: '#19579F',
    600: '#2972C4',
    200: '#8FC3FF',
    50: '#E6F1FF',
  },
  primaryB: {
    700: '#B1101E',
  },
  black: {
    200: {
      hex: '#F6F6F6',
      rgba: 'rgba(0,0,0,0.87)',
    },
    300: {
      hex: '#EDEDED',
      rgba: 'rgba(0,0,0,0.65)',
    },
    400: {
      hex: '#DBDBDB',
      rgba: 'rgba(0,0,0,0.42)',
    },
    600: {
      hex: '#949494',
      rgba: 'rgba(0,0,0,0.14)',
    },
    700: {
      hex: '#595959',
      rgba: 'rgba(0,0,0,0.7)',
    },
    800: {
      hex: '#212121',
      rgba: 'rgba(0,0,0,0.4)',
    },
  },
  information: {
    800: '#0D3F78',
    700: '#19579F',
    600: '#2972C4',
    200: '#8FC3FF',
    50: '#E6F1FF',
  },
  warning: {
    800: '#FAAD14',
    700: '#FFC53D',
    600: '#FFD666',
    200: '#FFE58F',
    50: '#FFFBE6',
  },
  success: {
    800: '#00401F',
    700: '#006631',
    600: '#078C47',
    200: '#81E8B3',
    50: '#E6FFF2',
  },
  danger: {
    800: '#8A000B',
    700: '#B1101E',
    600: '#D62735',
    200: '#FF9FA7',
    50: '#FFF0F1',
  },
};

export const shadows = {
  1:
    '0px 1px 1px 0px ' +
    colours.black[300].rgba +
    ', 0px 1px 2px 0px ' +
    colours.black[400].rgba,
  2:
    '0px 1px 2px 0px ' +
    colours.black[300].rgba +
    ', 0px 1px 4px 2px ' +
    colours.black[400].rgba,
};

export const radius = '3';

// default branding
export const branding = {
  logo: '',
  logoPosition: 'left', // left , right
  siteFont: font.family,
  siteBackgroundColor: colours.white,
  siteBackgroundImage: '',
  siteBackgroundPosition: '', // Centered, Stretched, Tiled
  headingBackgroundColor: colours.white,
  headingBannerImage: '',
  headingBannerCogIconColor: '#000000',
  menuColor1: '#074258',
  menuColor2: '#074258',
  menuFontColor: '#ffffff',
  menuHoverFontColor: '#ffffff',
  buttonColour: '#195799',
  buttonHoverColour: '#7396b5',
  buttonBorderColour: '#195799',
  buttonFontColour: '#ffffff',
  tableHeaderColour: '#074258',
  tableHeaderFontColour: '#ffffff',
  popupBackgroundColour: '#ffffff',
  popupFontColour: '#000000',
};

export const zIndex = {
  body: 1,
  pageContent: 10,
  header: 100,
  pageHeader: 200,
  components: 300,
  notifications: 400,
  navigation: 500,
  modal: 1000,
};
