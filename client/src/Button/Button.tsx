import React, { Component } from 'react';
import ButtonLabel from './component/ButtonLabel';
import ButtonIcon from './component/ButtonIcon';
import Spinner from '../Spinner';
import { ButtonProps, ButtonStates } from './type';
import styled, { defaultTheme } from '../_lib/style';
import { getClass } from '../_lib/helper';
import './Button.scss';

const StyledButton = styled.button<any>`
  ${props => {
    return (
      (props.buttonType === 'primary' &&
        !props.isText &&
        !props.isDisabled &&
        props.theme &&
        props.theme.button &&
        props.theme.button.color &&
        props.theme.button.background &&
        `
        color: ${props.theme.button.color} !important;
        background: ${props.theme.button.background}!important;
      `) ||
      (props.buttonType === 'primary' &&
        props.isText &&
        !props.isDisabled &&
        props.theme &&
        props.theme.link &&
        props.theme.link.color &&
        `
        color: ${props.theme.link.color} !important;
      `)
    );
  }}
`;

StyledButton.defaultProps = {
  theme: {
    button: defaultTheme.button,
    link: defaultTheme.link,
  },
};

class Button extends Component<ButtonProps, ButtonStates> {
  static defaultProps = {
    htmlType: 'button',
    type: 'default',
    isUppercase: true,
    isText: false,
  };

  /**
   * handle on click event
   */
  handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { isDisabled, isLoading, onClick } = this.props;
    if (e === undefined) {
      return;
    }

    if (isDisabled || isLoading) {
      e.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  /**
   * Handle onblur event
   */
  handleOnBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(e);
    }
  };

  render() {
    const {
      id,
      icon,
      type,
      children,
      isDisabled,
      htmlType,
      className,
      isBlock,
      isUppercase,
      isText,
      isLoading,      
      isCircular,
      isLeftIndent,      
      ariaLabel,
      role,
      ariaChecked,
      ariaHaspopup,
      ariaExpanded,      
    } = this.props;

    const buttonClassNames = getClass('btn', className, {
      [type as string]: type,
      icon: icon,
      block: isBlock,
      'is-uppercase': isUppercase,
      'is-text': isText,
      'is-disabled': isDisabled,
      'is-loading': isLoading,
      'is-circular': isCircular,
      'is-left-indent': isLeftIndent,
    });

    const roleName = role ? role : 'button';

    const renderButton = (
      <StyledButton
        id={id}
        data-testid={`btn-${id || 'default'}`}
        className={buttonClassNames}
        onClick={this.handleOnClick}
        onBlur={this.handleOnBlur}
        isDisabled={isDisabled}
        buttonType={type}
        isBlock={isBlock}
        isText={isText}
        type={htmlType}
        disabled={isDisabled}
        aria-label={ariaLabel}
        role={roleName}
        aria-checked={ariaChecked}
        aria-haspopup={ariaHaspopup}
        aria-expanded={ariaExpanded}
      >
        {isLoading && (
          <span className="btn__loading">
            <Spinner />
          </span>
        )}
        {icon && <ButtonIcon icon={icon} id={id} />}
        {children && <ButtonLabel id={id}>{children}</ButtonLabel>}
        <span className="btn__hover" />
        <span className="btn__focused" />
        <span className="btn__pressed" />        
      </StyledButton>
    );
   
    return renderButton;
  }
}

export default Button;
