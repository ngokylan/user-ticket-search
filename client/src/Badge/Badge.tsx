import React from 'react';
import { getClass } from '../_lib/helper';
import { BadgeProps } from './type';
import './Badge.scss';

function Badge({
  id,
  icon,
  role,
  type,
  children,
  className,
  hasPopoverIcon,
  isCircular,
}: BadgeProps) {
  return (
    <span
      id={id}
      className={getClass('badge', className, {
        [type]: type,
        lighter: children === '0' || children === 0,
        'is-circular': isCircular,
        [`role-${role}`]: role,
      })}
      data-testid={`badge-${id || 'default'}`}
    >
      {icon && <span className="badge__icon">{icon}</span>}
      {children && <span className="badge__label">{children}</span>}      
    </span>
  );
}

Badge.defaultProps = {
  role: 'status',
  type: 'grey',
};

export default Badge;
