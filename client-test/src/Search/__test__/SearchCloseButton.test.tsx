import React from 'react';
import { mount } from 'enzyme';
import SearchCloseButton, {
  SearchClearButtonProps,
} from '../component/SearchCloseButton';

const defaultProps: SearchClearButtonProps = undefined;
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<SearchCloseButton {...props} />);
  const component = wrapper.find('.search__close');

  return { props, wrapper, component };
};

describe('Search::SearchClearButton', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent({ value: 'some-value' });
      expect(wrapper).toHaveLength(1);
    });

    it('should be match with snapshot', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('props', () => {
    describe('default', () => {
      it('should have expected default props', () => {
        expect(JSON.stringify(defaultProps)).toBe(
          JSON.stringify(SearchCloseButton.defaultProps)
        );
      });
    });

    describe('children', () => {
      it('should render children', () => {
        const text = 'Cancel';
        const { wrapper } = mountComponent();
        expect(wrapper.find('Text').text()).toBe(text);
      });
    });

    describe('custom', () => {
      it.each([['className', 'search__close', {}]])(
        'should render prop %s as %s',
        (name, expected, props) => {
          const { component } = mountComponent(props);
          expect(component.prop(name)).toBe(expected);
        }
      );

      it.each([['size', 'button', {}]])(
        'should render prop %s as %s',
        (name, expected, props) => {
          const { component } = mountComponent(props);
          expect(component.find('Text').prop(name)).toBe(expected);
        }
      );
    });
  });

  describe('interaction', () => {
    it.each([
      ['should', 'Button', 1, { value: 'some-value' }],
      ['should', 'Button', 1, {}],
      ['should', 'Text', 1, {}],
    ])('%s have %s', (name, element, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper.find(element)).toHaveLength(expected);
    });
  });
});
