import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import { getClass } from '../../../_lib/helper';
import { HeaderButtonsProps, HeaderButtonProp } from '../type';
import './HeaderButtons.scss';
import { Placement } from 'popper.js';
import styled, { defaultTheme } from '../../../_lib/style';

const StyledPrimaryButtonWrapper = styled.div<any>`
  ${props => {
    return (
      props.theme &&
      props.theme.button &&
      props.theme.button.background &&
      `
      @media (max-width: 839.9px){
        button.btn--primary {
          background: transparent!important;
        }
        button.btn--primary.btn--icon .btn__icon{
          background-color:${props.theme.button.background}!important;
        }
      }
      `
    );
  }}
`;

StyledPrimaryButtonWrapper.defaultProps = {
  theme: {
    button: defaultTheme.button,
    link: defaultTheme.link,
  },
};

const HeaderButtonsPropTypes = {
  children: PropTypes.node,
  buttons: PropTypes.array,
  primaryButton: PropTypes.shape({
    icon: PropTypes.node,
    label: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.array,
    ariaLabel: PropTypes.string,
  }),
};

type HeaderButtonsState = {
  toggleButtons: boolean;
  toggleDropdownButtons: Array<boolean>;
  togglePrimary: boolean;
};

class HeaderButtons extends Component<HeaderButtonsProps, HeaderButtonsState> {
  static propTypes = HeaderButtonsPropTypes;
  private eventType = (function() {
    const htmlTag = document.querySelector('html');
    if (htmlTag && htmlTag.className.search('isIOS') !== -1) {
      return 'touchstart';
    }
    return 'mousedown';
  })();

  constructor(props: HeaderButtonsProps) {
    super(props);
    this.state = {
      toggleButtons: false,
      toggleDropdownButtons: [],
      togglePrimary: false,
    };
  }

  /** individual button dropdown handler */
  handleBtnDropdown = (key: number, visible?: boolean) => {
    let tmpState = this.state.toggleDropdownButtons;
    if (tmpState[key] === undefined || visible === false) {
      // set state by key of button
      tmpState[key] = false;
    }
    if (visible === undefined) {
      tmpState[key] = !tmpState[key];
    }
    this.setState(
      {
        toggleDropdownButtons: tmpState,
      },
      () => {
        this.handleBtnDropdownSetEvent(key);
      }
    );
  };

  handleBtnDropdownSetEvent = (key: number) => {
    let tmpState = this.state.toggleDropdownButtons;
    if (tmpState[key]) {
      document.body.addEventListener(this.eventType, e => {
        this.handleBtnDropdownRemoveEvent(e, key);
      });
    }
  };

  handleBtnDropdownRemoveEvent = (e: any, key: number) => {
    const dropdown = document.querySelector(
      '.header-btns__item--has-children'
    );
    if (dropdown && dropdown.contains(e.target)) {
      return false;
    }
    document.body.removeEventListener(this.eventType, event => {
      this.handleBtnDropdownRemoveEvent(event, key);
    });
    this.handleBtnDropdown(key, false);
  };

  handleBtnDropdownClassname = (children: boolean, key: number) => {
    return getClass(
      'header-btns__item',
      {},
      {
        'has-children': children,
        'has-children--is-opened': this.state.toggleDropdownButtons[key],
      }
    );
  };

  /** main dropdown handler */
  handleDropdown = (visible?: boolean) => {
    if (visible !== undefined) {
      setTimeout(() => {
        this.setState(
          {
            toggleButtons: visible,
          },
          this.handleDropdownSetEvent
        );
      }, 150); // Hack to trigger onClick before the dropdown gets closed by onBlur
    } else {
      this.setState(
        {
          toggleButtons: !this.state.toggleButtons,
        },
        this.handleDropdownSetEvent
      );
    }
  };

  handleDropdownSetEvent = () => {
    if (this.state.toggleButtons) {
      document.body.addEventListener(
        this.eventType,
        this.handleDropdownRemoveEvent
      );
    }
  };

  handleDropdownRemoveEvent = () => {
    document.body.removeEventListener(
      this.eventType,
      this.handleDropdownRemoveEvent
    );
    this.handleDropdown(false);
  };

  handleOnClickPrimary = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { primaryButton } = this.props;
    if (primaryButton) {
      if (primaryButton.children) {
        return this.handlePrimaryDropdown();
      }
      if (primaryButton.onClick) {
        return primaryButton.onClick(e);
      }
    }
  };

  handlePrimaryDropdown = (visible?: boolean) => {
    const { primaryButton } = this.props;
    if (primaryButton && primaryButton.children) {
      if (visible !== undefined) {
        this.setState(
          {
            togglePrimary: visible,
          },
          this.handlePrimaryDropdownSetEvent
        );
      } else {
        this.setState(
          {
            togglePrimary: !this.state.togglePrimary,
          },
          this.handlePrimaryDropdownSetEvent
        );
      }
    }
  };

  handlePrimaryDropdownSetEvent = () => {
    if (this.state.togglePrimary) {
      document.body.addEventListener(
        this.eventType,
        this.handlePrimaryDropdownRemoveEvent
      );
    }
  };

  handlePrimaryDropdownRemoveEvent = (e: any) => {
    const dropdown = document.querySelector('.header-btns__primary');
    if (dropdown && dropdown.contains(e.target)) {
      return false;
    }
    document.body.removeEventListener(
      this.eventType,
      this.handlePrimaryDropdownRemoveEvent
    );
    this.handlePrimaryDropdown(false);
  };

  handlePrimaryDropdownClassname = () => {
    return getClass(
      'header-btns__primary',
      {},
      {
        'is-opened': this.state.togglePrimary,
      }
    );
  };

  // TODO: fix me, abstract me to a simple function componentn called HeaderButtonsPrimaryItem
  primaryButton = () => {
    const { primaryButton } = this.props;
    if (primaryButton) {
      const primaryButtonTooltip = {
        title: primaryButton.label + '',
        placement: 'top' as Placement,
      };
      const button = (
        <Button
          type="primary"
          onClick={this.handleOnClickPrimary}
          icon={primaryButton.icon ? primaryButton.icon : ''}
          isDisabled={primaryButton.isDisabled}
          badge={primaryButton.badge}
          className={primaryButton.badge ? 'has-badge' : ''}          
          ariaLabel={primaryButton.ariaLabel || primaryButton.label}
        >
          {primaryButton.label}
        </Button>
      );

      return (
        <StyledPrimaryButtonWrapper
          className={this.handlePrimaryDropdownClassname()}
        >
          {button}
          {primaryButton.children && (
            <div className="header-btns__primary__dropdown">
              {this.renderButtonChildren(primaryButton.children, () => {
                this.handlePrimaryDropdown(false);
              })}
            </div>
          )}
        </StyledPrimaryButtonWrapper>
      );
    }
    return null;
  };

  buttonChildrenClick = (e: any, onClick: any, closeDropdownCallback: any) => {
    closeDropdownCallback();
    onClick(e);
  };

  renderButtonChildren(
    children: Array<HeaderButtonProp>,
    closeDropdownCallback: any
  ) {
    if (children) {
      return (
        <div className="header-btns__item-child">
          {children.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <Button
                  isText={true}
                  isUppercase={false}
                  onClick={e =>
                    this.buttonChildrenClick(
                      e,
                      item.onClick,
                      closeDropdownCallback
                    )
                  }
                  icon={item.icon}
                  key={key}
                  isDisabled={item.isDisabled}
                  ariaLabel={item.label || item.ariaLabel}
                >
                  {item.label}
                </Button>
                {item.hasDivider && (
                  <div className="header-btns__divider" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      );
    }
    return null;
  }

  handleBtnClick = (item: HeaderButtonProp, key: number) => {
    if (item.children) {
      return this.handleBtnDropdown(key);
    } else {
      return item.onClick(); // Need to fix it triggers all onClick passed in buttons
    }
  };

  renderButton(item: HeaderButtonProp, key: number) {
    if (item) {
      const tooltip = {
        title: item.label,
        placement: 'top' as Placement,
      };
      return (
        <React.Fragment key={key}>
          <div
            className={this.handleBtnDropdownClassname(!!item.children, key)}
          >
            <Button
              isText={true}
              isUppercase={false}
              onClick={e => this.handleBtnClick(item, key)}
              icon={item.icon}
              key={key}
              isDisabled={item.isDisabled}
              badge={item.badge}
              className={item.badge ? 'has-badge' : ''}
              ariaLabel={item.label || item.ariaLabel}              
            >
              {item.label}
            </Button>

            {item.children &&
              this.renderButtonChildren(item.children, () => {
                this.handleBtnDropdown(key, false);
              })}
          </div>
          {item.hasDivider && <div className="header-btns__divider" />}
        </React.Fragment>
      );
    }
    return null;
  }

  // TODO: fix me, abstract me to a simple function componentn called HeaderButtonsItems
  // TODO: fix me, need optimisation
  headerButtons = () => {
    const { buttons } = this.props;
    if (buttons) {
      const countButtons: number = buttons.length;
      let wrapperDesktop = <></>;
      let buttonsDesktop = [];
      let wrapperMobile = <></>;
      let buttonsMobile = [];
      let buttonsDefault = [];
      let key = 0;
      if (countButtons >= 5) {
        let idx: number = 3;
        for (idx; idx < countButtons; idx++) {
          buttonsDesktop.push(this.renderButton(buttons[idx], key++));
        }
        wrapperDesktop = (
          <div className="header-btns__desktop">{buttonsDesktop}</div>
        );
        idx = 1;
        for (idx; idx < 3; idx++) {
          buttonsMobile.push(this.renderButton(buttons[idx], key++));
        }
        wrapperMobile = (
          <div className="header-btns__mobile">
            {buttonsMobile}
            {wrapperDesktop}
          </div>
        );
        return (
          <>
            {this.renderButton(buttons[0], key++)}
            {wrapperMobile}
          </>
        );
      } else if (countButtons < 5 && countButtons > 2) {
        let idx: number = 1;
        for (idx; idx < countButtons; idx++) {
          buttonsMobile.push(this.renderButton(buttons[idx], key++));
        }
        wrapperMobile = (
          <div className="header-btns__mobile">{buttonsMobile}</div>
        );
        return (
          <>
            {this.renderButton(buttons[0], key++)}
            {wrapperMobile}
          </>
        );
      } else {
        let idx: number = 0;
        for (idx; idx < countButtons; idx++) {
          buttonsDefault.push(this.renderButton(buttons[idx], key++));
        }
        return buttonsDefault;
      }
    }
    return null;
  };

  render() {
    const { buttons } = this.props;
    const { toggleButtons } = this.state;
    const countButtons = buttons && buttons.length ? buttons.length : 0;

    return (
      <>
        <div
          className={getClass(
            'header-btns',
            {},
            { toggle: toggleButtons }
          )}
        >
          {this.headerButtons()}
          <span
            className="header-btns__toggle"
            data-visible-mobile={countButtons > 2 ? 'true' : 'false'}
            data-visible-desktop={countButtons > 4 ? 'true' : 'false'}
          >          
          </span>
          {this.primaryButton()}
        </div>
      </>
    );
  }
}

export default HeaderButtons;
