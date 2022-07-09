
'use strict';

module.exports = {

  up: (queryInterface, Sequelize, migration) => {
     return queryInterface.sequelize.query(`
     CREATE TABLE construction.tasks_user_relation (
      id INT auto_increment NOT NULL,
      user_fk_id INT NOT NULL,
      task_fk_id INT NOT NULL,
      CONSTRAINT tasks_user_relation_PK PRIMARY KEY (id),
      CONSTRAINT tasks_user_relation_FK FOREIGN KEY (task_fk_id) REFERENCES construction.tasks(id),
      CONSTRAINT tasks_user_relation_FK_1 FOREIGN KEY (user_fk_id) REFERENCES construction.users(id)
    )
    ENGINE=InnoDB
    DEFAULT CHARSET=latin1
    COLLATE=latin1_swedish_ci;
     `);
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.sequelize.query('');
  }

};