import React from 'react';
import { mount } from 'enzyme';
import ActionCard from '../../ActionCard';
import { ActionCardProps } from '../../type';

jest.mock(
  '@juggle/resize-observer',
  () =>
    class ResizeObserver {
      observe = jest.fn(value => value);
      disconnect = jest.fn();
    }
);

const defaultProps: ActionCardProps = {
  expandBtnAriaLabel: 'Expand',
};
const mountComponent = (customProps: ActionCardProps) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount<ActionCard>(<ActionCard {...props} />);
  const component = wrapper.find('.actioncard');

  return { props, component, wrapper };
};

describe('ActionCard', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent({
        children: null,
      });
      expect(wrapper).toHaveLength(1);
    });
  });

  describe('props', () => {
    describe('default', () => {
      it('should have expected default props', () => {
        expect(JSON.stringify(defaultProps)).toBe(
          JSON.stringify(ActionCard.defaultProps)
        );
      });

      it.each([
        ['actioncard-default', {}],
        ['actioncard-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { component } = mountComponent(props);
        expect(component.prop('data-testid')).toBe(expectedTestId);
      });
    });
  });

  describe('children', () => {
    it('should render children', () => {
      const { wrapper } = mountComponent({ children: 'Hello world' });
      expect(
        wrapper.find('.actioncard__content-inner-wrapper').text()
      ).toBe('Hello world');
    });
  });

  describe('interaction', () => {
    it.each([
      [
        'should',
        '.actioncard__expand-btn-wrapper',
        1,
        { isExpandable: true },
      ],
      ['should', '.actioncard--is-expandable', 1, { isExpandable: true }],
      ['should not', '.actioncard__footer', 0, {}],      
      [
        'should',
        '.actioncard__header',
        1,
        {
          header: {},
        },
      ],
      [
        'should',
        '.actioncard__header-title',
        1,
        {
          header: {
            title: 'Title',
          },
        },
      ],
      [
        'should',
        '.actioncard__header-title-add-on',
        1,
        {
          header: {
            titleAddOn: 'Title add on',
          },
        },
      ],     
      [
        'should not',
        '.actioncard__header-options',
        0,
        {
          header: {
            options: {
              dropdownOptions: [],
            },
          },
        },
      ],           
    ])('%s have %s', (name, element, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper.find(element)).toHaveLength(expected);
    });

    describe('expand functionality', () => {
      it('should show/hide the content', () => {
        const { wrapper } = mountComponent({ children: null });
        expect(wrapper.state('isExpanded')).toEqual(false);
        wrapper.instance().expandBtnClickHandler();
        expect(wrapper.state('isExpanded')).toEqual(true);
        wrapper.instance().expandBtnClickHandler();
        expect(wrapper.state('isExpanded')).toEqual(false);
      });
    });
  });
});
