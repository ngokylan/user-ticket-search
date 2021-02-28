import React from 'react';
import { getClass } from '../_lib/helper';
import { FieldsetProps } from './type';
import './Fieldset.scss';

function Fieldset({ id, children, className, isDisabled }: FieldsetProps) {
  return (
    <fieldset
      id={id}
      data-testid={`fieldset-${id || 'default'}`}
      className={getClass('fieldset', className, {
        disabled: isDisabled,
      })}
      disabled={isDisabled}
    >
      {children}
    </fieldset>
  );
}

export default Fieldset;
