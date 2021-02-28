Buttons are used as triggers for actions. They are used in forms, toolbars, dialog footers and as stand-alone action triggers.

### When To Use
A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

### Examples

Button
```js
<Button>Default Button</Button>
<Button isUppercase={false}>Default Button - non uppercase</Button>
<Button type="primary">Primary Button</Button>
<Button type="danger">Danger Button</Button>
```

Button with badge
```js
<Button>Default Button</Button>
<Button isUppercase={false} badge={12}>Default Button - non uppercase</Button>
<Button type="primary" badge={12}>Primary Button</Button>
<Button type="danger" badge={12}>Danger Button</Button>
```

Disabled button
```js
<Button isDisabled>Submit</Button>
```

Primary button
```js
<Button type="primary">Primary</Button>
```

Danger button
```js
<Button type="danger">Danger</Button>
```

Primary button with bigger text
```js
<Button type="primary">Apply for leave request</Button>
```

Button with isLoading 
```js
<Button isLoading={true}>Loading</Button>
<Button type="danger" isLoading={true}>Loading</Button>
<Button type="primary" isLoading={true}>Loading</Button>
```

Button with isLoading and a loading title
```js
<Button isLoading={true} loadingTitle="Loading ...">Loading</Button>
<Button type="danger" isLoading={true} loadingTitle="Loading ...">Loading</Button>
<Button type="primary" isLoading={true} loadingTitle="Loading ...">Loading</Button>
```

Button with Tooltip 
```js
<Button icon={<LanguageIcon />} tooltip={{title:'Tooltip top',placement:'top'}} />
<Button icon={<LanguageIcon />} tooltip={{title:'Tooltip bottom',placement:'bottom'}} />
```
