// tslint:disable member-ordering
import React, { Component } from 'react';
import LayoutContent from './component/LayoutContent';
import LayoutHeader from './component/LayoutHeader';
import LayoutContext from './component/LayoutContext';
import {
  getClass,
} from '../_lib/helper';
import {
  LayoutProps,
  MenuStateType,
  LayoutContextProps,
  LayoutThemes,
} from './type';
import './Layout.scss';

class Layout extends Component<LayoutProps, LayoutContextProps> {
  static defaultProps = {
    isStyleReboot: true,
    theme: LayoutThemes.default,
  };
  static Header = LayoutHeader;
  static Content = LayoutContent;  
  private bodyScrollTop = 0;

  constructor(props: LayoutProps) {
    super(props);
    const { isStyleReboot } = props;
    if (isStyleReboot) {
      this.getRebootStyle();
    }
  }

  /* istanbul ignore next */
  getRebootStyle() {
    require('../_lib/style/_reboot.scss');
  }

  setMenuStatus = (menuState: MenuStateType) => {
    this.setState({ menuState });
  };

  toggleSidePanelOverlay = () => {
    this.setState(({ isSidePanelOverlay }: LayoutContextProps) => ({
      isSidePanelOverlay: !isSidePanelOverlay,
    }));
  };

  toggleSearchOpen = () => {
    this.setState(({ isSearchOpen }: LayoutContextProps) => ({
      isSearchOpen: !isSearchOpen,
    }));
  };

  setHeaderRef = (ref: any) => {
    this.setState({ headerRef: ref }, () => {
      const onUpdateHeaderRef = new CustomEvent('onUpdateHeaderRef', {
        detail: {
          target: ref,
        },
      });
      window.dispatchEvent(onUpdateHeaderRef);
    });
  };

  setLayoutRef = (ref: any) => {
    this.setState({ layoutRef: ref }, () => {
      const onUpdateLayoutRef = new CustomEvent('onUpdateLayoutRef', {
        detail: {
          target: ref,
        },
      });
      window.dispatchEvent(onUpdateLayoutRef);
    });
  };

  // For the LayoutContext we define the value as state to prevent
  // unnecessary rendering. Please refer to Context API for more info.
  state: LayoutContextProps = {
    menuState: 'wide',
    isContentScrolling: false,
    isSidePanelOpen: false,
    isSidePanelOverlay: false,
    isSearchOpen: false,
    setMenuStatus: this.setMenuStatus,
    toggleSidePanelOverlay: this.toggleSidePanelOverlay,
    toggleSearchOpen: this.toggleSearchOpen,
    layoutRef: undefined,
    setLayoutRef: this.setLayoutRef,
    headerRef: undefined,
    setHeaderRef: this.setHeaderRef,
  };

  render() {
    const {
      menuState,
      isSearchOpen,      
      isSidePanelOpen,      
    } = this.state;
    const { children, theme } = this.props;

    return (
      <div
        className={getClass(
          'layout',
          {
            [`menu-status-${menuState}`]: true,
            'elements': true, // To solve the classname conflict.
          },
          {
            'is-search-open': isSearchOpen,
            'is-sidepanel-open': isSidePanelOpen,
            [`theme-${theme}`]: theme,
          }
        )}
      >
        <LayoutContext.Provider value={this.state}>          
          <div className="layout__main-app">{children}</div>
        </LayoutContext.Provider>
      </div>
    );
  }
}

export default Layout;
