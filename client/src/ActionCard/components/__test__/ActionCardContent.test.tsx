import React from 'react';
import { mount } from 'enzyme';
import ActionCardContent from '../ActionCardContent';

describe('ActionCard::ActionCardContent', () => {
  it('should render component without any crash', () => {
    const wrapper = mount(
      <ActionCardContent icon={null} heading="heading">
        content
      </ActionCardContent>
    );
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.actioncard__content')).toHaveLength(1);
    expect(wrapper.find('.actioncard__content-header')).toHaveLength(1);
    expect(wrapper.find('.actioncard__content-icon')).toHaveLength(1);
    expect(wrapper.find('.actioncard__content-heading')).toHaveLength(1);
    expect(wrapper.find('.actioncard__content-content')).toHaveLength(1);
  });
});
