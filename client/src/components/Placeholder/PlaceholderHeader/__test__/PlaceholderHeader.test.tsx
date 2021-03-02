import React from 'react';
import { mount } from 'enzyme';
import { PlaceholderHeader } from '../..';
import PlaceholderHeaderProps from '..';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0;
global.Math = mockMath;

const defaultProps: PlaceholderHeaderProps = {
  hasSubHeading: true,
  hasBackButton: true,
  hasButtons: true,
  hasTabs: true,
  numberOfTabs: 3,
};

const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<PlaceholderHeader {...props} />);
  const component = wrapper.find('.dashboard--placeholder');

  return { props, wrapper, component };
};

jest.mock(
  '@juggle/resize-observer',
  () =>
    class ResizeObserver {
      observe = jest.fn(value => value);
      disconnect = jest.fn();
    }
);

describe('PlaceholderHeader', () => {
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
          JSON.stringify(PlaceholderHeader.defaultProps)
        );
      });
      it.each([
        ['header-wrapper-default', {}],
        ['header-wrapper-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { wrapper } = mountComponent(props);
        // can't not use component due to the component is wrapped with <></>
        expect(
          wrapper.find('[data-testid="' + expectedTestId + '"]').length
        ).toBe(1);
      });
    });
    describe('custom', () => {
      it.each([
        ['hasButtons', '.header-btns', { hasButtons: true }],        
        ['hasSubHeading', '.header__sub-heading', { hasSubHeading: true }],
        ['hasTabs', '.tabs', { hasTabs: true }],
      ])('should render %s', (propName, expectedClass, props) => {
        const { wrapper } = mountComponent(props);
        expect(wrapper.find(expectedClass).exists()).toBe(true);
      });
      it.each([
        ['hasButtons', '.header-btns', { hasButtons: false }],       
        [
          'hasSubHeading',
          '.header__sub-heading',
          { hasSubHeading: false },
        ],
        ['hasTabs', '.tabs', { hasTabs: false }],
      ])('should not render %s', (propName, expectedClass, props) => {
        const { wrapper } = mountComponent(props);
        expect(wrapper.find(expectedClass).exists()).toBe(false);
      });
      it.each([
        [
          5,
          {
            hasButtons: true,
            numberOfTabs: 5,
          },
        ],
      ])('should render %s tabs', (expectedNumber, props) => {
        const { wrapper } = mountComponent(props);
        expect(wrapper.find('.tabs__item').length).toBe(expectedNumber);
      });
    });
  });
});
