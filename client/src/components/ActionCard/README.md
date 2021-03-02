### Examples

Without optional props:

```js
import { ActionCard } from '../main';

<ActionCard>
    <ActionCard.Content heading="Alex Lee">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, laborum.
    </ActionCard.Content>

    <ActionCard.Content heading="Mary Ann">
      Lorem ipsum dolor sit amet, consectetur adipisicing.
    </ActionCard.Content>
</ActionCard>
```

With all props:

```js
import { SwapHorizIcon as SwapHorizOutlinedIcon, AssignmentLateIcon as AssignmentLateOutlinedIcon, CheckIcon as CheckOutlinedIcon, CloseIcon as CloseOutlinedIcon } from '../main';
import { ActionCard, Avatar } from '../main';

const onDropdownOptionClick = () => {
  console.log('onDropdownOptionClick');
};

const onApprove = () => {
  console.log('onApprove');
}

const onDecline = () => {
  console.log('onDecline');
}

<ActionCard
  header={{
    icon: <SwapHorizOutlinedIcon />,
    title: 'Shift swap',
    titleAddOn: '5 minutes ago',
    badge: {
      label: 'Pending',
      icon: <AssignmentLateOutlinedIcon />,
      type: 'info',
    },
    options: {
      dropdownOptions: [
        {
          icon: <SwapHorizOutlinedIcon />,
          label: 'Option 1',
          onClick: onDropdownOptionClick,
        },
        {
          icon: <SwapHorizOutlinedIcon />,
          label: 'Option 2',
          onClick: onDropdownOptionClick,
          withDivider: true,
        },
        {
          icon: <SwapHorizOutlinedIcon />,
          label: 'Option 2',
          onClick: onDropdownOptionClick,
          isDisabled: true,
        },
      ],
    },
  }}
  actions={[
    {
      label: 'Approve',
      onClick: onApprove,
      icon: <CheckOutlinedIcon />,
    },
    {
      label: 'Decline',
      onClick: onDecline,
      icon: <CloseOutlinedIcon />,
    },
  ]}
  isExpandable={true}
>
  <ActionCard.Content
    heading="Alex Lee"
    icon={<Avatar label="Alex Lee" />}
  >
    Lorem ipsum dolor sit amet.
  </ActionCard.Content>

  <ActionCard.Content
    heading="Mary Ann"
    icon={<Avatar label="Mary Ann" />}
  >
    Lorem ipsum dolor sit amet.
  </ActionCard.Content>
</ActionCard>
```
