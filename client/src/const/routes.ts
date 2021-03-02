
export const REST_API_VERSION = process.env.REST_API_VERSION ? process.env.REST_API_VERSION : 'v1';
export const USER_SEARCH_ROUTE = `http://localhost:${process.env.REACT_APP_SERVER_PORT}/${REST_API_VERSION}/users`;
export const ORGANIZATION_SEARCH_ROUTE = `http://localhost:${process.env.REACT_APP_SERVER_PORT}/${REST_API_VERSION}/organizations`;
export const TICKETS_SEARCH_ROUTE = `http://localhost:${process.env.REACT_APP_SERVER_PORT}/${REST_API_VERSION}/tickets`;
