import React from 'react';
import Button from '../../Button';
import { SearchIcon } from '../../Icon';

export type SearchSubmitButtonProps = {
  value?: string | number | undefined;
  onSubmit: () => void;
  isSubmitEnabledAlways?: boolean;
};

function SearchSubmitButton({
  value,
  onSubmit,
  isSubmitEnabledAlways,
}: SearchSubmitButtonProps) {
  return (
    <Button
      className="search__btn-submit"
      isText={true}
      icon={<SearchIcon title="Search" />}
      onClick={value || isSubmitEnabledAlways ? onSubmit : undefined}
      isDisabled={!value && !isSubmitEnabledAlways}
    />
  );
}

export default SearchSubmitButton;
