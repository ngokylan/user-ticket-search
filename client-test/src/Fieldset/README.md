Fieldset
```js
import FormItem from '../FormItem';
import Input from '../Input';

<Fieldset>
  <FormItem
    label={'Form Field Label'}
    labelAddon="Option"
    >
    <Input onChange={`onChange`}  autoFocus={true} />
  </FormItem>
</Fieldset>
```

Disabled Fieldset
```js
import FormItem from '../FormItem';
import Input from '../Input';

<Fieldset isDisabled={true}>
  <FormItem
    label={'Form Field Label'}
    labelAddon="Option"
    >
    <Input onChange={`onChange`}  autoFocus={true} />
  </FormItem>
</Fieldset>
```