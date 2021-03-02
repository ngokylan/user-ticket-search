import React from 'react';
import PropTypes from 'prop-types';
import { getClass } from '../../helper';
import { SwitchProps } from './type';
import './style.scss';

export const SwitchPropTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  id: PropTypes.string,
  isOn: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export const SwitchDefaultProps = {
  isOn: false,
};

function Switch({
  id,
  isOn,
  onClick,
  onChange,
  ariaLabel,
  ...props
}: SwitchProps) {
  return (
    <label
      data-testid={`toggle-btn-label-${id || 'default'}`}
      aria-label={ariaLabel || 'Toggle'}
    >
      <input
        className="toggle-btn__toggle-input"
        data-testid={`toggle-btn-input-${id || 'default'}`}
        type="checkbox"
        checked={isOn}
        onChange={onChange}
        onClick={onClick}
      />
      <span
        className={getClass('toggle-btn', '', { on: isOn })}
        {...props}
      />
    </label>
  );
}

Switch.propTypes = SwitchPropTypes;
Switch.defaultProps = SwitchDefaultProps;

export default Switch;
