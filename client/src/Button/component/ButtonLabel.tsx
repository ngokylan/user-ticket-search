import React from 'react';
import { ButtonLabel as ButtonLabelType, ButtonTypes } from '../type';
import './ButtonLabel.scss';

export type ButtonLabelProps = {
  children?: ButtonLabelType;
  id?: string;
};

function ButtonLabel({ children, id }: ButtonLabelProps) {
  return (
    <span
      className="btn__label"
      data-testid={`btn-label-${id || 'default'}`}
    >
      {children}
    </span>
  );
}

export default ButtonLabel;
