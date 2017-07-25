'use strict';

module.exports = {
  domain_name: "http://localhost:3000",
  PORT: 3000,

  // Defines MySQL configuration
  MYSQL_USERNAME: 'root',
  MYSQL_PASSWORD: 'asdf',
  MYSQL_HOSTNAME: 'localhost',
  MYSQL_DATABASE: 'shop',
  mysql: "mysql://root:asdf@localhost/connectpro",
  MYSQL_PORT: 3306,
  MYSQL_LOGGING: console.log,
  MYSQL_DIALECT: 'mysql',
  MYSQL_MAXCONNECT: 5,
  MYSQL_MINCONNECT: 0,
  MYSQL_IDLE: 10000,
  // seed: true,
  seed: false,
  

  version: '1.0.0'
};