import React from 'react';
import { mount } from 'enzyme';
import LayoutContent, {
  LayoutContentWithoutContext,
  LayoutContentProps,
} from '../component/LayoutContent';

const defaultProps: LayoutContentProps = {
  setLayoutRef: () => {
    return true;
  },
};
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<LayoutContentWithoutContext {...props} />);

  return { props, wrapper };
};

describe('Layout::LayoutContent', () => {
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
        expect(wrapper.find('.layout__main-content').text()).toBe(text);
      });
    });
  });

  describe('interaction', () => {
    it.each([
      ['should', '.layout__main-content-wrapper', 1, {}],
      ['should', '.layout__main-content', 1, {}],
    ])('%s have %s', (name, element, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper.find(element)).toHaveLength(expected);
    });
  });

  describe('api', () => {
    it('handleScroll should dispatch event if event.target === mainRef.current', () => {
      jest.clearAllMocks();
      const layoutContent = new LayoutContentWithoutContext();
      const event = {
        target: {
          scrollTop: jest.fn(),
        },
      };
      const mainScroll = new CustomEvent('onScroll_main-content', {
        detail: {
          scrollTop: event.target.scrollTop,
        },
      });

      const dispatchEvent = jest.fn();
      window.dispatchEvent = dispatchEvent;
      layoutContent.mainRef.current = event.target;
      layoutContent.handleScroll(event);
      expect(dispatchEvent.mock.calls.length).toEqual(1);
      expect(dispatchEvent).toBeCalledWith(mainScroll);
    });

    it('handleScroll should not dispatch event if event.target !== mainRef.current', () => {
      jest.clearAllMocks();
      const layoutContent = new LayoutContentWithoutContext();
      const event = {
        target: {
          scrollTop: jest.fn(),
        },
      };
      const mainScroll = new CustomEvent('onScroll_main-content', {
        detail: {
          scrollTop: event.target.scrollTop,
        },
      });

      const dispatchEvent = jest.fn();
      window.dispatchEvent = dispatchEvent;
      layoutContent.handleScroll(event);
      expect(dispatchEvent.mock.calls.length).toEqual(0);
      expect(dispatchEvent).toBeCalledTimes(0);
    });

    it('should call dispatchEvent with proper event', () => {
      jest.clearAllMocks();
      const layoutContent = new LayoutContentWithoutContext();
      const dispatchEvent = jest.fn();
      layoutContent.mainRef = {
        current: {
          dispatchEvent,
        },
      };

      var event = new Event('scroll');
      layoutContent.handleResize();
      expect(dispatchEvent.mock.calls.length).toEqual(1);
      expect(dispatchEvent).toBeCalledWith(event);
    });

    it('should register proper addEventListener when componentDidMount', () => {
      jest.clearAllMocks();
      const layoutContent = new LayoutContentWithoutContext({
        setLayoutRef: jest.fn(),
      });
      const addEventListener = jest.fn();
      layoutContent.mainRef = {
        current: {
          addEventListener,
        },
      };

      var event = new Event('scroll');
      layoutContent.componentDidMount();
      expect(addEventListener.mock.calls.length).toEqual(1);
      expect(addEventListener).toBeCalledWith(
        'scroll',
        layoutContent.handleScroll,
        true
      );
    });
    it('should removeEventListener when componentWillUnmount', () => {
      jest.clearAllMocks();
      window.removeEventListener = jest.fn(() => {
        return false;
      });
      const layoutContent = new LayoutContentWithoutContext({
        ...defaultProps,
      });
      layoutContent.mainRef = {
        current: {
          removeEventListener: jest.fn(),
          addEventListener: jest.fn(),
        },
      };
      layoutContent.componentDidMount();
      layoutContent.componentWillUnmount();
      expect(layoutContent.mainRef.current.removeEventListener).toBeCalledWith(
        'scroll',
        layoutContent.handleScroll,
        true
      );
      expect(window.removeEventListener).toBeCalledWith(
        'resize',
        layoutContent.handleResize,
        true
      );
    });
  });
});
