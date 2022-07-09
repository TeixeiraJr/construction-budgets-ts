
'use strict';

module.exports = {

  up: (queryInterface, Sequelize, migration) => {
     return queryInterface.sequelize.query(`CREATE TABLE construction.users (
      id INT auto_increment NOT NULL,
      name varchar(100) NOT NULL,
      email varchar(100) NOT NULL,
      password varchar(100) NOT NULL,
      company varchar(100) NULL,
      CONSTRAINT users_PK PRIMARY KEY (id)
  )
  ENGINE=InnoDB
  DEFAULT CHARSET=latin1
  COLLATE=latin1_swedish_ci`);
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.sequelize.query('');
  }

};