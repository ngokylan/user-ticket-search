module.exports.constantService = {
  DEFAULT_CONFIG: {
    host: 'localhost',
    user: 'sampleuser',
    password: 'samplepassword',
    database: 'sampledb',
    port: 8000,
  },
  API_VERSION: {
    MOCK: '/v0',
    V1: '/v1'
  },
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
  ORGANIZATION_ENTITY: {
    columns: {
      id: '_id',
      url: 'url',
      external_id: 'external_id',
      name: 'name',
      domain_names0: 'domain_names0',
      domain_names1: 'domain_names1',
      domain_names2: 'domain_names2',
      domain_names3: 'domain_names3',
      created_at: 'created_at',
      details: 'details',
      shared_tickets: 'shared_tickets',
      tags0: 'tags0',
      tags1: 'tags1',
      tags2: 'tags2',
      tags3: 'tags3',
    }
  },
  USER_ENTITY: {
    columns: {
      id: '_id',
      external_id: 'external_id',
      name: 'name',
      alias: 'alias',
      created_at: 'created_at',
      active: 'active',
      verified: 'verified',
      shared: 'shared',
      locale: 'locale',
      timezone: 'timezone',
      last_login_at: 'last_login_at',
      email: 'email',
      phone: 'phone',
      signature: 'signature',
      organization_id: 'organization_id',
      tags0: 'tags0',
      tags1: 'tags1',
      tags2: 'tags2',
      tags3: 'tags3',
      suspended: 'suspended',
      role: 'role'
    },
    assignee: {
      name: 'assigned_tickets',
    },
    submitter: {
      name: 'submitted_tickets',
    },
  },
  TICKET_ENTITY: {
    columns: {
      id: '_id',
      url: 'url',
      external_id: 'external_id',
      created_at: 'created_at',
      type: 'type',
      subject: 'subject',
      description: 'description',
      priority: 'priority',
      status: 'status',
      submitter_id: 'submitter_id',
      assignee_id: 'assignee_id',
      organization_id: 'organization_id',
      tags0: 'tags0',
      tags1: 'tags1',
      tags2: 'tags2',
      tags3: 'tags3',
      has_incidents: 'has_incidents',
      due_at: 'due_at',
      via: 'via'
    },
    assignee: {
      name: 'assginee',     
    },
    submitter: {
      name: 'submitter',
    },
    tickets: {
      name: 'tickets'
    }
  }
};
