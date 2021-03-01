import * as React from 'react';
import { shallow, mount } from 'enzyme';
import {
  HomeIcon,
  HomeOutlinedIcon,
  EmailTemplatesIcon,
  TemplatesIcon,
  ThemesIcon,
  SearchIcon,
  CloseIcon,
  PeopleIcon,
  InfoOutlinedIcon,
  InfoIcon,
  DescriptionOutlinedIcon,
  DescriptionIcon,  
  ErrorOutlineIcon,
  ErrorIcon,  
  CancelIcon,  
} from '../';
import Icon from '../Icon';

describe('Icon', () => {
  it('should render', () => {
    const icon = shallow(<Icon />);
    expect(icon).toHaveLength(1);
  });

  it.each([
    ['type default', {}],
    ['type home', { name: 'home' }],
    ['type info', { name: 'info' }],
  ])('should match snapshot %s', (name, props) => {
    const icon = mount(<Icon {...props} />);
    expect(icon).toMatchSnapshot();
  });

  it('should render children', () => {
    const icon = shallow(<Icon>Hello world</Icon>);
    expect(icon.text()).toBe('Hello world');
  });

  it.each([
    ['data-testid', 'icon', {}],
    ['data-testid', 'icon', { name: 'calendar' }],
    ['className', 'icon icon--size-md', {}],
    ['title', 'home', { title: 'home' }],
  ])('should render with prop %s as %s', (name, expected, props) => {
    const icon = shallow(<Icon {...props} />);
    expect(icon.prop(name)).toBe(expected);
  });

  it.each([
    ['HomeIcon', <HomeIcon key="HomeIcon" />],
    ['HomeOutlinedIcon', <HomeOutlinedIcon key="HomeOutlinedIcon" />],   
    ['TemplatesIcon', <TemplatesIcon key="TemplatesIcon" />],
    ['ThemesIcon', <ThemesIcon key="ThemesIcon" />],    
    ['SearchIcon', <SearchIcon key="SearchIcon" />],   
    ['CloseIcon', <CloseIcon key="CloseIcon" />],    
    ['PeopleIcon', <PeopleIcon key="PeopleIcon" />],   
    ['InfoOutlinedIcon', <InfoOutlinedIcon key="InfoOutlinedIcon" />],
    ['InfoIcon', <InfoIcon key="InfoIcon" />],
    [
      'DescriptionOutlinedIcon',
      <DescriptionOutlinedIcon key="DescriptionOutlinedIcon" />,
    ],
    ['DescriptionIcon', <DescriptionIcon key="DescriptionIcon" />],
    ['ErrorOutlineIcon', <ErrorOutlineIcon key="ErrorOutlineIcon" />],
    ['ErrorIcon', <ErrorIcon key="ErrorIcon" />],    
    ['CancelIcon', <CancelIcon key="CancelIcon" />],   
  ])('Icon should match snapshot %s', (name, icon) => {
    const actualIcon = mount(icon);
    expect(actualIcon).toMatchSnapshot();
  });
});
