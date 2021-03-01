import React from 'react';
import { mount } from 'enzyme';
import Spinner, { SpinnerProps } from '../';

const defaultProps: SpinnerProps = {
  color: '#4285F4',
  role: 'status',
  ariaLabel: 'Loading...',
};
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Spinner {...props} />);
  const component = wrapper.find('.spinner').first();

  return { props, wrapper, component };
};

describe('Spinner', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toHaveLength(1);
    });

    it('should match snapshot', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('props', () => {
    describe('default', () => {
      it('should have expected default props', () => {
        expect(JSON.stringify(defaultProps)).toEqual(
          JSON.stringify(Spinner.defaultProps)
        );
      });

      it.each([
        ['spinner-default', {}],
        ['spinner-custom-id', { id: 'custom-id' }],
      ])('should render test ID correctly', (expectedTestId, props) => {
        const { component } = mountComponent(props);
        expect(component.prop('data-testid')).toBe(expectedTestId);
      });
    });
  });

  describe('interaction', () => {
    it.each([['should', 'svg', 1, {}]])(
      '%s have %s',
      (name, element, expected, props) => {
        const { wrapper } = mountComponent(props);
        expect(wrapper.find(element)).toHaveLength(expected);
      }
    );
  });
});
