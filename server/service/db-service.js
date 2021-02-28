const { constantService: constantService } = require('../const');
const mysql = require('mysql');
require('dotenv').config();

let dbConfig = {
  host: process.env.MYSQL_HOST_IP
    ? process.env.MYSQL_HOST_IP
    : constantService.DEFAULT_CONFIG.host,
  user: process.env.MYSQL_USER
    ? rocess.env.MYSQL_USER
    : constantService.DEFAULT_CONFIG.user,
  password: process.env.MYSQL_PASSWORD
    ? process.env.MYSQL_PASSWORD
    : constantService.DEFAULT_CONFIG.password,
  database: process.env.MYSQL_DATABASE
    ? process.env.MYSQL_DATABASE
    : constantService.DEFAULT_CONFIG.database,
};
const pool = mysql.createPool(dbConfig);
const connection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) reject(err);
      console.log('MySQL pool connected: threadId ' + connection.threadId);
      const query = (sql, binding) => {
        return new Promise((resolve, reject) => {
          connection.query(sql, binding, (err, result) => {
            if (err) reject(err);
            resolve(result);
          });
        });
      };
      const release = () => {
        return new Promise((resolve, reject) => {
          if (err) reject(err);
          console.log('MySQL pool released: threadId ' + connection.threadId);
          resolve(connection.release());
        });
      };
      resolve({ query, release });
    });
  });
};
const query = (sql, binding) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, binding, (err, result, fields) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = { pool, connection, query };
