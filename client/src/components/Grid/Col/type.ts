import { ReactNode } from 'react';

export type ColResponsiveOption = number | object;
export type ColAlign =
  | null
  | 'auto'
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch';

export type ColProps = {
  /** Content of col */
  children?: ReactNode;
  /** Span atribute of col */
  span?: number;
  /** If is auto */
  isAuto?: boolean;
  /** order atribute of col */
  order?: number;
  /** offset atribute of col */
  offset?: number;
  /**
   * align atribute of col, use one from the following:
   * ColAlign =  null | 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch'
   */
  align?: ColAlign;
  /** shrink atribute of col */
  shrink?: number;
  /** grow atribute of col */
  grow?: number;
  /** Fill atribute of col */
  isFill?: boolean;
  /** xs responsive atribute of col */
  xs?: ColResponsiveOption;
  /** sm responsive atribute of col */
  sm?: ColResponsiveOption;
  /** md responsive atribute of col */
  md?: ColResponsiveOption;
  /** lg responsive atribute of col */
  lg?: ColResponsiveOption;
  /** xl responsive atribute of col */
  xl?: ColResponsiveOption;
  /** xxl responsive atribute of col */
  xxl?: ColResponsiveOption;
  /** xxl responsive atribute of col */
  xxxl?: ColResponsiveOption;
  /** key atribute of col */
  key?: number | string;
  /** Col class name attribute, (optional) */
  className?: string;
  /** WCAG role */
  role?: string;
};

export type ColResponsivePropertiesType = {
  property: string;
  prefix: string;
};
