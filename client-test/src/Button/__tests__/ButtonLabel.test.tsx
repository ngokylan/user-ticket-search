import React from 'react';
import { mount } from 'enzyme';
import ButtonLabel, { ButtonLabelProps } from '../component/ButtonLabel';

// Expected default props.
const defaultProps: ButtonLabelProps = undefined;
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<ButtonLabel {...props} />);
  const component = wrapper.find('.btn__label');

  return { props, wrapper, component };
};

describe('Button::ButtonLabel', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toHaveLength(1);
    });

    it.each([[{}], [{ id: 'custom-id', icon: 'custom-icon' }]])(
      'should be match with snapshot',
      props => {
        const { wrapper } = mountComponent(props);
        expect(wrapper).toMatchSnapshot();
      }
    );
  });

  describe('props', () => {
    describe('default', () => {
      it('should have expected default props', () => {
        expect(JSON.stringify(defaultProps)).toBe(
          JSON.stringify(ButtonLabel.defaultProps)
        );
      });

      it.each([
        ['btn-label-default', {}],
        ['btn-label-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { component } = mountComponent(props);
        expect(component.prop('data-testid')).toBe(expectedTestId);
      });
    });

    describe('children', () => {
      it('should render children', () => {
        const { wrapper } = mountComponent({ children: 'children' });
        expect(wrapper.find('span').text()).toBe('children');
      });
    });
  });
});
