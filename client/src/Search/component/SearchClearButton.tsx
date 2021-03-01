import React, { MouseEvent, SyntheticEvent } from 'react';
import Button from '../../Button';
import { CancelIcon as ClearIcon } from '../../Icon';

export type SearchClearButtonProps = {
  value?: string | number;
  onClear?: () => void;
};

function SearchClearButton({ value, onClear }: SearchClearButtonProps) {
  if (value) {
    return (
      <Button
        className="search__btn-clear"
        isText={true}
        icon={<ClearIcon title="Clear" />}
        onClick={onClear}
      />
    );
  }

  return null;
}

export default SearchClearButton;
