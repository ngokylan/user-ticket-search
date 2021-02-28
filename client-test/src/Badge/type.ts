import { ReactNode } from 'react';

export type BadgeType =
  | 'grey'
  | 'outlined'
  | 'warning'
  | 'info'
  | 'success'
  | 'danger';
export const BadgeTypes: { [key: string]: BadgeType } = {
  grey: 'grey',
  outlined: 'outlined',
  warning: 'warning',
  info: 'info',
  success: 'success',
  danger: 'danger',
};

export type BadgeRole = 'info' | 'status' | 'label';

export type BadgeProps = {
  /**
   * Badge type, use one from the following:
   * BadgeType = 'grey' | 'outlined' | 'warning' | 'info' | 'success' | 'danger'
   */
  type: BadgeType;
  /**
   * Badge role, use one from the following:
   * BadgeRole = 'info' | 'status' | 'label'
   */
  role?: BadgeRole;
  /** Custom id attribute */
  id?: string;
  /** Add custom class to class attribute */
  className?: string;
  /** To enable popover Icon */
  hasPopoverIcon?: boolean;
  /** Badge icon */
  icon?: ReactNode;
  /** The content of a badge */
  children?: ReactNode;
  /** To render badge in circular */
  isCircular?: boolean;
};
