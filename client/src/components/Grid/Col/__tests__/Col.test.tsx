import React from 'react';
import { mount } from 'enzyme';
import Col, { ColProps } from '..';

const defaultProps: ColProps = {
  isAuto: false,
  isFill: false,
  role: 'cell',
};
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Col {...props} />);

  return { props, wrapper };
};

describe('Col', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toHaveLength(1);
    });

    it('should be match with snapshot', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toMatchSnapshot();
    });

    it.each([
      ['isAuto', true],
      ['isAuto', false],
      ['span', 2],
      ['order', 2],
      ['offset', 2],
      ['align', 'auto'],
      ['shrink', 2],
      ['grow', 2],
      ['isFill', true],
      ['isFill', false],
      ['xs', 2],
      ['sm', 2],
      ['md', 2],
      ['lg', 2],
      ['xl', 2],
      ['xxl', 2],
      ['xxxl', 2],
      ['key', 2],
      ['className', 'className'],
      ['className', null],
      ['className', undefined],
      ['className', false],
    ])(
      'should be match with snapshot when props %s is %s',
      (propsName, propsValue) => {
        const { wrapper } = mountComponent({ [propsName]: propsValue });
        expect(wrapper).toMatchSnapshot();
      }
    );
  });

  describe('props', () => {
    describe('default', () => {
      it('should have expected default props', () => {
        expect(JSON.stringify(defaultProps)).toBe(
          JSON.stringify(Col.defaultProps)
        );
      });
    });

    describe('children', () => {
      it('should render children', () => {
        const text = 'Hello world';
        const { wrapper } = mountComponent({ children: text });
        expect(wrapper.text()).toBe(text);
      });
    });
  });
});
