import React, { ReactNode } from 'react';
import { getClass } from '../../_lib/helper';
import { PlaceholderHeaderProps } from './type';
import './PlaceholderHeader.scss';

/**
 * Header buttons
 */
function HeaderButtons() {
  return (
    <div className="header-btns header-btns--placeholder">
     
    </div>
  );
}

/**
 * Get tabs
 *
 * @param numberOfTabs
 */
function getTabs(numberOfTabs: number): ReactNode[] {
  const elements: ReactNode[] = [];
  for (let i = 0; i < numberOfTabs; i++) {
    elements.push(
      <li className="tabs__item tabs__item--placeholder" key={i}>
       
      </li>
    );
  }

  return elements;
}

/**
 * Placeholder header
 */
function PlaceholderHeader({
  hasButtons,
  hasBackButton,
  hasSubHeading,
  hasTabs,
  numberOfTabs,
  id,
}: PlaceholderHeaderProps) {
  const subHeading = 'Some sub heading';
  const wrapperClassName = getClass(
    'header-wrapper',
    {},
    {
      'has-buttons': hasButtons,
      'has-back': hasBackButton,
      'has-tabs': hasTabs,
      'has-subheading': hasSubHeading,
    }
  );
  const headerClassName = getClass(
    'header',
    {},
    {
      subpage: hasBackButton,
    }
  );

  return (
    <>
      <div
        id={id}
        data-testid={`header-wrapper-${id || 'default'}`}
        className={wrapperClassName}
      >
        <div className={headerClassName}>
          <div className="header__base">
            <div className="header__top">
              {hasButtons && <HeaderButtons />}
              <div className="header__title-wrapper">              
                <div className="header__title-block-wrapper">
                  <div className="header__title-block header__title-block--placeholder">
                    
                  </div>
                  {hasSubHeading && (
                    <h2 className="header__sub-heading header__sub-heading--placeholder">
                      
                    </h2>
                  )}
                </div>
              </div>
            </div>
            {hasTabs && (
              <div className="tabs" id="Tab">
                <nav className="tabs__nav" id="TabNav">
                  <ul>{getTabs(numberOfTabs as number)}</ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="header-wrapper__spacing" />
    </>
  );
}

PlaceholderHeader.defaultProps = {
  hasSubHeading: true,
  hasBackButton: true,
  hasButtons: true,
  hasTabs: true,
  numberOfTabs: 3,
};

export default PlaceholderHeader;
