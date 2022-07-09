
'use strict';

module.exports = {

  up: (queryInterface, Sequelize, migration) => {
     return queryInterface.sequelize.query(`ALTER TABLE construction.users ADD profile_level INT NOT NULL 
     `);
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.sequelize.query('');
  }

};