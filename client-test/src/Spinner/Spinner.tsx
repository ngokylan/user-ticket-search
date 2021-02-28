// tslint:disable max-line-length
import React from 'react';
import { SpinnerProps } from './type';
import { getClass } from '../_lib/helper';
import './Spinner.scss';

const sizes = {
  xl: '50px',
  l: '40px',
  m: '30px',
  s: '20px',
};

function Spinner({ color, size, id, role, ariaLabel }: SpinnerProps) {
  const radius = (size && sizes[size]) || sizes.m;

  return (
    <div role={role}>
      <span
        id={id}
        className="spinner"
        data-testid={`spinner-${id || 'default'}`}
        aria-label={ariaLabel}
      >
        <svg
          width={radius}
          height={radius}
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="spinner__path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      </span>
    </div>
  );
}

Spinner.defaultProps = {
  color: '#4285F4',
  role: 'status',
  ariaLabel: 'Loading...',
};

export default Spinner;
