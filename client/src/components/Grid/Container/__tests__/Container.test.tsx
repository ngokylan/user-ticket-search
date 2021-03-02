import React from 'react';
import { mount } from 'enzyme';
import Container, { ContainerProps } from '..';

const defaultProps: ContainerProps = {
  isFluid: false,
};
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Container {...props} />);

  return { props, wrapper };
};

describe('Container', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toHaveLength(1);
    });

    it('should be match with snapshot', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toMatchSnapshot();
    });

    it.each([['isFluid', true], ['isFluid', false]])(
      'should be match with snapshot when props %s is %s',
      (propsName, propsValue) => {
        const { wrapper } = mountComponent({ [propsName]: propsValue });
        expect(wrapper).toMatchSnapshot();
      }
    );

    it.each([['size', 'lg'], ['size', 'md'], ['size', undefined]])(
      'should be match with snapshot when props %s is %s',
      (propsName, propsValue) => {
        const { wrapper } = mountComponent({ [propsName]: propsValue });
        expect(wrapper).toMatchSnapshot();
      }
    );

    it.each([['role', 'test'], ['role', undefined]])(
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
          JSON.stringify(Container.defaultProps)
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

    describe('custom', () => {
      it.each([['role', 'test', { role: 'test' }]])(
        'should render prop %s as %s',
        (name, expected, props) => {
          const { wrapper } = mountComponent(props);
          expect(wrapper.prop(name)).toBe(expected);
        }
      );
    });
  });
});
