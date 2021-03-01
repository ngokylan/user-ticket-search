import React from 'react';
import { mount } from 'enzyme';
import Row, { RowProps } from '..';

const defaultProps: RowProps = {
  isNoGutters: false,
  isInline: false,
  role: 'row',
};
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Row {...props} />);

  return { props, wrapper };
};

describe('Row', () => {
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
      ['isNoGutters', true],
      ['isNoGutters', false],
      ['isInline', true],
      ['isInline', false],
      ['direction', 'row'],
      ['direction', 'column'],
      ['direction', 'row-reverse'],
      ['direction', 'column-reverse'],
      ['wrap', 'wrap'],
      ['wrap', 'nowrap'],
      ['wrap', 'wrap-reverse'],
      ['justifyContent', 'start'],
      ['justifyContent', 'end'],
      ['justifyContent', 'center'],
      ['justifyContent', 'between'],
      ['justifyContent', 'around'],
      ['alignItems', 'start'],
      ['alignItems', 'end'],
      ['alignItems', 'center'],
      ['alignItems', 'baseline'],
      ['alignItems', 'stretch'],
      ['alignContent', 'start'],
      ['alignContent', 'end'],
      ['alignContent', 'center'],
      ['alignContent', 'between'],
      ['alignContent', 'around'],
      ['alignContent', 'stretch'],
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
          JSON.stringify(Row.defaultProps)
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
