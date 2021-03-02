import React from 'react';
import { mount } from 'enzyme';
import Fieldset, { FieldsetProps } from '..';

const defaultProps: FieldsetProps = undefined;
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Fieldset {...props} />);
  const component = wrapper.find('fieldset');

  return { props, wrapper, component };
};

describe('Fieldset', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toHaveLength(1);
    });

    it('should be match with snapshot %s', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('props', () => {
    describe('default', () => {
      it('should have expected default props', () => {
        expect(JSON.stringify(defaultProps)).toBe(
          JSON.stringify(Fieldset.defaultProps)
        );
      });

      it.each([
        ['fieldset-default', {}],
        ['fieldset-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { component } = mountComponent(props);
        expect(component.prop('data-testid')).toBe(expectedTestId);
      });
    });

    describe('children', () => {
      it('should render children', () => {
        const { wrapper } = mountComponent({ children: 'Hello world' });
        expect(wrapper.text()).toBe('Hello world');
      });
    });

    describe('custom', () => {
      it.each([
        ['id', 'test', { id: 'test' }],
        ['disabled', true, { isDisabled: true }],
        ['disabled', false, { isDisabled: false }],
        ['disabled', undefined, {}],
      ])('should render prop %s as %s', (name, expected, props) => {
        const { component } = mountComponent(props);
        expect(component.prop(name)).toBe(expected);
      });
    });
  });

  describe('interaction', () => {
    it.each([
      ['should', '.fieldset', 1, {}],
      ['should', '.custom-class', 2, { className: 'custom-class' }],
      ['should not', '.fieldset--disabled', 0, {}],
      ['should not', '.fieldset--disabled', 0, { isDisabled: false }],
      ['should', '.fieldset--disabled', 1, { isDisabled: true }],
    ])('%s have %s', (name, element, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper.find(element)).toHaveLength(expected);
    });
  });
});
