import React from 'react';
import { mount, shallow } from 'enzyme';
import Card, { CardProps } from '..';

const defaultProps: CardProps = undefined;
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Card {...props} />);
  const component = wrapper.find('.card');
  const instance = wrapper.instance();
  return { props, wrapper, component, instance };
};

describe('Card', () => {
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

    it.each([['role', 'test'], ['role', undefined]])(
      'should be match with snapshot when props %s is %s',
      (propsName, propsValue) => {
        const { wrapper } = mountComponent({ [propsName]: propsValue });
        expect(wrapper).toMatchSnapshot();
      }
    );
  });

  describe('props', () => {
    describe('default', () => {
      it('should have expected default props', () => {
        expect(JSON.stringify(defaultProps)).toBe(
          JSON.stringify(Card.defaultProps)
        );
      });

      it.each([
        ['card-default', {}],
        ['card-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { component } = mountComponent(props);
        expect(component.prop('data-testid')).toBe(expectedTestId);
      });
    });

    describe('children', () => {
      it('should render children', () => {
        const { wrapper } = mountComponent({ children: 'Hello world' });
        expect(wrapper.find('.card__content').text()).toBe('Hello world');
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

      it.each([['role', 'test', { role: 'test' }]])(
        'should render prop %s as %s',
        (name, expected, props) => {
          const { component } = mountComponent(props);
          expect(component.prop(name)).toBe(expected);
        }
      );
    });
  });

  describe('interaction', () => {
    it.each([
      ['should', '.card', 1, {}],
      ['should', '.custom-class', 2, { className: 'custom-class' }],
      ['should', '.card--is-full-height', 1, { isFullHeight: true }],
      ['should not', '.card--is-full-height', 0, { isFullHeight: false }],
      ['should', '.card__option', 1, { option: 'some option' }],
      ['should not', '.card__option', 0, {}],
      ['should', '.card__content', 1, {}],
      ['should', '.card__header', 1, { heading: 'some heading' }],
      ['should', '.card__header', 1, { description: 'some description' }],
      ['should', 'Heading', 1, { heading: 'some heading' }],
      ['should not', 'Heading', 0, {}],
      ['should', 'Paragraph', 1, { description: 'some description' }],
      ['should not', 'Paragraph', 0, {}],
      ['should', 'Text', 1, { heading: 'some heading', prefix: 'some prefix' }],
      ['should not', 'Text', 0, {}],
      ['should', 'Image', 1, { image: 'some image url' }],
      ['should not', 'Image', 0, {}],
      [
        'should',
        'Badge',
        1,
        {
          badges: [{ children: 'some children text' }],
        },
      ],
      ['should not', 'Badge', 0, {}],
    ])('%s have %s', (name, element, expected, props) => {
      const { wrapper } = mountComponent(props);
      expect(wrapper.find(element)).toHaveLength(expected);
    });

    describe('Interaction', () => {
      it('handleClick should call onClick', () => {
        const props = {
          onClick: jest.fn(),
        };
        const { instance } = mountComponent(props);
        instance.handleClick();
        expect(props.onClick).toBeCalled();
      });
      it('handleKeyPress Enter should call onClick', () => {
        const props = {
          onClick: jest.fn(),
        };
        const { instance } = mountComponent(props);
        instance.handleKeyPress({ key: 'Enter' } as React.KeyboardEvent);
        expect(props.onClick).toBeCalled();
      });
    });
  });
});
