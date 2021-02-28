import { ReactNode } from 'react';

export type IconSize = 'md' | 'sm' | 'xs';

export interface IconProps {
  /** The content of a icon */
  children?: ReactNode | string;
  /** Add custom class to class attribute */
  className?: string;
  /** Icon size, use one from the following: IconSize =  'md' | 'sm'| 'xs' */
  size?: IconSize;
  /** Icon title */
  title?: string;
}
