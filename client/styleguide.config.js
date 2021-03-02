const path = require('path');

// Use this to change the theme of styleguidist
// https://github.com/styleguidist/react-styleguidist/blob/master/src/client/styles/theme.js
module.exports = {
  title: 'EDS Elements',
  require: [
    path.join(__dirname, 'config/styleguide/setup.js'),
    path.join(__dirname, 'config/styleguide/styles.css'),
  ],
  assetsDir: path.join(__dirname, 'docs/asset'),
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: false },
  }).parse,
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.output = {
      ...webpackConfig.output,
      publicPath: process.env.PUBLIC_URL || '',
    };
    return webpackConfig;
  },
  theme: {},
  sections: [
    {
      name: 'Elements',
      content: 'docs/README.md',
    },
    {
      name: 'Complex Components',
      components: [
        'src/DataTable/DataTable.tsx',
        'src/ListTable/ListTable.tsx',
        'src/Header/Header.tsx',
        'src/TabsHeader/TabsHeader.tsx',
        'src/Filter/Filter.tsx',
        'src/BulkAction/BulkAction.tsx',
        'src/Menu/Menu.tsx',
        'src/Sort/Sort.tsx',
      ],
      exampleMode: 'collapse',
      usageMode: 'expand',
    },
    {
      name: 'General Components',
      components: [
        'src/Link/Link.tsx',
        'src/Typography/Heading/Heading.tsx',
        'src/Typography/Paragraph/Paragraph.tsx',
        'src/Typography/Text/Text.tsx',
        'src/Divider/Divider.tsx',
        'src/Button/Button.tsx',
        'src/ButtonCard/ButtonCard.tsx',
        'src/CheckButton/CheckButton.tsx',
        'src/NativeTable/NativeTable.tsx',
        'src/Sticky/Sticky.tsx',
        'src/Dialog/Dialog.tsx',
        'src/Modal/Modal.tsx',
        'src/MessageBlock/MessageBlock.tsx',
      ],
      // 'hide' | 'collapse' | 'expand'
      exampleMode: 'collapse',
      usageMode: 'expand',
    },
    {
      name: 'Icon Components',
      content: 'docs/icons.md',
    },
    {
      name: 'Layout Components',
      components: [
        'src/Grid/Col/Col.tsx',
        'src/Grid/Row/Row.tsx',
        'src/Grid/Container/Container.tsx',
        'src/Card/Card.tsx',
        'src/ActionCard/ActionCard.tsx',
      ],
      exampleMode: 'collapse',
      usageMode: 'expand',
    },
    {
      name: 'Data Entry Components',
      components: [
        'src/Fieldset/Fieldset.tsx',
        'src/Search/Search.tsx',
        'src/FileUpload/FileUpload.tsx',
        'src/NativeSelect/NativeSelect.tsx',
        'src/Dropdown/Dropdown.tsx',
        'src/Rating/Rating.tsx',
        'src/RadioBar/RadioBar.tsx',
        'src/TextArea/TextArea.tsx',
        'src/FormItem/FormItem.tsx',
        'src/Search/Search.tsx',
        'src/Input/Input.tsx',
        'src/Toggle/Toggle.tsx',
        'src/Pagination/Pagination.tsx',
        'src/Datepicker/Datepicker.tsx',
        'src/DateRange/DateRange.tsx',
        'src/Timepicker/Timepicker.tsx',
        'src/Checkbox/Checkbox.tsx',
        'src/Select/Select.tsx',
        'src/Radio/Radio.tsx',
        'src/RadioGroup/RadioGroup.tsx',
        'src/RadioButtons/RadioButtons.tsx',
        'src/SelectList/SelectList.tsx',
      ],
      exampleMode: 'collapse',
      usageMode: 'expand',
    },
    {
      name: 'Placeholder Components',
      components: [
        'src/Placeholder/PlaceholderDashboard/PlaceholderDashboard.tsx',
        'src/Placeholder/PlaceholderHeader/PlaceholderHeader.tsx',
        'src/Placeholder/PlaceholderListTable/PlaceholderListTable.tsx',
        'src/Placeholder/PlaceholderMenu/PlaceholderMenu.tsx',
      ],
      exampleMode: 'collapse',
      usageMode: 'expand',
    },
    {
      name: 'Data Display Components',
      components: [
        'src/Image/Image.tsx',
        'src/Spinner/Spinner.tsx',
        'src/Loader/Loader.tsx',
        'src/Avatar/Avatar.tsx',
        'src/Tooltip/Tooltip.tsx',
        'src/Timeline/Timeline.tsx',
        'src/Popover/Popover.tsx',
        'src/PopoverBadge/PopoverBadge.tsx',
        'src/DescriptionList/DescriptionList.tsx',
        'src/Alert/Alert.tsx',
        'src/Badge/Badge.tsx',
        'src/Notification/Notification.tsx',
      ],
      exampleMode: 'collapse',
      usageMode: 'expand',
    },
  ],
};
