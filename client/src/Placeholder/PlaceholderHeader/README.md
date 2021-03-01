## When to use

A placeholder for header component

## Examples

With Title & Buttons & BackButton & SubHeading & Tabs
```jsx
<PlaceholderHeader />
```

With Title & BackButton & SubHeading & Tabs
```jsx
<PlaceholderHeader hasButtons={false} />
```

With Title & SubHeading & Tabs
```jsx
<PlaceholderHeader hasButtons={false} hasBackButton={false} />
```

With Title & Tabs
```jsx
<PlaceholderHeader hasButtons={false} hasBackButton={false} hasSubHeading={false} />
```

With Title only
```jsx
<PlaceholderHeader hasButtons={false} hasBackButton={false} hasSubHeading={false} hasTabs={false} />
```