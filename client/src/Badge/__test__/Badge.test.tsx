import React from 'react';
import { mount } from 'enzyme';
import Badge, { BadgeProps } from '..';

const defaultProps: BadgeProps = {
  role: 'status',
  type: 'grey',
};

const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Badge {...props} />);
  const component = wrapper.find('.badge');

  return { props, wrapper, component };
};

describe('Badge', () => {
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
          JSON.stringify(Badge.defaultProps)
        );
      });

      it.each([
        ['badge-default', {}],
        ['badge-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { component } = mountComponent(props);
        expect(component.prop('data-testid')).toBe(expectedTestId);
      });
    });

    describe('children', () => {
      it('should render children', () => {
        const { wrapper } = mountComponent({ children: 'Hello world' });
        expect(wrapper.find('.badge__label').text()).toBe('Hello world');
      });

      it('should not render children', () => {
        const { wrapper } = mountComponent();
        expect(wrapper.find('.badge__label')).toHaveLength(0);
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
        ['grey', '.badge--grey'],
        ['outlined', '.badge--outlined'],
        ['warning', '.badge--warning'],
        ['info', '.badge--info'],
        ['success', '.badge--success'],
        ['danger', '.badge--danger'],
      ])(
        'should render proper class name for prop type as %s',
        (type, query) => {
          const { wrapper } = mountComponent({ type });
          expect(wrapper.find(query)).toHaveLength(1);
        }
      );
    });
  });

  describe('interaction', () => {
    it.each([
      ['should', '.badge--lighter', 1, { children: 0 }],
      ['should', '.badge--lighter', 1, { children: '0' }],
      ['should not', '.badge--lighter', 0, { children: undefined }],
      ['should not', '.badge--lighter', 0, { children: null }],
      [
        'should not',
        '.badge--lighter',
        0,
        { children: 'some other text' },
      ],
      ['should not', '.badge--lighter', 0, { children: 10 }],
      ['should', '.badge__icon', 1, { icon: 'icon' }],
      ['should not', '.badge__icon', 0, {}],      
    ])('%s have %s', (name, element, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper.find(element)).toHaveLength(expected);
    });
  });
});
