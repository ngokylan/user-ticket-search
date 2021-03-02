const { constantService: constantService } = require('../const');
const dbConnection = require('./db-service');
const transformer = require('../common/transformer');

/**
 *
 * @param {*} criteria
 * @param {*} filter
 * @param {*} apiVersion
 */
function fetchTickets(
  criteria,
  filter,
  apiVersion = constantService.API_VERSION.v1
) {
  if (apiVersion === constantService.API_VERSION.v1) {
    return fetchV1Data(criteria, filter);
  }

  return fetchMockData(criteria, filter);
}

/**
 *
 * @param {*} criteria
 * @param {*} filter
 */
async function fetchV1Data(criteria, filter) {
  const connection = await dbConnection.connection();
  const query = generateQuery(filter)
  console.log(query);
  const tickets = await connection.query(query);

  //@TODO: add more query conditions if we want to filter tickets
  const fetchUsersQuery = `SELECT * FROM user`;
  const users = await connection.query(fetchUsersQuery);

  return transformer.transformUserForTicket(tickets, users);
}

function generateQuery(filter) {      
  const queryAlias = 't';
  let filterCondition = '';

  let filterParam = null;
  try {
    filterParam = JSON.parse(filter);
  } catch (exception) {
    //@TODO:
    /**
     * - log info message
     * - always pass filter data to request
     */
  }

  //generate multiple filter conditions for query
  if(filterParam && Object.keys(filterParam).length) {
      Object.keys(filterParam).forEach(column => {
          //add join query keyword for the next condition
          if (filterCondition !== '') {
              filterCondition += ' AND ';
          }

          if (filterParam[column]) {
              filterCondition += `UPPER(${queryAlias}.${column}) like '%${(filterParam[column]).toUpperCase()}%'`;
          }                                 
      });
  }

  if (filterCondition) {
      filterCondition = `WHERE ${filterCondition}`;
  }

  return `SELECT ${queryAlias}.*, o.name as organization_name 
  from ticket ${queryAlias}
  INNER JOIN organization o on ${queryAlias}.organization_id = o._id
  LEFT JOIN user u1 on ${queryAlias}.assignee_id = u1._id
  LEFT JOIN user u2 on ${queryAlias}.submitter_id = u1._id
  ${filterCondition}`;  
}

module.exports.ticketService = fetchTickets;
