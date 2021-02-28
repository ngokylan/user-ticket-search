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
  const fetchTicketsQuery = `SELECT t.*, o.name as organization_name 
              from ticket t
              INNER JOIN organization o on t.organization_id = o._id
              LEFT JOIN user u1 on t.assignee_id = u1._id
              LEFT JOIN user u2 on t.submitter_id = u1._id`;
  const tickets = await connection.query(fetchTicketsQuery);

  //@TODO: add more query conditions if we want to filter tickets
  const fetchUsersQuery = `SELECT * FROM user`;
  const users = await connection.query(fetchUsersQuery);

  return transformer.transformUserForTicket(tickets, users);
}

/**
 *
 * @param {*} criteria
 * @param {*} filter
 */
function fetchMockData(criteria, filter) {}

module.exports.ticketService = fetchTickets;
