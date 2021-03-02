import { ReactChild, ReactNode } from 'react';
import { ButtonOnClick, ButtonProps } from '../Button';
import { BadgeProps } from '../Badge';

export type ActionCardButtonProp = Pick<
  ButtonProps,
  | 'isDisabled'
  | 'type'
  | 'isUppercase'
  | 'isText'
  | 'isCircular'
  | 'isLoading'
  | 'loadingTitle'
  | 'id'
> & {
  icon: ReactNode;
  onClick: ButtonOnClick;
  label: string;
};

export type StatusBadgeProp = Pick<BadgeProps, 'type' | 'icon'> & {
  label: string;
};
export type StatusPopoverBadgeProp = Pick<BadgeProps, 'type' | 'icon'> & {
  label: string;
  content: ReactNode;
};

export type DropdownOption = {
  icon?: ReactChild;
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  withDivider?: boolean;
};

export type HeaderOptionsCustom = Pick<
  ButtonProps,
  'icon' | 'onClick' | 'ariaLabel' | 'id'
>;

export type HeaderOptionsDropdown = {
  id?: string;
  icon?: ReactNode;
  dropdownOptions: DropdownOption[];
  /** ariaLabel is for WCAG accessibility compliance. Although this is an optional prop,
   * you must use it in order to be WCAG compliant.
   */
  ariaLabel?: string;
};

export type HeaderOptions = HeaderOptionsCustom | HeaderOptionsDropdown;

// Props:
export type ActionCardHeaderProps = {
  icon?: ReactNode;
  title?: string;
  titleAddOn?: string;
  badge?: StatusBadgeProp;
  popoverBadge?: StatusPopoverBadgeProp;
  options?: HeaderOptions;
};

export type ActionCardHeaderBadgeProps = {
  badge: StatusBadgeProp;
};

export type ActionCardHeaderPopoverBadgeProps = {
  popoverBadge: StatusPopoverBadgeProp;
};

export type ActionCardHeaderOptionsProps = {
  options: HeaderOptions;
};

export type ActionCardContentProps = {
  icon?: ReactNode;
  heading: string;
  headingAddOn?: ReactNode;
  children: ReactNode;
  /**
   * role is for WCAG accessibility compliance, (optional). This prop was added primarily
   * for use within child components that might be used inside the ActionCard component
   * (e.g. the Row and Col children components in the Demo). So unless you have a special reason
   * to use it, you can ignore it.
   */
  role?: string;
};

export type ActionCardFooterProps = {
  actions: ActionCardButtonProp[];
};

export type ActionCardProps = {
  /** ActionCard content (must be ActionCard.Content component) */
  children: ReactNode;
  /** ActionCard id attribute (optional) */
  id?: string;
  /** Action card header (optional) */
  header?: ActionCardHeaderProps;
  /** ActionCard footer buttons (optional) */
  actions?: ActionCardButtonProp[];
  /** ActionCard expand/collapse functionality (optional) */
  isExpandable?: boolean;
  /** expandBtnAriaLabel is for WCAG accessibility compliance, defaults to "Expand" if omitted (optional). */
  expandBtnAriaLabel?: string;
};

export type ActionCardState = {
  isExpanded: boolean;
};
