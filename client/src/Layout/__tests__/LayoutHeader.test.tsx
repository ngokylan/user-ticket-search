import React from 'react';
import { mount } from 'enzyme';
import LayoutHeader, {
  LayoutHeaderWithoutContext,
  LayoutHeaderProps,
} from '../component/LayoutHeader';

const mountComponent = (customProps: any = {}) => {
  const defaultProps = {
    setHeaderRef: jest.fn(),
  };
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<LayoutHeaderWithoutContext {...props} />);

  return { props, wrapper };
};

describe('Layout::LayoutHeader', () => {
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
    describe('children', () => {
      it('should render children', () => {
        const text = 'Hello world';
        const { wrapper } = mountComponent({ children: text });
        expect(wrapper.text()).toBe(text);
      });
    });
  });

  describe('interaction', () => {
    it.each([['should', '.layout__main-header', 1, {}]])(
      '%s have %s',
      (name, element, expected, props) => {
        const { wrapper } = mountComponent(props);
        expect(wrapper.find(element)).toHaveLength(expected);
      }
    );
  });
});
