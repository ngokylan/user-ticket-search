import React from 'react';
import { mount, shallow } from 'enzyme';
import withLayoutAware from '../component/LayoutAware';

describe('Layout::LayoutAware', () => {
  describe('api', () => {
    it('should mount properly', () => {
      jest.clearAllMocks();
      const SampleComponent = () => <div>content</div>;
      const LayoutAwareSampleComponent = withLayoutAware(SampleComponent);
      const wrapper = mount(<LayoutAwareSampleComponent />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should shallow properly', () => {
      jest.clearAllMocks();
      const SampleComponent = () => <div>content</div>;
      const LayoutAwareSampleComponent = withLayoutAware(SampleComponent);
      const wrapper = shallow(<LayoutAwareSampleComponent />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
