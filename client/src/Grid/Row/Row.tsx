import React, { ReactNode } from 'react';
import { mapPropsToClass } from './api';
import { RowProps } from './type';
import './Row.scss';

function Row({ children, ...props }: RowProps): any {
  const className = mapPropsToClass('row', props);
  const { role, key } = props;

  return (
    <div className={className} key={key} role={role}>
      {children}
    </div>
  );
}

Row.defaultProps = {
  isNoGutters: false,
  isInline: false,
  role: 'row',
};

export default Row;
