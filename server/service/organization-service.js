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
  const fetchOrgQuery = `SELECT * from organization`;
  const organizations = await connection.query(fetchOrgQuery);

  //@TODO: add more query conditions if we want to filter tickets
  const fetchTicketsQuery = `SELECT * FROM ticket`;
  const tickets = await connection.query(fetchTicketsQuery);

  return transformer.transformTicketsForOrganizations(organizations, tickets);
}

/**
 *
 * @param {*} criteria
 * @param {*} filter
 */
function fetchMockData(criteria, filter) {}

module.exports.organizationService = fetchOrganizations;
