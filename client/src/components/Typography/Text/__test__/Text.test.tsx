import React from 'react';
import { mount } from 'enzyme';
import Text from '..';
import TextProps from '..';

const defaultProps: TextProps = {
  htmlTag: 'span',
  isBold: false,
  isItalic: false,
  isTruncate: false,
};

const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Text {...props} />);
  const component = wrapper.find('.typography');

  return { props, wrapper, component };
};

describe('Text', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent();
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
          JSON.stringify(Text.defaultProps)
        );
      });

      it.each([
        ['typography-default', {}],
        ['typography-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { wrapper } = mountComponent(props);
        expect(
          wrapper
            .find('.typography')
            .at(0)
            .prop('data-testid')
        ).toBe(expectedTestId);
      });
    });

    describe('children', () => {
      it('should render children', () => {
        const text = 'Hello world';
        const { wrapper } = mountComponent({ children: text });
        expect(wrapper.find('span').text()).toBe(text);
      });
    });

    describe('custom', () => {
      let testOptions = [
        ['className', 'class-test', { className: 'class-test' }],
        ['isBold', 'font-weight-bold', { isBold: true }],
        ['isItalic', 'font-italic', { isItalic: true }],
      ];
      ['overline', 'lineThrough', 'underline'].map(function(value: string) {
        testOptions.push([
          'decoration',
          'text-decoration-' + value,
          { decoration: value },
        ]);
      });
      ['lowercase', 'uppercase', 'capitalize'].map(function(value: string) {
        testOptions.push([
          'transform',
          'text-transform-' + value,
          { transform: value },
        ]);
      });
      [
        'primary',
        'secondary',
        'black',
        'information',
        'warning',
        'success',
        'danger',
      ].map(function(value: string) {
        testOptions.push(['color', 'text-color-' + value, { color: value }]);
      });
      ['lg', 'rg', 'sm', 'xs', 'button', 'status'].map(function(value: string) {
        testOptions.push(['Text size', 'text-size-' + value, { size: value }]);
      });
      it.each(testOptions)(
        'should render class %s as %s',
        (name, expected, props) => {
          const { wrapper } = mountComponent(props);
          expect(wrapper.find('.' + expected).exists()).toEqual(true);
        }
      );
      it.each([
        ['span', { htmlTag: 'span' }],
        ['strong', { htmlTag: 'strong' }],
        ['small', { htmlTag: 'small' }],
      ])('should render with %s tag', (expected, props) => {
        const { wrapper } = mountComponent(props);
        const heading = wrapper.find(expected);
        expect(heading).toHaveLength(1);
      });
    });
  });
});
