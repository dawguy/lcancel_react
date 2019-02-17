'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var stages = [
      { name : 'Battlefield' },
      { name : 'Dreamland' },
      { name : "Yoshi's Island" },
      { name : 'Fountain Of Dreams' },
      { name : 'Final Destination' },
    ];

    return queryInterface.bulkInsert( 'stages', stages, {} );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.bulkDelete( 'stages', null, {} );
  }
};
