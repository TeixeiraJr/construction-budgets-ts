
'use strict';

module.exports = {

  up: (queryInterface, Sequelize, migration) => {
     return queryInterface.sequelize.query(`CREATE TABLE construction.tasks (
      id INT auto_increment NOT NULL,
      name varchar(100) NOT NULL,
      description MEDIUMTEXT NULL,
      estimated_time INT NULL,
      remaining_time INT NULL,
      CONSTRAINT tasks_PK PRIMARY KEY (id)
    )
    ENGINE=InnoDB
    DEFAULT CHARSET=latin1
    COLLATE=latin1_swedish_ci`);
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.sequelize.query('');
  }

};