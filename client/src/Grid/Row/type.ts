import { ReactNode } from 'react';

export type RowDirection =
  | null
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';
export type RowWrap = null | 'wrap' | 'nowrap' | 'wrap-reverse';
export type RowJustifyContent =
  | null
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around';
export type RowAlignItems =
  | null
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch';
export type RowAlignContent =
  | null
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'stretch';

export type RowProps = {
  /** Content of row */
  children?: ReactNode;
  /** order atribute of row */
  isNoGutters?: boolean;
  /** order atribute of row */
  isInline?: boolean;
  /**
   * order atribute of row, use one from the following:
   * RowDirection = null | 'row' | 'column' | 'row-reverse' | 'column-reverse'
   */
  direction?: RowDirection;
  /**
   * order atribute of row, use one from the following:
   * RowWrap = null | 'wrap' | 'nowrap' | 'wrap-reverse'
   */
  wrap?: RowWrap;
  /**
   * order atribute of row, use one from the following:
   * RowJustifyContent = null | 'start' | 'end' | 'center' | 'between' | 'around'
   */
  justifyContent?: RowJustifyContent;
  /**
   * order atribute of row, use one from the following:
   * RowAlignItems = null | 'start' | 'end' | 'center' | 'baseline' | 'stretch'
   */
  alignItems?: RowAlignItems;
  /**
   * order atribute of row, use one from the following:
   * RowAlignContent = null | 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
   */
  alignContent?: RowAlignContent;
  /** xs responsive atribute of row */
  xs?: object;
  /** sm responsive atribute of row */
  sm?: object;
  /** md responsive atribute of row */
  md?: object;
  /** lg responsive atribute of row */
  lg?: object;
  /** xl responsive atribute of row */
  xl?: object;
  /** xxl responsive atribute of row */
  xxl?: object;
  /** key atribute of col */
  key?: string | number;
  /** Row class name attribute, (optional) */
  className?: string;
  /** WCAG role */
  role?: string;
};

export type RowResponsivePropertiesType = {
  property: string;
  prefix: string;
};
