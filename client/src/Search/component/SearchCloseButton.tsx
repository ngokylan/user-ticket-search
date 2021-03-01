import React from 'react';
import Button from '../../Button';
import { Text } from '../../Typography';

export type SearchCloseButtonProps = {
  onClick: () => void;
};

function SearchCloseButton({ onClick }: SearchCloseButtonProps) {
  return (
    <div className="search__close">
      <Button isText={true} onClick={onClick}>
        <Text size="button">Cancel</Text>
      </Button>
    </div>
  );
}

export default SearchCloseButton;
