const { constantService: constantService } = require('../const');
const dbConnection = require('./db-service');
const transformer = require('../common/transformer');

/**
 *
 * @param {*} criteria
 * @param {*} filter
 * @param {*} apiVersion
 */
async function fetchUsers(
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
  const fetchUsersQuery = generateFetchUsersQuery(filter);
  let users = null;
  try {
    users = await connection.query(fetchUsersQuery);

    if (!users) {
        return [];
    }
  } catch (error) {
    return false;
  }
  
  //@TODO: add more query conditions if we want to filter tickets
  const fetchTicketsQuery = `SELECT * FROM ticket`;
  let tickets = null;

  try {
    tickets = await connection.query(fetchTicketsQuery);
    if (!tickets) {
        return users;
    }
  } catch (error) {
      return false;
  }
  
  return transformer.transformTicketsForUser(users, tickets);
}

function generateFetchUsersQuery(filter) {    
    const userQueryAlias = 'u';
    let filterCondition = '';

    //generate multiple filter conditions for query
    if(Object.keys(filter).length) {
        Object.keys(filter).forEach(column => {
            //add join query keyword for the next condition
            if (filterCondition !== '') {
                filterCondition += ' AND ';
            }

            if (filter[column]) {
                filterCondition += `UPPER(${userQueryAlias}.${column}) like '%${(filter[column]).toUpperCase()}%'`;
            }                                 
        });
    }

    if (filterCondition) {
        filterCondition = `WHERE ${filterCondition}`;
    }
    return `SELECT u.*, o.name as organization_name from user ${userQueryAlias}
    INNER JOIN organization o on ${userQueryAlias}.organization_id = o._id
    ${filterCondition}`;
}

/**
 *
 * @param {*} criteria
 * @param {*} filter
 */
function fetchMockData(criteria, filter) {}

module.exports.userService = fetchUsers;
