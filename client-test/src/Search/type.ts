import { FocusEventHandler, KeyboardEventHandler } from 'react';

export type SearchProps = {
  /** If search component is visible */
  isVisible: boolean;
  /** On close event handler */
  onClose?: Function;
  /** On search text box change event handler */
  onChange?: (newValue: string) => void;
  /** On search text box key press event handler */
  onKeyPress?: KeyboardEventHandler;
  /** Search text box value */
  value?: null | string;
  /** id attribute */
  id?: string;
  /** class name attribute */
  className?: string;
  /** Search text box on blur event handler */
  onBlur?: FocusEventHandler;
  /** Search text box on focus event handler */
  onFocus?: FocusEventHandler;
  /** Search text box on submit event handler */
  onSubmit?: Function;
  /** Define the placeholder of search */
  placeholder?: string;
  /** Add ariaLabel for WCAG accessibility compliance, (optional) */
  ariaLabel?: string;
  /** To make the submit button enabled always */
  isSubmitEnabledAlways?: boolean;
};
