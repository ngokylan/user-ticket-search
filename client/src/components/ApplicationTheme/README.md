ApplicationTheme applys the global theme variables such as font that is provided by the ThemeProvider. Please refer to demo page.

### When To Use
When the application needs to apply the global theme.

### Examples
```js
const theme = {
  ...defaultTheme,
  ...{
    // App Theme goes here
    // font: 'serif',
  },
};
<ThemeProvider theme={theme}>
<ApplicationTheme />
</ThemeProvider>
```