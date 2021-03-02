const { CONSTANT: constant } = require('./const.ts');

/**
 * convert default array to array with attribute id index for better performance
 *
 * @param list
 */
const convertToIdIndexList = (list) => {
  if (!list && !Array.isArray(list)) {
    return null;
  }

  return list.reduce((previous, item) => {
    if (item && item._id) {
      if (Number.isInteger(item._id)) {
        previous[`${item._id}`] = item;
      } else {
        previous.push(item);
      }
    }

    return previous;
  }, []);
};

/**
 * Init datasource with index for better performance win when searching by index
 */
const initDataSourceIndex = () => {
    const originalUsers = require('./data/users.json');
    const originalTickets = require('./data/tickets.json');
    const originalOrgs = require('./data/organizations.json');
    return {
    user: convertToIdIndexList([...originalUsers]),
    ticket: convertToIdIndexList([...originalTickets]),
    organization: convertToIdIndexList([...originalOrgs]),
  };
};

function sortCompare(field, order) {
  return function sort(a, b) {
    let field1 = a[field];
    let field2 = b[field];

    if (typeof field1 === 'undefined') {
      return 0;
    }

    if (typeof field1 === 'object') {
      switch (field) {
        case 'candidateCount':
          field1 = parseInt(field1.total);
          field2 = parseInt(field2.total);
          break;
      }
    }

    if (typeof field1 === 'number') {
      return order === constant.SortOrder.asc
        ? field1 - field2
        : field2 - field1;
    }

    field1 = field1.toUpperCase();
    field2 = field2.toUpperCase();

    if (field1 < field2) {
      return order === constant.SortOrder.asc ? -1 : 1;
    }
    if (field1 > field2) {
      return order === constant.SortOrder.asc ? 1 : -1;
    }
    return 0;
  };
}

/**
 *
 * @param usersData
 * @param organizations
 */
function transformOrganizationForUser(usersData, organizations) {
  if (!usersData) {
    return null;
  }

  if (!organizations && !Array.isArray(organizations)) {
    return usersData;
  }

  return usersData.map((user) => {
    if (user && user.organization_id && organizations[user.organization_id]) {
      user.organization = organizations[user.organization_id];
    }

    return user;
  });
}

/**
 *
 * @param user
 * @param mappedEntity
 * @param userAttribute
 * @param mappedEntityAttribute
 */
function mapOneToOneRelationship(
  entity1,
  entity2,
  entity1Attribute,
  entity2Attribute
) {
  if (!entity1 || !entity2) {
    return null;
  }

  if (!entity1[entity1Attribute] || !entity2[entity2Attribute]) {
    return null;
  }

  return entity1[entity1Attribute] === entity2[entity2Attribute];
}

/**
 *
 * @param usersData
 * @param tickets
 * @param type
 */
function transformTicketsForUser(users, tickets, type) {
  if (!users) {
    return null;
  }

  if (!tickets && !Array.isArray(tickets)) {
    return users;
  }

  return users.map((user) => {
    if (user) {
      const userTickets = tickets.filter((ticket) =>
        mapOneToOneRelationship(user, ticket, '_id', type.column)
      );
      if (userTickets && userTickets.length > 0) {
        user[type.name] = userTickets;
      }
    }

    return user;
  });
}

/**
 *
 * @param usersData
 * @param tickets
 * @param type
 */
function transformUserForTickets(tickets, users, type) {
  if (!tickets) {
    return null;
  }

  if (!users && !Array.isArray(users)) {
    return tickets;
  }

  return tickets.map((ticket) => {
    if (ticket) {
      const ticketUsers = users.filter((user) =>
        mapOneToOneRelationship(user, ticket, '_id', type.column)
      );
      if (ticketUsers && ticketUsers.length > 0) {
        ticket[type.name] = ticketUsers;
      }
    }

    return ticket;
  });
}

/**
 *
 * @param dataSource
 */
function getUserTransformer(dataSource) {
  let transformedUsers = [];
  transformedUsers = transformOrganizationForUser(
    [...dataSource.user],
    dataSource.organization
  );
  transformedUsers = transformTicketsForUser(
    [...transformedUsers],
    dataSource.ticket,
    constant.USER_TICKET_TYPE.assignee
  );
  transformedUsers = transformTicketsForUser(
    [...transformedUsers],
    dataSource.ticket,
    constant.USER_TICKET_TYPE.submitter
  );

  return transformedUsers;
}

/**
 *
 * @param dataSource
 */
function getTicketTransformer(dataSource) {
  let transformedTickets = [];
  transformedTickets = transformUserForTickets(
    [...dataSource.ticket],
    dataSource.user,
    constant.TICKET_USER_TYPE.assignee
  );
  transformedTickets = transformUserForTickets(
    [...transformedTickets],
    dataSource.user,
    constant.TICKET_USER_TYPE.submitter
  );

  return transformedTickets;
}

function fetchData(dataSource, type) {
  if (!dataSource || !type) {
    return null;
  }

  if (!dataSource[type]) {
    return null;
  }

  switch (type) {
    case constant.SEARCH_TYPE.user:
      return getUserTransformer(dataSource);

    case constant.SEARCH_TYPE.ticket:
      return getTicketTransformer(dataSource);

    case constant.SEARCH_TYPE.organization:
      /**
       * @TODO: to including users and tickets within org
       * add a transformer her
       */
      return dataSource[type];

    default:
      return null;
  }
}

function sortData(fetchedData, criteria) {
  const sortField =
    criteria.sort && criteria.sort.field ? criteria.sort.field : '';
  const sortOrder =
    criteria.sort && criteria.sort.order ? criteria.sort.order : '';

  return fetchedData.slice().sort(sortCompare(sortField, sortOrder));
}

function filterData(sortedFetchData, criteria, searchField) {
  const resultsPerPage =
    criteria.pagination && criteria.pagination.resultsPerPage
      ? criteria.pagination.resultsPerPage
      : 10;
  const pageNumber =
    criteria.pagination && criteria.pagination.pageNumber
      ? criteria.pagination.pageNumber
      : 1;

  const startIndex = pageNumber === 1 ? 0 : (pageNumber - 1) * resultsPerPage;

  if (
    searchField &&
    typeof criteria.filter !== 'undefined' &&
    typeof criteria.filter.keyword !== 'undefined'
  ) {
    return sortedFetchData.filter((datum) => {
      return datum[searchField]
        .toLowerCase()
        .includes(criteria.filter.keyword.toLowerCase());
    });
  }

  return sortedFetchData.slice(startIndex, startIndex + resultsPerPage);
}

/**
 *
 * @param data
 * @param criteria
 */
function getPagination(data, criteria) {
  const defaultPage = 1;
  const defaultResultPerpage = 10;
  const totalPages = Math.ceil(data.length / defaultResultPerpage);
  if (Object.keys(criteria).length === 0) {
    return {
      defaultPage,
      defaultResultPerpage,
      totalPages,
      totalResults: data.length,
    };
  }

  const {
    pagination: { pageNumber, resultsPerPage },
  } = criteria;

  return {
    pageNumber,
    resultsPerPage,
    totalPages,
    totalResults: data.length,
  };
}

/**
 *
 * @param criteria
 * @param searchField
 */
function getResponse(criteria, type, searchField) {
    
  const dataSource = initDataSourceIndex();
  const fetchedData = fetchData(dataSource, type);
  const sortedData = sortData(fetchedData, criteria);
  const filteredData = filterData(sortedData, criteria, searchField);
  const pagination = getPagination(filteredData, criteria);
  const response = {
    filteredData,
    pagination,
    searchOptions: criteria.searchOptions,
    sort: criteria.sort,
  };
  return response;
}
module.exports.getResponse = getResponse;
