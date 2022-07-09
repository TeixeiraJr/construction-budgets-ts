
'use strict';

module.exports = {

  up: (queryInterface, Sequelize, migration) => {
     return queryInterface.sequelize.query(`
     ALTER TABLE construction.users ADD CONSTRAINT users_FK FOREIGN KEY (profile_level) REFERENCES construction.profiles(id)
     `);
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.sequelize.query('');
  }

};