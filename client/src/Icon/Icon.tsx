import * as React from 'react';
import { IconProps } from './type';
import './Icon.scss';
import { getClass } from '../_lib/helper';
export * from './type';

export const IconDefaultProps = {
  size: 'md',
};

/**
 *
 * @param param
 */
function Icon({ children, size, title, className }: IconProps) {
  return (
    <span
      data-testid="icon"
      title={title}
      className={getClass('icon', className, { [`size-${size}`]: size })}
    >
      <svg
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
        className="icon__svg"
      >
        {children}
      </svg>
    </span>
  );
}

export function withIcon(iconComponent: any) {
  return ({ size, title, className }: any) => {
    return (
      <Icon size={size} title={title} className={className}>
        {React.cloneElement(iconComponent as React.ReactElement<any>, {})}
      </Icon>
    );
  };
}

Icon.defaultProps = IconDefaultProps;

export default Icon;
