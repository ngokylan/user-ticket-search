import React from 'react';
import { mount } from 'enzyme';
import HeaderTitle from '../component/HeaderTitle';
import { HeaderTitleProps } from '../type';

const defaultProps: HeaderTitleProps = undefined;
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<HeaderTitle {...props} />);

  return { props, wrapper };
};

describe('Header::HeaderTitle', () => {
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
          JSON.stringify(HeaderTitle.defaultProps)
        );
      });
    });
  });
});
