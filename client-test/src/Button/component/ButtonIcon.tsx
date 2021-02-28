import React, { ReactNode } from 'react';

export type ButtonIconPropsType = {
  icon?: ReactNode;
  id?: string;
};

function ButtonIcon({ icon, id }: ButtonIconPropsType) {
  return (
    <span
      className="btn__icon"
      data-testid={`btn-icon-${id || 'default'}`}
    >
      {icon}
    </span>
  );
}

export default ButtonIcon;
