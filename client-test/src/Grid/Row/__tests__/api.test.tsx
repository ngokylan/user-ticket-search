import React from 'react';
import { mapResponsive } from '../api';

describe('Row::api', () => {
  describe('api', () => {
    it('should return empty string when we call mapResponsive with undefined options', () => {
      const block = 'block';
      const breakpoint = 'breakpoint';
      const options = undefined;

      const result = mapResponsive(block, breakpoint, options);
      expect(result).toEqual('');
    });

    it.each([
      ['flex-xs---display', 'xs', 'display', '--display'],
      ['flex-xs---direction', 'xs', 'direction', '--direction'],
      ['flex-xs---wrap', 'xs', 'wrap', '--wrap'],
      [
        'justify-content-xs---justifyContent',
        'xs',
        'justifyContent',
        '--justifyContent',
      ],
      ['align-items-xs---alignItems', 'xs', 'alignItems', '--alignItems'],
      [
        'align-content-xs---alignContent',
        'xs',
        'alignContent',
        '--alignContent',
      ],
    ])(
      'should return %s when we call mapResponsive with option %s = %s',
      (expected, breakpoint, option, value) => {
        const block = 'block';
        const options = {
          [option]: value,
        };

        const result = mapResponsive(block, breakpoint, options);
        expect(result.trim()).toEqual(expected);
      }
    );
  });
});
