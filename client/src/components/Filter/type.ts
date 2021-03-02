import { ReactChild } from 'react';

export type FilterProps = {
  /** Callback when user changes the selected status. */
  onStatusChange: (status: string) => void;
  /** Render prop for the content of the custom filters modal. */
  renderCustomFilters?: () => ReactChild;
  /** Callback when "Apply" is clicked in the custom filters modal. */
  onApplyCustomFilters?: () => void;
  /** Disable “Apply” button in the custom filters form or not */
  isApplyBtnDisabled: boolean;
  /** Callback whe the custom filters modal is open/closed */
  onToggleCustomFilters?: (isOpen: boolean) => void;
  /** Array of all statuses to show.
   *  Each status has the following props:
   *  { colour?: string;
   *  count?: number;
   *  value: any;
   *  label: string | ReactChild; }
   */
  statuses: FilterStatus[];
  /** Items to show in the summary text below the Filters.
   * Each item has the following props:
   * { icon: ReactChild;
   * label: string; }
   */
  customFilterSummary?: CustomFilterSummaryItem[];
  /** Callback for when "Save" is clicked for custom filters. */
  onCustomFilterSave?: () => void;
  /** Callback for when "Clear" is clicked for custom filters. */
  onCustomFilterClear?: () => void;
  /** Unique id of the component. */
  id?: string;
  /** Additional class names for styling. */
  className?: string;
  /** Selected filter value. */
  selectedValue?: any;
  /** Array of all breakpoint to show.
   *  Each status has the following props:
   *  { xs?: number;
   *   sm?: number;
   *   md?: number;
   *   lg?: number;
   *   xl?: number;
   *   xxl?: number; }
   */
  breakpoint?: BreakpointButtons;
  /** customising tooltip label on the custom filter button */
  customFilterTooltip: string;
};

export type FilterStatus = {
  colour?: string;
  count?: number;
  value: any;
  label: string | ReactChild;
};

export type CustomFilterSummaryItem = {
  icon?: ReactChild;
  title?: string;
  label: string;
};

export type BreakpointButtons = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};
