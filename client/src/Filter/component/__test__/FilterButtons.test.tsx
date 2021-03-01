import React from 'react';
import { mount } from 'enzyme';
import FilterButtons, { FilterButtonsProps } from '../FilterButtons';

const requiredProps: FilterButtonsProps = {
  statuses: [
    {
      colour: 'primary',
      count: 1,
      value: 'value 1',
      label: 'label 1',
    },
  ],
  onChange: jest.fn(),
  selected: null,
};

const mountComponent = (customProps: any = {}) => {
  const props = { ...requiredProps, ...customProps };
  const wrapper = mount(<FilterButtons {...props} />);
  const component = wrapper.find('.filter__buttons');

  return { props, wrapper, component };
};

describe('FilterButtons', () => {
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
});
