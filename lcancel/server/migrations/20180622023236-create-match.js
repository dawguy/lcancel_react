'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      winning_user: {
        type: Sequelize.INTEGER,
        references : {
          model : 'users',
          key : 'id',
          as : 'winning_user',
        }
      },
      losing_user: {
        type: Sequelize.INTEGER,
        references : {
          model : 'users',
          key : 'id',
          as : 'losing_user',
        }
      },
      winning_character: {
        type: Sequelize.INTEGER,
        references : {
          model : 'characters',
          key : 'id',
          as : 'winning_character',
        }
      },
      losing_character: {
        type: Sequelize.INTEGER,
        references : {
          model : 'characters',
          key : 'id',
          as : 'losing_character',
        }
      },
      stage: {
        type: Sequelize.INTEGER,
        references : {
          model : 'stages',
          key : 'id',
          as : 'stage',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('matches');
  }
};