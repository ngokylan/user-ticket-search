import { ReactNode } from 'react';
import {
  TypographyDecoration,
  TypographyTransform,
  TypographyColor,
} from '../type';
export type TextHtmlTag = 'span' | 'strong' | 'small';
export type TextSize = 'lg' | 'rg' | 'sm' | 'xs' | 'button' | 'status';

export type TextProps = {
  /** ID of the component */
  id?: string;
  /** Children */
  children?: ReactNode;
  /** HTML tag to render the component as : 'span' | 'strong' | 'small' */
  htmlTag?: TextHtmlTag;
  /** Size that is defined in the Design System : 'lg' | 'rg' | 'sm' | 'xs' | 'button' | 'status' */
  size?: TextSize;
  /** It decorates its text node : 'overline', 'lineThrough', 'underline' */
  decoration?: TypographyDecoration;
  /** Style the text to be bold */
  isBold?: boolean;
  /** Style the text to be italic */
  isItalic?: boolean;
  /** Style the text node to transform into : 'lowercase', 'uppercase', 'capitalize' */
  transform?: TypographyTransform;
  /** Style the text node's colour into one of defined in Design System :
   * 'primary', 'secondary', 'black', 'gray', 'information', 'warning', 'success', 'danger'
   */
  color?: TypographyColor;
  /** class name attribute, (optional) */
  className?: string;
};
