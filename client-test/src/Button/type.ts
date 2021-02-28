import { ReactNode, MouseEventHandler, FocusEventHandler } from 'react';
import { BadgeProps } from '../Badge';
export type ButtonType = 'default' | 'primary' | 'danger';
export type ButtonHtmlType = 'submit' | 'button' | 'reset';
export type ButtonOnClick = MouseEventHandler<HTMLButtonElement>;
export type ButtonFocusEventHandler = FocusEventHandler<HTMLButtonElement>;
export type ButtonLabel = ReactNode;

export const ButtonTypes: { [key: string]: ButtonType } = {
  default: 'default',
  primary: 'primary',
  danger: 'danger',
};

export type BadgePropsExtended = string | number | BadgeProps;

export type ButtonBadgeProps = {
  /** id attribute, optional id */
  id?: string;
  /** string | number | BadgeProps */
  badge: BadgePropsExtended;
};

export type ButtonProps = {
  /** Button click callback, triggered when the button is clicked, (optional) */
  onClick?: ButtonOnClick;
  /** Button blur callback, triggered when the button is losing focus, (optional) */
  onBlur?: ButtonFocusEventHandler;
  /** Button focus callback, triggered when the button is focused, (optional) */
  onFocus?: ButtonFocusEventHandler;
  /** Button Enable/Disable status, (optional) */
  isDisabled?: boolean;
  /** Button id attribute, optional id */
  id?: string;
  /** Button custom Icon, (optional) */
  icon?: ReactNode;
  /** Button HTML type, use one from the following type: submit | button | reset, (optional) */
  htmlType?: ButtonHtmlType;
  /** Button css style type, use one from the following css type: default | text | primary | danger, (optional) */
  type?: ButtonType;
  /** Button class name attribute, (optional) */
  className?: string;
  /** Button block status, (optional) */
  isBlock?: boolean;
  /** Button css text transform into Uppercase, (optional) */
  isUppercase?: boolean;
  /** Button css text style, (optional) */
  isText?: boolean;
  /** Button css circular style (optional) */
  isCircular?: boolean;
  /** Button css margin left -12px (optional) */
  isLeftIndent?: boolean;
  /** Button label */
  children?: ReactNode;
  /** To show if Button is in loading status */
  isLoading?: boolean;
  /** Title of button when it is in loading */
  loadingTitle?: string;
  /** To have a badge on top of button */
  badge?: BadgePropsExtended;
  /** Add ariaLabel for WCAG accessibility compliance when button has no text, (optional) */
  ariaLabel?: string;
  /** Role is for WCAG accessibility compliance, defaults to "button" if omitted (optional) */
  role?: string;
  /** ariaChecked is for WCAG accessibility compliance, (optional). This prop was added primarily
   * for use within the Switcher component, so unless you have a special reason to use it, you can
   * ignore it.
   */
  ariaChecked?: string;
  /** ariaHaspopup is for WCAG accessibility compliance, (optional). This prop was added primarily
   * for use within the Dropdown component, so unless you have a special reason to use it, you can
   * ignore it.
   */
  ariaHaspopup?: boolean;
  /** ariaExpanded is for WCAG accessibility compliance, (optional). This prop was added primarily
   * for use within the Dropdown component, so unless you have a special reason to use it, you can
   * ignore it.
   */
  ariaExpanded?: boolean;    
};

export type ButtonStates = {};
