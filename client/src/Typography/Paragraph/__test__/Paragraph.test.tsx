import React from 'react';
import { mount } from 'enzyme';
import Paragraph from '..';
import ParagraphProps from '..';

const defaultProps: ParagraphProps = {
  size: 'rg',
  isBold: false,
  isItalic: false,
  isTruncate: false,
};

const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Paragraph {...props} />);
  const component = wrapper.find('.typography');

  return { props, wrapper, component };
};

describe('Paragraph', () => {
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
          JSON.stringify(Paragraph.defaultProps)
        );
      });   
    });

    describe('children', () => {
      it('should render children', () => {
        const text = 'Hello world';
        const { wrapper } = mountComponent({ children: text });
        expect(wrapper.find('p').text()).toBe(text);
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
      ['lg', 'rg', 'sm', 'xs'].map(function(value: string) {
        testOptions.push(['Text size', 'text-size-' + value, { size: value }]);
      });
      it.each(testOptions)(
        'should render class %s as %s',
        (name, expected, props) => {
          const { wrapper } = mountComponent(props);
          expect(wrapper.find('.' + expected).exists()).toEqual(true);
        }
      );
    });
  });
});
