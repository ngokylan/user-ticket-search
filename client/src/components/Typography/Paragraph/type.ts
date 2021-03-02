import { ReactNode } from 'react';
import {
  TypographyAlign,
  TypographyDecoration,
  TypographyTransform,
  TypographyColor,
} from '../type';
export type ParagraphSize = 'lg' | 'rg' | 'sm' | 'xs';

export type ParagraphProps = {
  /** ID of the component */
  id?: string;
  /** Children */
  children?: ReactNode;
  /** Size that is defined in the  Design System : 'lg', 'rg', 'sm', 'xs' */
  size?: ParagraphSize;
  /** It aligns its node : 'left', 'center', 'right', 'justify' */
  align?: TypographyAlign;
  /** It decorates its text node : 'overline', 'lineThrough', 'underline' */
  decoration?: TypographyDecoration;
  /** Style the text to be bold */
  isBold?: boolean;
  /** Style the text to be italic */
  isItalic?: boolean;
  /** Truncate the text in narrow space */
  isTruncate?: boolean;
  /** Style the text node to transform into : 'lowercase', 'uppercase', 'capitalize' */
  transform?: TypographyTransform;
  /** Style the text node's colour into one of defined in  Design System :
   * 'primary', 'secondary', 'black', 'information', 'warning', 'success', 'danger'
   * To ensure WCAG compliance, you must ensure that text color has sufficient
   * color contrast - for more information, see https://www.w3.org/TR/WCAG21/#contrast-minimum
   */
  color?: TypographyColor;
  /** class name attribute, (optional) */
  className?: string;
};
