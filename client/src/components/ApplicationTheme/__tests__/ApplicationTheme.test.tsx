import React from 'react';
import { mount } from 'enzyme';
import Theme, { ApplicationTheme, ThemeProvider, defaultTheme } from '..';
import { defaultTheme as defaultThemeStyle } from '../../../_lib/style';

const defaultProps = { theme: defaultThemeStyle };
const mountComponent = (customProps: any = {}) => {
  const props = { ...defaultProps, ...customProps };
  const wrapper = mount(<ApplicationTheme {...props} />);
  const component = wrapper.find('PopoverBase');
  const instance: any = wrapper.instance();

  return { props, wrapper, component, instance };
};

describe('ApplicationTheme', () => {
  it('should render without error and default theme', () => {
    const { wrapper } = mountComponent();
    expect(wrapper).toHaveLength(1);
    const cssRules = document.getElementById('ApplicationTheme').sheet
      .cssRules[0];
    expect(cssRules.selectorText).toBe('.elements *');
    expect(cssRules.style['font-family']).toBe(defaultThemeStyle.font);
  });
});
