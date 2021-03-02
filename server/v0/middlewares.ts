const fs = require('fs');
const https = require('https');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('users.json');
const middlewares = jsonServer.defaults();

const { getResponse: getResponseData } = require('./utils.ts');
const { CONSTANT: CONSTANT } = require('./const.ts');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/api/v0/users', (req, res) => {
  const response = getResponseData(req.body, CONSTANT.SEARCH_TYPE.user, 'title');
  res.status(200).jsonp(response);
});

server.get('/api/v0/organizations', (req, res) => {
  const response = getResponseData(req.body, CONSTANT.SEARCH_TYPE.organization, 'title');
  res.status(200).jsonp(response);
});

server.get('/api/v0/tickets', (req, res) => {
  const response = getResponseData(req.body, CONSTANT.SEARCH_TYPE.ticket, 'title');
  res.status(200).jsonp(response);
});

server.use(router);

if (false) {
  https
    .createServer(
      {
        key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key')),
        cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.cert')),
      },
      server
    )
    .listen(3001, () => {
      console.log('JSON Server (https) is running');
    });
} else {
  server.listen(3001, () => {
    console.log('JSON Server (http) is running');
  });
}
