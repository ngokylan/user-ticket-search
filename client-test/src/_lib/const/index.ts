export const SIZE_SMALL = 'small';
export type SIZE_SMALL = typeof SIZE_SMALL;
export const SIZE_MEDIUM = 'medium';
export type SIZE_MEDIUM = typeof SIZE_MEDIUM;
export const SIZE_LARGE = 'large';
export type SIZE_LARGE = typeof SIZE_LARGE;
export type SIZE = SIZE_SMALL | SIZE_MEDIUM | SIZE_LARGE;

export const STATUS_TYPE_WARNING = 'warning';
export type STATUS_TYPE_WARNING = typeof STATUS_TYPE_WARNING;
export const STATUS_TYPE_INFO = 'info';
export type STATUS_TYPE_INFO = typeof STATUS_TYPE_INFO;
export const STATUS_TYPE_SUCCESS = 'success';
export type STATUS_TYPE_SUCCESS = typeof STATUS_TYPE_SUCCESS;
export const STATUS_TYPE_DANGER = 'danger';
export type STATUS_TYPE_DANGER = typeof STATUS_TYPE_DANGER;

export const DIRECTION_VERTICAL = 'vertical';
export type DIRECTION_VERTICAL = typeof DIRECTION_VERTICAL;
export const DIRECTION_HORIZONTAL = 'horizontal';
export type DIRECTION_HORIZONTAL = typeof DIRECTION_HORIZONTAL;

export const PLACEMENT_TYPES = [
  'auto-start',
  'auto',
  'auto-end',
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
];

/**
 * Menu Constants
 */
export const MENU_STATE_TYPE_MIN = 'min';
export type MENU_STATE_TYPE_MIN = typeof MENU_STATE_TYPE_MIN;
export const MENU_STATE_TYPE_WIDE = 'wide';
export type MENU_STATE_TYPE_WIDE = typeof MENU_STATE_TYPE_WIDE;

export const SORT_ASC: string = 'asc';
export type SORT_ASC = typeof SORT_ASC;
export const SORT_DESC: string = 'desc';
export type SORT_DESC = typeof SORT_DESC;

export const TOTAL_GRID_COLS: number = 24;

/**
 * Pagination Constants
 */
export const PAGINATION_OPTIONS = [10, 20, 30, 40, 50, 100, 150, 200];
export const PAGINATION_FIRST_PAGE = 1;

/*
Grid Constants
*/
export type ColAlign =
  | null
  | 'auto'
  | 'start'
  | 'end'
  | 'center'
  | 'baseline'
  | 'stretch';

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

export const TIMELINE_DEFAULT_COLOR = '#DBDBDB';
export const TIMELINE_ACTIVE_COLOR = '#058c45';
