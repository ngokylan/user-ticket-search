module.exports.CONSTANT = {
  SortOrder: {
    asc: 'asc',
    desc: 'desc',
  },
  SEARCH_TYPE: {
    user: 'user',
    organization: 'organization',
    ticket: 'ticket',
  },
  USER_TICKET_TYPE: {
    assignee: {
      name: 'assigned_tickets',
      column: 'assignee_id',
    },
    submitter: {
      name: 'submitted_tickets',
      column: 'submitter_id',
    },
  },
  TICKET_USER_TYPE: {
    assignee: {
      name: 'assginee',
      column: 'assignee_id',
    },
    submitter: {
      name: 'submitter',
      column: 'submitter_id',
    },
  },
};
