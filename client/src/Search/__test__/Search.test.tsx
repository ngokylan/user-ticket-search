import React from 'react';
import { mount } from 'enzyme';
import Search, { SearchProps } from '..';

const defaultProps: SearchProps = {
  placeholder: 'Search',
  ariaLabel: 'Search field',
};
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Search {...props} />);
  const component = wrapper.find('.search');

  return { props, wrapper, component };
};

describe('Search', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toHaveLength(1);
    });

    it.each([
      ['Heading exist', { heading: 'Title' }],
      ['Description exist', { description: 'Description' }],
    ])('should be match with snapshot %s', (name, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('props', () => {
    describe('default', () => {
      it('should have expected default props', () => {
        expect(JSON.stringify(defaultProps)).toBe(
          JSON.stringify(Search.defaultProps)
        );
      });

      it.each([
        ['search-default', {}],
        ['search-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { component } = mountComponent(props);
        expect(component.prop('data-testid')).toBe(expectedTestId);
      });
    });

    describe('custom', () => {
      it.each([['id', 'test', { id: 'test' }]])(
        'should render prop %s as %s',
        (name, expected, props) => {
          const { component } = mountComponent(props);
          expect(component.prop(name)).toBe(expected);
        }
      );

      it.each([
        ['value', 'some-value', { value: 'some-value' }],
        ['value', '', { value: '' }],
        ['value', '', {}],
        ['onFocus', undefined, {}],
        ['onFocus', true, { onFocus: true }],
        ['onFocus', false, { onFocus: false }],
        ['onBlur', undefined, {}],
        ['onBlur', true, { onBlur: true }],
        ['onBlur', false, { onBlur: false }],
        ['placeholder', defaultProps.placeholder, {}],
        [
          'placeholder',
          'some-placeholder',
          { placeholder: 'some-placeholder' },
        ],
        ['autoFocus', undefined, {}],
        ['autoFocus', true, { isVisible: true }],
        ['autoFocus', false, { isVisible: false }],
      ])('should render prop %s as %s for Input', (name, expected, props) => {
        const { component } = mountComponent(props);
        expect(component.find('Input').prop(name)).toBe(expected);
      });

      it.each([
        ['value', 'some-value', { value: 'some-value' }],
        ['value', '', { value: '' }],
        ['value', '', {}],
      ])('should render prop %s as %s for Input', (name, expected, props) => {
        const { component } = mountComponent(props);
        expect(component.find('SearchClearButton').prop(name)).toBe(expected);
      });

      it.each([
        ['value', 'some-value', { value: 'some-value' }],
        ['value', '', { value: '' }],
        ['value', '', {}],
      ])('should render prop %s as %s for Input', (name, expected, props) => {
        const { component } = mountComponent(props);
        expect(component.find('SearchSubmitButton').prop(name)).toBe(expected);
      });
    });
  });

  describe('interaction', () => {
    it.each([
      ['should', '.search', 1, {}],
      ['should', '.search--open', 1, { isVisible: true }],
      ['should not', '.search--open', 0, { isVisible: false }],
      ['should not', 'SearchCloseButton', 0, {}],
      ['should', 'SearchCloseButton', 1, { onClose: true }],
      ['should not', 'SearchCloseButton', 0, { onClose: false }],
    ])('%s have %s', (name, element, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper.find(element)).toHaveLength(expected);
    });
  });

  describe('api', () => {
    it('should have call handleOnClose once', () => {
      jest.clearAllMocks();
      const props = {
        onClose: jest.fn(),
      };
      const search = new Search(props);
      search.handleOnClose();
      expect(props.onClose.mock.calls.length).toEqual(1);
    });

    it('should have call handleOnSubmit once', () => {
      jest.clearAllMocks();
      const props = {
        onSubmit: jest.fn(),
      };
      const search = new Search(props);
      search.handleOnSubmit();
      expect(props.onSubmit.mock.calls.length).toEqual(1);
    });

    it('should have call handleOnChange once', () => {
      jest.clearAllMocks();
      const props = {};
      const search = new Search(props);
      const event = { target: { value: 'some-value' } };
      search.setValue = jest.fn();

      search.handleOnChange(event);
      expect(search.setValue.mock.calls.length).toEqual(1);
      expect(search.setValue).toBeCalledWith(event.target.value);
    });

    it('should have call handleOnClear once', () => {
      jest.clearAllMocks();
      const props = {};
      const search = new Search(props);
      search.setValue = jest.fn();

      search.handleOnClear();
      expect(search.setValue.mock.calls.length).toEqual(1);
      expect(search.setValue).toBeCalledWith('');
    });

    it('should have call setValue callback function properly', () => {
      jest.clearAllMocks();
      const props = {
        onChange: jest.fn(),
      };
      const search = new Search(props);

      search.setValue('some-value');
      expect(props.onChange.mock.calls.length).toEqual(1);
      expect(props.onChange).toBeCalledWith('some-value');

      search.setValue('another value');
      expect(props.onChange.mock.calls.length).toEqual(2);
      expect(props.onChange).toBeCalledWith('another value');
    });
  });
});
