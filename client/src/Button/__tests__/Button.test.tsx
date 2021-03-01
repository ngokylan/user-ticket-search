import React from 'react';
import { mount } from 'enzyme';
import Button, { ButtonProps } from '..';

const defaultProps: ButtonProps = {
  htmlType: 'button',
  type: 'default',
  isUppercase: true,
  isText: false,
};

const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Button {...props} />);
  const component = wrapper.find('button');

  return { props, wrapper, component };
};

describe('Button', () => {
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
          JSON.stringify(Button.defaultProps)
        );
      });

      it.each([
        ['btn-default', {}],
        ['btn-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { component } = mountComponent(props);
        expect(component.prop('data-testid')).toBe(expectedTestId);
      });
    });

    describe('children', () => {
      it('should render children', () => {
        const text = 'Hello world';
        const { wrapper } = mountComponent({ children: text });
        expect(wrapper.find('ButtonLabel').text()).toBe(text);
      });
    });

    describe('custom', () => {
      it.each([
        ['type', 'button', {}],
        ['type', 'button', { htmlType: 'button' }],
        ['type', 'submit', { htmlType: 'submit' }],
        ['type', 'reset', { htmlType: 'reset' }],
      ])('should render prop %s as %s', (name, expected, props) => {
        const { component } = mountComponent(props);
        expect(component.prop(name)).toBe(expected);
      });
    });
  });

  describe('interaction', () => {
    it.each([
      ['should', '.btn__hover', 1, {}],
      ['should', '.btn__focused', 1, {}],
      ['should', '.btn__pressed', 1, {}],
      ['should not', '.btn__loading', 0, {}],
      ['should not', 'Spinner', 0, {}],
      ['should not', '.btn__loading', 0, { isLoading: false }],
      ['should not', 'Spinner', 0, { isLoading: false }],
      ['should', '.btn__loading', 1, { isLoading: true }],
      ['should', 'Spinner', 1, { isLoading: true }],
      ['should not', 'ButtonIcon', 0, {}],
      ['should not', 'ButtonIcon', 0, { icon: null }],
      ['should', 'ButtonIcon', 1, { icon: 'icon' }],
      ['should not', 'ButtonLabel', 0, {}],
      ['should not', 'ButtonLabel', 0, { children: null }],
      ['should', 'ButtonLabel', 1, { children: 'children' }],
    ])('%s have %s', (name, element, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper.find(element)).toHaveLength(expected);
    });

    it('should call click event once', () => {
      const mockCallBack = jest.fn();
      const { wrapper } = mountComponent({ onClick: mockCallBack });
      wrapper.simulate('click', {
        preventDefault() {
          return;
        },
      });
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('should not call click event for disabled button', () => {
      const mockCallBack = jest.fn();
      const { wrapper } = mountComponent({
        onClick: mockCallBack,
        isDisabled: true,
      });
      wrapper.simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(0);
    });
  });

  describe('api', () => {
    it('should not call onClick in handleOnClick when event is not provided', () => {
      jest.clearAllMocks();
      const props = {};
      const button = new Button(props);
      const result = button.handleOnClick();
      expect(result).toEqual(undefined);
    });

    it('should not call onClick in handleOnClick when it is isDisabled', () => {
      jest.clearAllMocks();
      const props = { isDisabled: true, onClick: () => '' };
      const event = {
        stopPropagation: jest.fn(),
      };

      const button = new Button(props);
      const result = button.handleOnClick(event);
      expect(result).toEqual(undefined);
      expect(event.stopPropagation.mock.calls.length).toEqual(1);
    });

    it('should not call onClick in handleOnClick when it is isLoading', () => {
      jest.clearAllMocks();
      const props = { isLoading: true, onClick: () => '' };
      const event = {
        stopPropagation: jest.fn(),
      };

      const button = new Button(props);
      const result = button.handleOnClick(event);
      expect(result).toEqual(undefined);
      expect(event.stopPropagation.mock.calls.length).toEqual(1);
    });

    it('should call onBlur in handleOnBlur when onBlur is provided', () => {
      jest.clearAllMocks();
      const props = {
        onBlur: jest.fn(),
      };
      const event = {
        stopPropagation: jest.fn(),
      };
      const button = new Button(props);
      const result = button.handleOnBlur();
      expect(result).toEqual(undefined);
    });
  });
});
