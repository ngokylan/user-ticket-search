## When to use

The Header component provides content and actions related to the current screen.
What's included are:<br />
Title, Title Addon(Title Badge), SubHeading, Buttons(Actions), Primary Button, Back Button, Subpage Tab Menu.<br />
It is also engaged to Search and BulkAction to interact with. For this feature, the Header need to be wrapped with LayoutContext. For more example, please refer to the template app.

## Examples

Title only
```jsx
<Header
  title="Technical Application Support Specialist"
/>
```

Title + Back Button + Primary Button
```jsx
const backButton = {
  title: 'Requisitions',
  onClick: function () {
    console.log('back button!');
  }
};
const primaryButton = {
  icon: '',
  label: 'Save',
  onClick: function () {
    console.log('primary button!');
  }
};
<Header
  title="Technical Application Support Specialist"
  backButton={backButton}
  primaryButton={primaryButton}
/>
```

Title + Back Button + Primary Button with Icon + Action Buttons
```jsx
import {
    AddIcon,
  SearchIcon,
  WbSunnyOutlinedIcon as BadgeOpenIcon,
  PersonalDetailsOutlinedIcon as UserIcon,
  BulkActionIcon as CheckBoxIcon,
  CancelOutlinedIcon as WithdrawIcon,
  ProfessionalDevelopmentIcon as TransferIcon,
  DoneAllIcon as CheckIcon,
  ErrorIcon,
  ErrorOutlineIcon,
  ListIcon as ListAltIcon,
  HelpOutlineIcon as HelpIcon, } from '../main';
const backButton = {
  title: 'Requisitions',
  onClick: function () {
    console.log('back button!');
  }
};
const primaryButton = {
  icon: <AddIcon />,
  label: '',
  onClick: function () {
    console.log('primary button!');
  }
};
const getHeaderButtons = [
  {
    icon: <ErrorOutlineIcon />,
    label: 'Side Panel',
    onClick: ()=>{}
  }, {
    icon: <SearchIcon />,
    label: 'Search',
    onClick: ()=>{}
  }
  , {
    icon: <CheckBoxIcon />,
    label: 'Bulk Action',
    onClick: ()=>{}
  }, {
    icon: <SearchIcon />,
    label: 'Test One',
    onClick: function () {
      console.log('search button 3!');
    }
  }, {
    icon: <SearchIcon />,
    label: 'Test Two',
    onClick: function () {
      console.log('search button 4!');
    }
  }
];
<Header
  title="Technical Application Support Specialist"
  backButton={backButton}
  primaryButton={primaryButton}
  buttons={getHeaderButtons}
/>
```

Plus - Tabs, SubHeading, TitleAddon
```jsx
import {
  AddIcon,
  SearchIcon,
  WbSunnyOutlinedIcon as BadgeOpenIcon,
  PersonalDetailsOutlinedIcon as UserIcon,
  BulkActionIcon as CheckBoxIcon,
  CancelOutlinedIcon as WithdrawIcon,
  ProfessionalDevelopmentIcon as TransferIcon,
  DoneAllIcon as CheckIcon,
  ErrorIcon,
  ErrorOutlineIcon,
  ListIcon as ListAltIcon,
  HelpOutlineIcon as HelpIcon,
} from '../main';
import Badge from '../Badge';

const primaryButton = {
  icon: <AddIcon />,
  label: '',
  onClick: function () {
    console.log('primary button!');
  }
};
const bulkActions = [
  {
    icon: <WithdrawIcon />,
    label: 'Withdraw',
    onClick: function () { console.log('Withdraw!!!'); }
  }, {
    icon: <TransferIcon />,
    label: 'Transfer Owner',
    onClick: function () { console.log('Transfer Owner!!!'); }
  }, {
    icon: <CheckIcon />,
    label: 'Finalise',
    onClick: function () { console.log('Finalise!!!'); }
  }
];

const backButton = {
  title: 'Requisitions',
  onClick: function () {
    console.log('back button!');
  }
};

const getHeaderButtons = [
  {
    icon: <ErrorOutlineIcon />,
    label: 'Side Panel',
    onClick: ()=>{}
  }, {
    icon: <SearchIcon />,
    label: 'Search',
    onClick: ()=>{}
  }
  , {
    icon: <CheckBoxIcon />,
    label: 'Bulk Action',
    onClick: ()=>{}
  }, {
    icon: <SearchIcon />,
    label: 'Test One',
    onClick: function () {
      console.log('search button 3!');
    }
  }, {
    icon: <SearchIcon />,
    label: 'Test Two',
    onClick: function () {
      console.log('search button 4!');
    }
  }
];

const headerTabLinks = [
  {
    label: 'Overview',
    onClick: function () {
      console.log('tab');
    },
    active: false
  }, {
    label: 'Candidates',
    onClick: function () {
      console.log('tab');
    },
    active: false
  }, {
    label: 'Job ADs',
    onClick: function () {
      console.log('tab');
    },
    active: false
  }, {
    label: 'Interviews',
    onClick: function () {
      console.log('tab');
    },
    active: false
  }, {
    label: 'Panel Reviews',
    onClick: function () {
      console.log('tab');
    },
    active: true
  }, {
    label: 'Offers',
    onClick: function () {
      console.log('tab');
    },
    active: false
  }, {
    label: 'Costs',
    onClick: function () {
      console.log('tab');
    },
    active: false
  }
];

<Header
  title="Technical Application Support Specialist"
  titleAddon={<Badge type="info" icon={<BadgeOpenIcon />}>OPEN</Badge>}
  subHeading="Technical Support (109212)"
  backButton={backButton}
  buttons={getHeaderButtons}
  tabs={headerTabLinks}
  primaryButton={primaryButton}
/>
```