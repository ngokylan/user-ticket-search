import React from 'react';
import { mount } from 'enzyme';
import HeaderTabs from '../component/HeaderTabs';
import { HeaderTabsProps } from '../type';

const defaultProps: HeaderTabsProps = undefined;
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<HeaderTabs {...props} />);

  return { props, wrapper };
};

describe('Header::HeaderTabs', () => {
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
          JSON.stringify(HeaderTabs.defaultProps)
        );
      });
    });

    describe('custom', () => {
      it('should render list item for tabs prop', () => {
        jest.clearAllMocks();
        const tabObject = {
          active: true,
          onClick: jest.fn(),
          label: 'A',
        };

        const { wrapper } = mountComponent({
          tabs: [tabObject],
        });

        const liElem = wrapper.find('li');
        expect(liElem.prop('className')).toBe(
          'tabs__item tabs__item--active'
        );
        const aElem = liElem.find('a');
        expect(aElem.prop('onClick')).toBe(tabObject.onClick);
        expect(aElem.prop('children')).toBe(tabObject.label);
      });
    });
  });
});
