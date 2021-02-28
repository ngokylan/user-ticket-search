The Filter component allows for data to be filtered on an array of statuses passed in. 

### Behaviour
The statuses passed in will fill the first 5 buttons. The remaining statuses will populate the dropdown. 

#### Number of filter items per breakpoint
At different screen sizes, the following number of buttons will be shown.
- xs: 1
- sm: 3
- md: 5
- lg: 5
- xl: 5
- xxl: 5

### Architecture
Internally the component consists of the following sub-components:
- FilterButtons: Renders the main filter buttons. Uses the Radio Bar component  
- FilterDropdown: Renders the dropdown for the remaining statuses. Uses the Dropdown component
- FilterCustomModal: Renders the modal containing the custom filter options. Uses the Modal component
- FilterBadge: Renders the count for each filter. Uses the Badge component
- CustomFilterSummary: Renders the selected custom filter options.

### Examples
Basic Filters
```js
<Filter
  onStatusChange={() => {}}
  statuses={[
    { colour: 'info', count: 1, value: 'active', label: 'Active' },
    { colour: 'success', count: 1, value: 'finalised', label: 'Finalised' },
    { colour: 'danger', count: 1, value: 'all', label: 'All' },
    { count: 1, value: 'status1', label: 'Status 1' },
    { count: 1, value: 'status2', label: 'Status 2' },
    { count: 1, value: 'status3', label: 'Status 3' }
  ]}
/>
```

With custom filters render prop (renderCustomFilters) and custom filter summary
```js
import { AssignmentIndIcon as AssignmentIcon, SmsFailedIcon as FaceIcon } from '../main';

<Filter
  onStatusChange={() => {}}
  renderCustomFilters={() => { return (<div>Custom filters here</div>)}}
  onApplyCustomFilters={() => {}}
  statuses={[
    { colour: 'info', count: 1, value: 'active', label: 'Active' },
    { colour: 'success', count: 1, value: 'finalised', label: 'Finalised' },
    { colour: 'danger', count: 1, value: 'all', label: 'All' },
    { count: 1, value: 'status1', label: 'Status 1' },
    { count: 1, value: 'status2', label: 'Status 2' },
    { count: 1, value: 'status3', label: 'Status 3' }
  ]}
  customFilterSummary={[
    {
      icon: <AssignmentIcon />,
      label: 'Pending, Open, & Rejected'
    },
    {
      icon: <FaceIcon />,
      label: 'Created Date'
    }
  ]}
  onCustomFilterClear={() => {}}
  onCustomFilterSave={() => {}}
/>
```

Filters with no count
```js
<Filter
  onStatusChange={() => {}}
  statuses={[
    { colour: 'info', value: 'active', label: 'Active' },
    { colour: 'success', value: 'finalised', label: 'Finalised' },
    { colour: 'danger', value: 'all', label: 'All' },
    { value: 'status1', label: 'Status 1' },
    { value: 'status2', label: 'Status 2' },
  ]}
/>