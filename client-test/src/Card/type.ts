import { ReactNode } from 'react';
import { BadgeProps } from '../Badge';

export interface CardProps {
  /** Card id attribute, optional id */
  id?: string;
  /** Card heading title */
  heading?: ReactNode;
  /** Card description */
  description?: string;
  /** Card content */
  children: ReactNode;
  /** Additional class */
  className?: string;
  /** Make height 100% */
  isFullHeight?: boolean;
  /** To place option content to the right side of heading. such as Button */
  option?: ReactNode;
  /** small heading above heading */
  prefix?: string;
  /** image in the header */
  image?: string;
  /** array of the badge components which are displayed on image */
  badges?: BadgeProps[];
  /** function that is triggered if the card is clicked */
  onClick?: Function;
  /** Role is for WCAG accessibility compliance (optional) */
  role?: string;
}
