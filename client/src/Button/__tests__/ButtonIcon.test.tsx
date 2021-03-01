import React from 'react';
import { mount } from 'enzyme';
import ButtonIcon, { ButtonIconPropsType } from '../component/ButtonIcon';

// Expected default props.
const defaultProps: ButtonIconPropsType = undefined;
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<ButtonIcon {...props} />);
  const component = wrapper.find('.btn__icon');

  return { props, wrapper, component };
};

describe('Button::ButtonIcon', () => {
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
          JSON.stringify(ButtonIcon.defaultProps)
        );
      });

      it.each([
        ['btn-icon-default', {}],
        ['btn-icon-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { component } = mountComponent(props);
        expect(component.prop('data-testid')).toBe(expectedTestId);
      });
    });

    describe('children', () => {
      it('should render children', () => {
        const { wrapper } = mountComponent({ icon: 'icon' });
        expect(wrapper.find('span').text()).toBe('icon');
      });
    });
  });
});
