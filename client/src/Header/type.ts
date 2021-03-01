import { MouseEventHandler, ReactNode } from 'react';
import { BadgeProps } from '../Badge';

export type HeaderProps = {
  /** The acceptable components are Search and BulkAction only. (optional) */
  children?: ReactNode;
  /**
   * Header action buttons goes next to the Primary button. (optional)
   * Mainly, it is used to show the Search/BulkAction buttons.
   * For more usage, please refer to the template app.
   */
  buttons?: Array<HeaderButtonProp>;
  /**
   * The primary themed button. The icon is optional if it's text only button. (optional)
   * It is shaped as below:
   *
   * PrimaryButtonType = {
   *   icon?: ReactNode;
   *   label: string;
   *   onClick: Function;
   * }
   */
  primaryButton?: PrimaryButtonType;
  /**
   * The back button is rendered with the left arrow icon automatically. (optional)
   *
   * BackButtonType = {
   * title: string;
   * onClick: Function;
   * ariaLabel?: string;
   * }
   */
  backButton?: BackButtonType;
  /** Title of the page. (optional) */
  title?: ReactNode;
  /**
   * Any nodes that goes to the end of title. (optional)
   * For now, the Badge is the only case.
   */
  titleAddon?: ReactNode;
  /** The Sub Heading goes under the main title. (optional)  */
  subHeading?: string;
  /**
   * To switch Header and BulkAction.
   * Please use it with Layout Context so it is also synced with the List Table. (optional)
   * For more usage, please refer to the template app.
   */
  isBulkActionOpen?: boolean;
  /**
   * To switch Header and Search. Please use it with Layout Context. (optional)
   * For more usage, please refer to the template app.
   */
  isSearchOpen?: boolean;
  /**
   * The second level navigation is rendered at the bottom of Header. (optional)
   * The array of these props.
   *
   * HeaderTabLinkProps = {
   * active: boolean;
   * label: string;
   * onClick: Function;
   * }
   */
  tabs?: Array<HeaderTabLinkProps>;
  theme?: Theme;
};

export type BackButtonType = {
  title: string;
  onClick: Function;
  /** Add ariaLabel for WCAG accessibility compliance. Although optional, you
   * must add an ariaLabel for full WCAG compliance.
   */
  ariaLabel?: string;
};

export type PrimaryButtonType = PrimaryButtonIconType | PrimaryButtonLabelType;
export type HeaderBadgePropsExtended = string | number | BadgeProps;

export type PrimaryButtonCoreType = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: Array<HeaderButtonProp>;
};

export type PrimaryButtonIconType = PrimaryButtonCoreType & {
  icon: ReactNode;
  label?: string;
  isDisabled?: boolean;
  badge?: HeaderBadgePropsExtended;
  /**
   * Add `ariaLabel` if `label` is empty or doesn't exist. For WCAG accessibility compliance.
   * Although optional, you must add an ariaLabel for full WCAG compliance.
   */
  ariaLabel?: string;
};

export type PrimaryButtonLabelType = PrimaryButtonCoreType & {
  icon?: ReactNode;
  label: string;
  isDisabled?: boolean;
  badge?: HeaderBadgePropsExtended;
  /**
   * Add `ariaLabel` if `label` is empty or doesn't exist or you want to have different `label`
   * and `ariaLabel` values. For WCAG accessibility compliance. Although optional, you must add
   * an ariaLabel for full WCAG compliance.
   */
  ariaLabel?: string;
};

export type HeaderButtonProp = {
  icon: ReactNode;
  label: string;
  onClick: Function;
  children?: Array<HeaderButtonProp>;
  hasDivider?: boolean;
  isDisabled?: boolean;
  badge?: HeaderBadgePropsExtended;
  /**
   * Add `ariaLabel` if `label` is empty or doesn't exist or you want to have different `label`
   * and `ariaLabel` values. For WCAG accessibility compliance. Although optional, you must add
   * an ariaLabel for full WCAG compliance.
   */
  ariaLabel?: string;
};

export type HeaderButtonsProps = {
  children?: ReactNode;
  buttons?: Array<HeaderButtonProp>;
  primaryButton?: PrimaryButtonType;
};

export type HeaderBackProps = {
  title?: string;
  onClick: Function;
  /** Add ariaLabel for WCAG accessibility compliance. Defaults to
   * 'Back to previous screen' if omitted.
   */
  ariaLabel?: string;
};

export type HeaderDetailsItemProps = {
  icon: ReactNode;
  content: any;
};

export type HeaderDetailsProps = {
  details: Array<HeaderDetailsItemProps>;
};

export type HeaderTabLinkProps = {
  active: boolean;
  label: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};

export type HeaderTabsProps = {
  tabs: Array<HeaderTabLinkProps>;
};

export type HeaderTitleProps = {
  children?: ReactNode;
  subHeading?: string;
};

export type Theme = {
  primaryColor?: string;
};
