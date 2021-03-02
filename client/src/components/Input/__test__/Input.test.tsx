import React, { Component } from 'react';
import { mount } from 'enzyme';
import Input, { InputProps } from '..';

const defaultProps: InputProps = {
  isReadOnly: false,
  isDisabled: false,
  isHidden: false,
  htmlType: 'text',
  tabIndex: 0,
};
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Input {...props} />);
  const component = wrapper.find('.input');

  return { props, wrapper, component };
};

describe('Input', () => {
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
          JSON.stringify(Input.defaultProps)
        );
      });

      it.each([
        ['input-default', {}],
        ['input-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { component } = mountComponent(props);
        expect(component.prop('data-testid')).toBe(expectedTestId);
      });
    });

    describe('custom', () => {
      it.each([
        ['id', 'custom-id', { id: 'custom-id' }],
        ['name', 'custom name', { name: 'custom name' }],
        [
          'placeholder',
          'input placeholder',
          { placeholder: 'input placeholder' },
        ],
        ['value', 'some value', { value: 'some value' }],
        ['type', 'text', { type: 'text' }],
        ['isReadOnly', true, { isReadOnly: true }],
        ['isReadOnly', false, { isReadOnly: false }],
        ['hidden', true, { hidden: true }],
        ['hidden', false, { hidden: false }],
        ['ariaLabel', 'some label', { ariaLabel: 'some label' }],
        ['ariaDescribedby', 'some id', { ariaDescribedby: 'some id' }],
        ['ariaInvalid', true, { ariaInvalid: true }],
        ['ariaInvalid', false, { ariaInvalid: false }],
      ])('should render prop %s as %s for Input', (name, expected, props) => {
        const { wrapper } = mountComponent(props);
        const CheckboxInput = wrapper.find('Input');
        expect(CheckboxInput.prop(name)).toBe(expected);
      });
    });
  });

  describe('interaction', () => {
    it.each([
      ['should', '.input', 1, {}],
      ['should', '.custom-class', 1, { className: 'custom-class' }],
    ])('%s have %s', (name, element, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper.find(element)).toHaveLength(expected);
    });

    it.each([
      ['error', 'input--on-error', { status: 'error' }],
      ['success', 'input--on-success', { status: 'success' }],
      ['warning', 'input--on-warning', { status: 'warning' }],
    ])('on status %s class should be %s', (status, expected, props) => {
      const { component } = mountComponent(props);
      expect(component.hasClass(expected)).toEqual(true);
    });

    it.each([
      ['disabled', 'disabled', true, { isDisabled: true }],
      ['disabled', 'enabled', false, { isDisabled: false }],
      ['hidden', 'hidden', true, { isHidden: true }],
      ['hidden', 'visible', false, { isHidden: false }],
      ['readOnly', 'readOnly', true, { isReadOnly: true }],
    ])('attr %s should be %s', (attr, desc, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(
        wrapper.findWhere(item => item.prop(attr) === expected)
      ).toHaveLength(1);
    });

    it('Should focus on componentDidUpdate', () => {
      const { wrapper } = mountComponent({ autoFocus: true });
      const { inputRef }: any = wrapper.instance();

      jest.spyOn(inputRef.current, 'focus');

      wrapper.instance().componentDidUpdate();
      expect(inputRef.current.focus).toHaveBeenCalledTimes(1);
    });

    it('Should not focus on componentDidUpdate if disabled', () => {
      const { wrapper } = mountComponent({
        isDisabled: true,
      });
      const { inputRef }: any = wrapper.instance();

      jest.spyOn(inputRef.current, 'focus');

      wrapper.instance().componentDidUpdate();
      expect(inputRef.current.focus).toHaveBeenCalledTimes(0);
    });

    it('Should return undefined in there is no event on key press ', () => {
      const { wrapper } = mountComponent();
      const res = wrapper.instance().handleOnKeyPress();
      expect(res).toBeUndefined();
    });

    it('Should not handle onKeyPress if desabled', () => {
      const mockFunction = jest.fn();

      const { wrapper } = mountComponent({
        isDisabled: true,
        onKeyPress: mockFunction,
      });

      wrapper.find('input').simulate('keypress', { key: 'l' });
      expect(mockFunction).toBeCalledTimes(0);
    });

    it('Should call keypress callback', () => {
      const mockFunction = jest.fn();

      const { wrapper } = mountComponent({
        onKeyPress: mockFunction,
      });

      wrapper.find('input').simulate('keyPress', { charCode: 13 });
      expect(mockFunction).toBeCalledTimes(1);
    });

    it('Should handle onEnterPress', () => {
      const mockFunction = jest.fn();

      const { wrapper } = mountComponent({
        onEnterPress: mockFunction,
      });

      wrapper.find('input').simulate('keyPress', { charCode: 13 });
      expect(mockFunction).toBeCalledTimes(1);
    });

    it('should have onChange', () => {
      const mockCallBack = jest.fn();
      const { wrapper } = mountComponent({
        onChange: mockCallBack,
      });
      const input = wrapper.find('input');

      input.simulate('change', { target: { value: 'Changed' } });
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('should have onChange with Enter press', () => {
      const mockCallBack = jest.fn();
      const { wrapper } = mountComponent({
        onChange: mockCallBack,
        onEnterPress: mockCallBack,
      });
      const input = wrapper.find('input');

      input.simulate('change', { target: { value: 'Changed' }, keyCode: 13 });

      expect(mockCallBack.mock.calls.length).toEqual(2);
    });

    it('should not have onChange if isDesabled', () => {
      const mockCallBack = jest.fn();
      const { wrapper } = mountComponent({
        onChange: mockCallBack,
        isDisabled: true,
      });
      const input = wrapper.find('input');

      input.simulate('change', { target: { value: 'Changed' } });
      expect(mockCallBack.mock.calls.length).toEqual(0);
    });

    it('should not have onChange if event is undefined', () => {
      const { wrapper } = mountComponent();
      const res = wrapper.instance().handleOnChange();
      expect(res).toBeUndefined();
    });

    it('should call onClick when we click on input', () => {
      const mockCallBack = jest.fn();
      const { component } = mountComponent({
        onClick: mockCallBack,
      });
      component.simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('should call onClick even if Input is disabled', () => {
      const mockCallBack = jest.fn();
      const { wrapper } = mountComponent({
        onClick: mockCallBack,
        isDisabled: true,
      });
      const event = {};
      const input = wrapper.instance();
      input.handleClick(event);
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('should not call onClick when onClick is not provided', () => {
      const mockCallBack = jest.fn();
      const { component } = mountComponent();
      component.simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(0);
    });

    it('should have mouseDown', () => {
      const mockCallBack = jest.fn();
      const { component } = mountComponent({
        onMouseDown: mockCallBack,
      });
      component.simulate('mousedown');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('should not call mousedown event when mouseDown is not provided', () => {
      const mockCallBack = jest.fn();
      const { component } = mountComponent();
      component.simulate('mousedown');
      expect(mockCallBack.mock.calls.length).toEqual(0);
    });

    it('should have blur', () => {
      const mockCallBack = jest.fn();
      const { component } = mountComponent({
        onBlur: mockCallBack,
      });
      component.simulate('blur');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('should not call blur event when blur is not provided', () => {
      const mockCallBack = jest.fn();
      const { component } = mountComponent();
      component.simulate('blur');
      expect(mockCallBack.mock.calls.length).toEqual(0);
    });

    it('should have focus', () => {
      const mockCallBack = jest.fn();
      const { component } = mountComponent({
        onFocus: mockCallBack,
      });
      component.simulate('focus');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('should not call focus event when focus is not provided', () => {
      const mockCallBack = jest.fn();
      const { component } = mountComponent();
      component.simulate('focus');
      expect(mockCallBack.mock.calls.length).toEqual(0);
    });
  });
});
