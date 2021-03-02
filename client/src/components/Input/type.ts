import {
  ChangeEventHandler,
  KeyboardEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  RefObject,
} from 'react';

export type InputType = 'text' | 'email' | 'number' | 'password' | 'search';
export type InputStatus = 'error' | 'success' | 'warning';

export type InputProps = {
  /** Input change callback, triggered when value is changed */
  onChange: ChangeEventHandler<HTMLInputElement>;
  /** Input click callback */
  onClick?: MouseEventHandler<HTMLInputElement>;
  /** Input mouse down callback */
  onMouseDown?: MouseEventHandler<HTMLInputElement>;
  /** Input key down callback, triggered when user presses a key, (optional) */
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  /** Input enter key press callback, triggered when the 'enter' button key is pressed, (optional) */
  onEnterPress?: KeyboardEventHandler<HTMLInputElement>;
  /** Input key press call back, triggered when any button key is pressed, (optional) */
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  /** Input losing focus callback, triggered when the input is losing focus, (optional) */
  onBlur?: FocusEventHandler<HTMLInputElement>;
  /** Input focus callback, triggered when the input is focussed, (optional) */
  onFocus?: FocusEventHandler<HTMLInputElement>;
  /** Input statusk, use one from the following: error | success | warning, (optional) */
  status?: InputStatus;
  /** Input enabled/disabled status, (optional) */
  isDisabled?: boolean;
  /** Input readonly status, (optional) */
  isReadOnly?: boolean;
  /** Input hidden status, (optional) */
  isHidden?: boolean;
  /** Input placeholder, (optional) */
  placeholder?: string;
  /** Input htmlType, one from the following: text | email | number | password | search, (optional) */
  htmlType?: InputType;
  /** Input id attribute, (optional) */
  id?: string;
  /** Input name attribute, (optional) */
  name?: string;
  /** Input icon attribute, (optional) */
  icon?: string;
  /** Input value, one from the following type: string | number, (optional) */
  value?: string | number;
  /** Whether or not it should be auto focus  */
  autoFocus?: boolean;
  /** Input DOM reference */
  ref?: RefObject<HTMLInputElement>;
  /** tabIndex is for WCAG accessibility compliance (optional).
   * By default, `tabIndex` defaults to zero, which means the element
   * should be focusable in sequential keyboard navigation, in the
   * order defined by the document's source order.
   * It is recommended that you avoid using tabIndex values greater than 0.
   * Doing so makes it difficult for people who rely on assistive technology
   * to navigate and operate page content. Instead, write the document with
   * the elements in a logical sequence. See here for more info:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   */
  tabIndex?: number;
  /** ariaLabel is for WCAG accessibility compliance (optional)
   * For full WCAG compliance, you must include an `ariaLabel` whenever
   * the input field does not have an associated 'label' element.
   * Please, read links below for the explanation:
   * https://dequeuniversity.com/rules/axe/3.3/label?application=AxeChrome
   * https://getbootstrap.com/docs/4.3/components/input-group/#accessibility
   */
  ariaLabel?: string;
  /** ariaDescribedby is for WCAG accessibility compliance (optional)
   * Use for linking the input component other HTML elements (e.g span, div,
   * button, etc) that provide information about the input field,
   * by referencing the element's ID property.
   * Please, see the example and the explanation by the link below
   * https://getbootstrap.com/docs/4.3/components/input-group/#button-addons
   */
  ariaDescribedby?: string;
  /** ariaInvalid is for WCAG accessibility compliance (optional)
   * The aria-invalid attribute is used to indicate that the value entered into an
   * input field does not conform to the format expected by the application and
   * is therefore invalid. For full WCAG compliance, you should always ensure
   * this prop has a value if the input field fails during form validation.
   * If it fails, then `ariaInvalid` should be set to `true`, and the prop
   * `ariaErrorMessage` should be given a value as well. See this link for more
   * info:
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute
   */
  ariaInvalid?: boolean;
  /** ariaErrorMessageId is for WCAG accessibility compliance (optional)
   * This is the ID of the element describing the error (for example div, span, etc.)
   */
  ariaErrorMessageId?: string;
};

export type InputStates = {};
