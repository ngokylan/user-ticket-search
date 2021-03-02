const { constantService: constantService } = require('../const');
const dbConnection = require('./db-service');
const transformer = require('../common/transformer');

/**
 *
 * @param {*} criteria
 * @param {*} filter
 * @param {*} apiVersion
 */
async function fetchOrganizations(
  criteria,
  filter,
  apiVersion = constantService.API_VERSION.v1
) {
  if (apiVersion === constantService.API_VERSION.v1) {
    return await fetchV1Data(criteria, filter);
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
  const organizations = await connection.query(query);

  //@TODO: add more query conditions if we want to filter tickets
  const fetchTicketsQuery = `SELECT * FROM ticket`;
  const tickets = await connection.query(fetchTicketsQuery);

  return transformer.transformTicketsForOrganizations(organizations, tickets);
}

function generateQuery(filter) {      
  const queryAlias = '';
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

  return `SELECT * FROM organization 
  ${filterCondition}`;  
}

module.exports.organizationService = fetchOrganizations;
