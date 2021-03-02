import { FilterStatus } from '../type';
import './FilterButtons.scss';

export type FilterButtonsProps = {
  /** The statuses to show in the buttons */
  statuses: FilterStatus[];
  /** Callback when a new button is clicked */
  onChange: (status: string | number) => void;
  /** The currently selected status */
  selected: string | number | null;
};

function FilterButtons({ statuses, onChange, selected }: FilterButtonsProps) {
  return (
   <></>
  );
}

export default FilterButtons;
