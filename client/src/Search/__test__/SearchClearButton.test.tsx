import React from 'react';
import { mount } from 'enzyme';
import SearchClearButton, {
  SearchClearButtonProps,
} from '../component/SearchClearButton';

const defaultProps: SearchClearButtonProps = undefined;
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<SearchClearButton {...props} />);
  const component = wrapper.find('Button');

  return { props, wrapper, component };
};

describe('Search::SearchClearButton', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent({ value: 'some-value' });
      expect(wrapper).toHaveLength(1);
    });

    it.each([
      ['when no value exist', {}],
      ['when we have some value', { value: 'some-value' }],
    ])('should be match with snapshot %s', (name, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('props', () => {
    describe('default', () => {
      it('should have expected default props', () => {
        expect(JSON.stringify(defaultProps)).toBe(
          JSON.stringify(SearchClearButton.defaultProps)
        );
      });
    });

    describe('custom', () => {
      it.each([
        ['className', 'search__btn-clear', { value: 'some-value' }],
        ['isText', true, { value: 'some-value' }],
      ])('should render prop %s as %s', (name, expected, props) => {
        const { component } = mountComponent(props);
        expect(component.prop(name)).toBe(expected);
      });
    });
  });

  describe('interaction', () => {
    it.each([
      ['should', 'Button', 1, { value: 'some-value' }],
      ['should not', 'Button', 0, {}],
    ])('%s have %s', (name, element, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper.find(element)).toHaveLength(expected);
    });
  });
});
