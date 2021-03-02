import React from 'react';
import { mount } from 'enzyme';
import Image, { ImageProps } from '..';

const defaultProps: ImageProps = undefined;
const imageSrc =
  'https://theme.zdassets.com/theme_assets/1/7eb075fb3220e4a248a73351fc5ad59e3be64586.gif';
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<Image {...props} />);
  const component = wrapper.find('img.image');

  return { props, wrapper, component };
};

describe('Image', () => {
  describe('rendering', () => {
    it('should render component without any crash', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toHaveLength(1);
    });

    it('should be match with snapshot', () => {
      const { wrapper } = mountComponent();
      expect(wrapper).toMatchSnapshot('1');
    });
  });

  describe('props', () => {
    describe('default', () => {
      it.each([
        ['image-default', {}],
        ['image-custom-id', { id: 'custom-id' }],
      ])('should render test ID properly', (expectedTestId, props) => {
        const { component } = mountComponent(props);
        expect(component.prop('data-testid')).toBe(expectedTestId);
      });
    });
  });

  describe('custom', () => {
    it.each([
      ['id', 'custom-id', { id: 'custom-id' }],
      ['src', imageSrc, { src: imageSrc }],
      ['alt', 'alt text', { alt: 'alt text' }],
      ['width', '100', { width: '100' }],
      ['height', '100', { height: '100' }],
      ['srcSet', imageSrc, { srcSet: imageSrc }],
      ['type', 'rounded', { type: 'rounded' }],
      ['objectFit', 'objectFit', { objectFit: 'objectFit' }],
      ['role', 'logo', { role: 'logo' }],
    ])('should render prop %s as %s for Image', (name, expected, props) => {
      const { wrapper } = mountComponent(props);
      const CheckboxInput = wrapper.find('Image');
      expect(CheckboxInput.prop(name)).toBe(expected);
    });
  });
});
