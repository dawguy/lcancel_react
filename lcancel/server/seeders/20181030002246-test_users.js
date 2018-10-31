'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    var random_users = [];

    for( let i = 0; i < 100; i++ )
    {
        let name = Math.random().toString( 36 ).substring( 7 );
        let elo = (Math.random() * - 800) + 1000;
        random_users.push({
          name : name,
          elo : elo,
          createdAt : Sequelize.literal( 'NOW()' ),
          updatedAt : Sequelize.literal( 'NOW()' ),
        });
    }

    return queryInterface.bulkInsert( 'users', random_users, {} );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete( 'users', null, {} );
  }
};
