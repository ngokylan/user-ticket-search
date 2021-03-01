import React, { Component } from 'react';
import FilterButtons from './component/FilterButtons';
import { getClass } from '../_lib/helper';
import './Filter.scss';
import { FilterProps, FilterStatus } from './type';
import { Breakpoint, BreakpointNames } from '../_lib/style/config';

type FilterState = {
  /** Current number of filter statuses to show */
  numStatusesToShow: number;
  /** Array of statuses to show in buttons */
  buttonStatuses: FilterStatus[];
  /** Array of statuses to show in dropdown */
  dropdownStatuses: FilterStatus[];
  /** Index of the selected filter status */
  selectedIndex: number | null;
  /** Whether the modal is open */
  isModalOpen: boolean;
  /** Whether the custom filter is active (apply clicked */
  isCustomFilterActive: boolean;
};

/** Number of buttons for each breakpoint. Preset by design team. */
const NUM_BUTTONS_BREAKPOINTS: any = {
  xs: 1,
  sm: 3,
  md: 5,
  lg: 5,
  xl: 5,
  xxl: 5,
};

class Filter extends Component<FilterProps, FilterState> {
  protected windowResizeEventListener: any;
  protected currentBreakpoint: Breakpoint = BreakpointNames.xxl;

  static defaultProps = {
    isApplyBtnDisabled: false,
    customFilterTooltip: 'Filter',
  };

  readonly state = {
    numStatusesToShow: 1,
    buttonStatuses: [],
    dropdownStatuses: [],
    selectedIndex: null,
    isModalOpen: false,
    isCustomFilterActive: false,
  };

  componentDidUpdate(prevProps: FilterProps) {
    const { statuses, selectedValue } = this.props;
    const {
      statuses: prevStatuses,
      selectedValue: prevSelectedValue,
    } = prevProps;

    if (statuses !== prevStatuses) {
      this.updateButtonsAndDropdown(this.state.selectedIndex);
    }

    if (selectedValue !== prevSelectedValue) {
      this.updateSelectedIndex(selectedValue);
    }
  }

  componentDidMount() {
    const { selectedValue } = this.props;
    const selectedIndex = this.updateSelectedIndex(selectedValue);  

    this.updateButtonsAndDropdown(selectedIndex);   
    window.addEventListener('resize', this.windowResizeEventListener);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.windowResizeEventListener);
  }

  /**
   * When the window is resized, recalculate the list of items in buttons and in the dropdown
   */
  handleResize = () => {
    const oldBreakpoint = this.currentBreakpoint;    

    if (this.currentBreakpoint !== oldBreakpoint) {
      this.updateButtonsAndDropdown(this.state.selectedIndex);
    }
  };

  /**
   * Get the index of the selected value in the array of statuses, and update the selectedIndex
   * @param value
   */
  updateSelectedIndex = (value: any): number => {
    const { statuses } = this.props;
    // look for the index of the selected item
    const selectedIndex = statuses.findIndex((s: FilterStatus) => {
      return s.value === value;
    });

    const indexNotFound = selectedIndex === -1;

    this.setState({
      selectedIndex: indexNotFound ? null : selectedIndex,
      // if the selected status is not in the list of statuses, then custom filters are enabled:
      isCustomFilterActive: indexNotFound,
    });

    return selectedIndex;
  };

  /**
   * Called when the selected status is changed
   * @param status
   */
  handleChange = (status: any) => {
    const { onStatusChange } = this.props;

    const selectedIndex = this.updateSelectedIndex(status);
    onStatusChange(status);

    return selectedIndex;
  };

  /**
   * Called when a dropdown item is clicked.
   */
  handleDropdownItemClick = (status: any) => {
    let selectedIndex = this.handleChange(status);
    this.updateButtonsAndDropdown(selectedIndex);
  };

  /**
   * Split the statuses among the radio button bar and the dropdown
   * @param selectedIndex
   */
  protected updateButtonsAndDropdown(selectedIndex: number | null) {
    let { statuses } = this.props;
    statuses = statuses.slice(); // required so that the array itself is not modified
    let currButtonStatuses: FilterStatus[] = [];
    let currDropdownStatuses: FilterStatus[] = [];
    const mergeBreakpoints = {
      ...NUM_BUTTONS_BREAKPOINTS,
      ...this.props.breakpoint,
    };
    let numButtons = mergeBreakpoints[this.currentBreakpoint];

    // if there is no selected status or if the selected status is within the number of required buttons to show
    // just grab the first <numButtons> buttons
    if (selectedIndex === null || selectedIndex < numButtons) {
      currButtonStatuses = statuses.splice(0, numButtons);
      currDropdownStatuses = statuses;
    } else {
      // if there is a selected status, show the first <numButtons> - 1 buttons, then the selected one
      // the rest go to the dropdown.
      let selected = statuses.splice(selectedIndex, 1);
      currButtonStatuses = [...statuses.splice(0, numButtons - 1), ...selected];
      currDropdownStatuses = statuses;
    }

    this.setState({
      buttonStatuses: currButtonStatuses,
      dropdownStatuses: currDropdownStatuses,
    });
  }

  /**
   * Toggles the modal
   */
  toggleModal = () => {
    this.setState(
      ({ isModalOpen }) => ({ isModalOpen: !isModalOpen }),
      () => {
        if (this.props.onToggleCustomFilters) {
          this.props.onToggleCustomFilters(this.state.isModalOpen);
        }
      }
    );
  };

  /**
   * Called when Apply is clicked in the modal.
   */
  handleModalApply = () => {
    const { onApplyCustomFilters } = this.props;
    this.toggleModal();

    this.setState({
      selectedIndex: null,
      isCustomFilterActive: true,
    });

    if (onApplyCustomFilters) {
      onApplyCustomFilters();
    }
  };

  render() {
    const {
      buttonStatuses,
      selectedIndex,
    } = this.state;

    const {
      id,
      statuses,
      customFilterSummary,
      onCustomFilterSave,
      onCustomFilterClear,
      className,
    } = this.props;

    let selected =
      selectedIndex !== null ? statuses[selectedIndex as any].value : null;

    return (
      <div
        id={id}
        data-testid={`filter-${id || 'default'}`}
        className={getClass('filter-wrapper', className)}
      >
        <div className="filter">
          <FilterButtons
            statuses={buttonStatuses}
            selected={selected}
            onChange={this.handleChange}
          />                  
        </div>       
      </div>
    );
  }
}

export default Filter;
