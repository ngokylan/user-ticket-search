import React from 'react';
import { mapPropsToClass } from './api';
import { ColProps } from './type';
import './Col.scss';

function Col({ children, ...props }: ColProps): any {
  const className = mapPropsToClass('col', props);
  const { role, key } = props;

  return (
    <div className={className} key={key} role={role}>
      {children}
    </div>
  );
}

Col.defaultProps = {
  isAuto: false,
  isFill: false,
  role: 'cell',
};

export default Col;
