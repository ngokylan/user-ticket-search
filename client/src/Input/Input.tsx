import React, { Component, createRef } from 'react';
import { getClass } from '../_lib/helper';
import { InputProps, InputStates } from './type';
import './Input.scss';

class Input extends Component<InputProps, InputStates> {
  static defaultProps: Partial<InputProps> = {
    isReadOnly: false,
    isDisabled: false,
    isHidden: false,
    htmlType: 'text',
    tabIndex: 0,
  };

  private inputRef = createRef<HTMLInputElement>();

  componentDidUpdate() {
    if (this.props.autoFocus && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { isDisabled, onChange, onEnterPress } = this.props;
    if (e === undefined) {
      return;
    }

    if (isDisabled) {
      e.stopPropagation();
      return;
    }

    if ((e as any).keyCode === 13 && onEnterPress) {
      onEnterPress(e as any);
    }

    if (onChange) {
      onChange(e);
    }
  };

  handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // TODO: Add isDisabled check
    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  };

  handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { isDisabled, onEnterPress, onKeyPress } = this.props;
    if (e === undefined) {
      return;
    }

    if (isDisabled) {
      e.stopPropagation();
      return;
    }

    if (e.charCode === 13 && onEnterPress) {
      onEnterPress(e);
    }

    if (onKeyPress) {
      onKeyPress(e);
    }
  };

  handleMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
    const { onMouseDown } = this.props;
    if (onMouseDown) {
      onMouseDown(e);
    }
  };

  handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(e);
    }
  };

  handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(e);
    }
  };

  render() {
    const {
      children,
      isDisabled,
      isReadOnly,
      isHidden,
      value,
      status,
      id,
      name,
      icon,
      htmlType,
      autoFocus,
      ref,
      placeholder,
      tabIndex,
      ariaLabel,
      ariaDescribedby,
      ariaInvalid,
      ariaErrorMessageId,
    } = this.props;

    const className: string = getClass('input', {
      [`input--on-${status}`]: status,
    });

    const ariaInvalidStatus =
      ariaInvalid || status === 'error' || status === 'warning';

    return (
      <input
        id={id}
        data-testid={`input-${id || 'default'}`}
        className={className}
        onClick={this.handleClick}
        onChange={this.handleOnChange}
        onKeyPress={this.handleOnKeyPress}
        onBlur={this.handleOnBlur}
        onFocus={this.handleOnFocus}
        disabled={isDisabled}
        readOnly={isReadOnly}
        hidden={isHidden}
        value={value}
        type={htmlType}
        name={name}
        placeholder={placeholder}
        onMouseDown={this.handleMouseDown}
        ref={this.inputRef}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-invalid={ariaInvalidStatus}
        aria-errormessage={
          ariaInvalidStatus && ariaErrorMessageId
            ? ariaErrorMessageId
            : undefined
        }
      />
    );
  }
}

export default Input;
