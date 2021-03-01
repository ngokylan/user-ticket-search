import { ReactNode } from 'react';
import { MENU_STATE_TYPE_MIN, MENU_STATE_TYPE_WIDE } from '../_lib/const';

export type LayoutProps = {
  children?: ReactNode;
  /** To attach Menu Component */
  menu?: ReactNode;
  /** Use Reboot.scss */
  isStyleReboot?: boolean;
  theme?: LayoutTheme;
};

export type LayoutTheme = 'min' | 'default';
export const LayoutThemes: { [key: string]: LayoutTheme } = {
  default: 'default',
  min: 'min',
};

export type MenuStateType = MENU_STATE_TYPE_MIN | MENU_STATE_TYPE_WIDE;
export type LayoutContextProps = {
  /** Menu staus callback method */
  setMenuStatus: (menuState: MenuStateType) => void;
  /** Menu state, min | wide */
  menuState: MenuStateType;
  /** To allow content to scroll */
  isContentScrolling: boolean;
  /** Side panel state */
  isSidePanelOpen: boolean;
  /** Display side panel overlay */
  isSidePanelOverlay: boolean;
  /** Display search */
  isSearchOpen: boolean;
  /** Display side panel overlay */
  toggleSidePanelOverlay: any;
  /** Toggle search */
  toggleSearchOpen: any;  
  /** To pass layoutRef within the context */
  layoutRef?: Element;
  /** A function that receives ref and set context in layoutRef */
  setLayoutRef: Function;
  /** To pass headerRef within the context */
  headerRef?: Element;
  /** A function that receives ref and set context in headerRef */
  setHeaderRef: Function;
};
