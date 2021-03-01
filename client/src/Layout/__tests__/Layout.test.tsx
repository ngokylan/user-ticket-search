import React from 'react';
import { mount } from 'enzyme';
import Layout from '../';
import { LayoutProps } from '../type';

const defaultProps: LayoutProps = {
  isStyleReboot: true,
  theme: 'default',
};
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Layout {...props} />);
  const component = wrapper.find('.layout__main-app');

  return { props, wrapper, component };
};

describe('Layout', () => {
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
          JSON.stringify(Layout.defaultProps)
        );
      });
    });

    describe('children', () => {
      it('should render children', () => {
        const text = 'Hello world';
        const { component } = mountComponent({ children: text });
        expect(component.text()).toBe(text);
      });
    });
  });

  describe('interaction', () => {
    it.each([
      ['should', '.layout', 1, {}],
      ['should', '.elements', 1, {}],
      ['should not', '.layout--is-search-open', 0, {}],
    ])('%s have %s', (name, element, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper.find(element)).toHaveLength(expected);
    });
  });

  describe('api', () => {
    it('should call setState properly when toggleSearchOpen is called', () => {
      jest.clearAllMocks();
      const { wrapper } = mountComponent();
      const checkbox = wrapper.instance();

      checkbox.toggleSearchOpen();
      expect(wrapper.state('isSearchOpen')).toEqual(true);
      checkbox.toggleSearchOpen();
      expect(wrapper.state('isSearchOpen')).toEqual(false);
    });

    it('should call setState properly when toggleSidePanelOverlay is called', () => {
      jest.clearAllMocks();
      const { wrapper } = mountComponent();
      const checkbox = wrapper.instance();

      checkbox.toggleSidePanelOverlay();
      expect(wrapper.state('isSidePanelOverlay')).toEqual(true);
      checkbox.toggleSidePanelOverlay();
      expect(wrapper.state('isSidePanelOverlay')).toEqual(false);
    });

    it('should call setState properly when setMenuStatus is called', () => {
      jest.clearAllMocks();
      const { wrapper } = mountComponent();
      const checkbox = wrapper.instance();

      checkbox.setMenuStatus('min');
      expect(wrapper.state('menuState')).toEqual('min');
      checkbox.setMenuStatus('wide');
      expect(wrapper.state('menuState')).toEqual('wide');
    });

    it('should set headerRef when setHeaderRef is called and dispatch event', () => {
      jest.clearAllMocks();
      const onUpdateHeaderRef = jest.fn();
      global.addEventListener('onUpdateHeaderRef', onUpdateHeaderRef, true);

      const { wrapper } = mountComponent();
      const componentInstance = wrapper.instance();
      const testRef = 'testRef';
      componentInstance.setHeaderRef(testRef);
      expect(componentInstance.state.headerRef).toBe(testRef);
      expect(onUpdateHeaderRef).toBeCalledTimes(1);
    });

    it('should set layoutRef when setLayoutRef is called and dispatch event', () => {
      jest.clearAllMocks();
      const onUpdateLayoutRef = jest.fn();
      global.addEventListener('onUpdateLayoutRef', onUpdateLayoutRef, true);

      const { wrapper } = mountComponent();
      const componentInstance = wrapper.instance();
      const testRef = 'layoutRef';
      componentInstance.setLayoutRef(testRef);
      expect(componentInstance.state.layoutRef).toBe(testRef);
      expect(onUpdateLayoutRef).toBeCalledTimes(1);
    });
  });
});
