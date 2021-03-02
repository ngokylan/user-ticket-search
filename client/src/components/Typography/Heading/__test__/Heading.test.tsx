import React from 'react';
import { mount } from 'enzyme';
import Heading from '../Heading';

const defaultProps = {
  isBold: false,
  isItalic: false,
  isTruncate: false,
  type: 'heading',
  size: 'rg',
  htmlTag: 'h3',
};

const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Heading {...props} />);
  const component = wrapper.find('.-typography');

  return { props, wrapper, component };
};

describe('Heading', () => {
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
          JSON.stringify(Heading.defaultProps)
        );
      });     
    });

    describe('children', () => {
      it('should render children', () => {
        const text = 'Hello world';
        const { wrapper } = mountComponent({ children: text });
        expect(wrapper.find('h3').text()).toBe(text);
      });
    });

    describe('custom', () => {
      let testOptions = [
        ['className', 'class-test', { className: 'class-test' }],
        ['isBold', 'font-weight-bold', { isBold: true }],
        ['isItalic', 'font-italic', { isItalic: true }],
        ['isTruncate', 'text-truncate', { isTruncate: true }],
      ];
      ['left', 'center', 'right', 'justify'].map(function(value: string) {
        testOptions.push(['align', 'text-' + value, { align: value }]);
      });
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
      ['xl', 'lg', 'rg', 'sm', 'xs', 'xxs'].map(function(value: string) {
        testOptions.push([
          'heading size',
          'heading-size-' + value,
          { size: value },
        ]);
        testOptions.push([
          'title size',
          'title-size-' + value,
          { size: value, type: 'title' },
        ]);
      });
      it.each(testOptions)(
        'should render class %s as %s',
        (name, expected, props) => {
          const { wrapper } = mountComponent(props);
          expect(wrapper.find('.' + expected).exists()).toEqual(true);
        }
      );
      it.each([
        ['h1', { htmlTag: 'h1' }],
        ['h2', { htmlTag: 'h2' }],
        ['h3', { htmlTag: 'h3' }],
        ['h4', { htmlTag: 'h4' }],
        ['h5', { htmlTag: 'h5' }],
        ['h6', { htmlTag: 'h6' }],
      ])('should render with %s tag', (expected, props) => {
        const { wrapper } = mountComponent(props);
        const heading = wrapper.find(expected);
        expect(heading).toHaveLength(1);
      });
    });
  });
});
