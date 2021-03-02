export type SpinnerSize = 'xl' | 'l' | 'm' | 's';

export type SpinnerProps = {
  color?: string;
  /** Custom id attribute */
  id?: string;
  size?: SpinnerSize;
  /** Role is for WCAG accessibility compliance, defaults to "status" if omitted, (optional) */
  role?: string;
  /** Aria Label is for WCAG accessibility compliance, defaults to "Loading..." if omitted, (optional) */
  ariaLabel?: string;
};
