const cors = require('cors');
const express = require('express');
const { constantService: constantService } = require('./const');
const { userService: fetchUsers } = require('./service/user-service');
const { ticketService: fetchTickets } = require('./service/ticket-service');
const {
  organizationService: fetchOrganizations,
} = require('./service/organization-service');

const app = express();
app.use(cors());

app.listen(
  process.env.REACT_APP_SERVER_PORT
    ? process.env.REACT_APP_SERVER_PORT
    : constantService.DEFAULT_CONFIG.port,
  () => {
    console.log(
      `App server now listening on port ${
        process.env.REACT_APP_SERVER_PORT
          ? process.env.REACT_APP_SERVER_PORT
          : constantService.DEFAULT_CONFIG.port
      }`
    );
  }
);

app.get(`${constantService.API_VERSION.V1}/users`, async (req, res) => {
  const { filter } = req.query;
  const parsedFilter = JSON.parse(filter);
  const result = await fetchUsers('', parsedFilter);
  return res.send(result);
  // return res.send(fetchUsers('', ''));
});

app.get(`${constantService.API_VERSION.V1}/organizations`, async (req, res) => {
  // const { table } = req.query;  
  const result = await fetchOrganizations('', '');
  return res.send(result);
});

app.get(`${constantService.API_VERSION.V1}/tickets`, async (req, res) => {
  // const { table } = req.query;  
  const result = await fetchTickets('', '');
  return res.send(result);
});
