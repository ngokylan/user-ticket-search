import React, { Component } from 'react';
import HeaderButtons from './component/HeaderButtons';
import HeaderTitle from './component/HeaderTitle';
import HeaderTitleAddon from './component/HeaderTitleAddon';
import HeaderTabs from './component/HeaderTabs';
import { getClass } from '../_lib/helper';
import { HeaderProps } from './type';
import './Header.scss';
import { ThemeContextProvider } from './component/ThemeContext';
import { HeaderTabsStyled } from './Styles';

function Header({
  children,
  backButton,
  buttons,
  primaryButton,
  tabs,
  subHeading,
  titleAddon,
  title,
  isSearchOpen,
  isBulkActionOpen,
  theme,
}: HeaderProps) {
  return (
    <ThemeContextProvider value={theme}>
      <div
        className={getClass(
          'header-wrapper',
          {},
          {
            search: isSearchOpen,
            'bulk-actions': isBulkActionOpen,
            'has-buttons': buttons,
            'has-back': backButton,
            'has-tabs': tabs,
            'has-subheading': subHeading,
          }
        )}
      >
        <div className={getClass('header', {}, { subpage: backButton })}>
          {children}
          <div className="header__base">
            <div className="header__top">
              {(buttons || primaryButton) && (
                <HeaderButtons
                  buttons={buttons}
                  primaryButton={primaryButton}
                />
              )}
              <div className="header__title-wrapper">               
                <div className="header__title-block-wrapper">
                  <div className="header__title-block">
                    <HeaderTitle subHeading={subHeading}>{title}</HeaderTitle>
                    <HeaderTitleAddon>{titleAddon}</HeaderTitleAddon>
                  </div>
                  {!!subHeading && (
                    <h2 className="header__sub-heading">{subHeading}</h2>
                  )}
                </div>
              </div>
            </div>
            {tabs && (
              <HeaderTabsStyled primaryColor={theme && theme.primaryColor}>
                <HeaderTabs tabs={tabs} />
              </HeaderTabsStyled>
            )}
          </div>
        </div>
      </div>
      <div className="header-wrapper__spacing" />
    </ThemeContextProvider>
  );
}

export default Header;
