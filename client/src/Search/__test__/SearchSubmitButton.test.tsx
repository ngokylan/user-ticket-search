import React from 'react';
import { mount } from 'enzyme';
import SearchSubmitButton, {
  SearchSubmitButtonProps,
} from '../component/SearchSubmitButton';

const defaultProps: SearchSubmitButtonProps = undefined;
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<SearchSubmitButton {...props} />);
  const component = wrapper.find('.search__btn-submit');

  return { props, wrapper, component };
};

describe('Search::SearchSubmitButton', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent({ value: 'some-value' });
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
          JSON.stringify(SearchSubmitButton.defaultProps)
        );
      });
    });

    describe('custom', () => {
      const mockOnSubmit = jest.fn();
      it.each([
        ['isText', true, {}],
        ['className', 'search__btn-submit', {}],
        ['isDisabled', true, {}],
        ['isDisabled', true, { value: false }],
        ['isDisabled', false, { value: 'some-value' }],
        ['isDisabled', false, { isSubmitEnabledAlways: true }],
        ['isDisabled', false, { value: false, isSubmitEnabledAlways: true }],
        [
          'isDisabled',
          false,
          { value: 'some-value', isSubmitEnabledAlways: true },
        ],
        [
          'onClick',
          mockOnSubmit,
          { value: 'some-value', onSubmit: mockOnSubmit },
        ],
      ])('should render prop %s as %s', (name, expected, props) => {
        const { wrapper } = mountComponent(props);
        expect(wrapper.find('Button').prop(name)).toBe(expected);
      });
    });

    describe('onClick', () => {
      it('onSubmit should be passed to onClick', () => {
        const mockOnSubmit = 'jest.fn()';
        const { wrapper } = mountComponent({
          value: 'some-value',
          onSubmit: mockOnSubmit,
        });
        expect(wrapper.find('Button').prop('onClick')).toMatch(mockOnSubmit);
      });
      it('onSubmit should not be passed to onClick', () => {
        const mockOnSubmit = 'mock-function';
        const { wrapper } = mountComponent({
          value: false,
          onSubmit: mockOnSubmit,
          isSubmitEnabledAlways: false,
        });
        expect({ test: wrapper.find('Button').prop('onClick') }).toMatchObject({
          test: undefined,
        });
      });
    });
  });
});
