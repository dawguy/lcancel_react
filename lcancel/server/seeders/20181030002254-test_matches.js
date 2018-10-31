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
   var random_matches = [];
   var stage_count = 5;
   var character_count = 26;
   var seed_player_count = 100;

   for( let i = 0; i < 2000; i++ )
   {
       let stage = Math.floor( Math.random() * ( stage_count - 1 ) ) + 1;
       let character_1 = Math.floor( Math.random() * ( character_count - 1 ) ) + 1;
       let character_2 = Math.floor( Math.random() * ( character_count - 1 ) ) + 1;
       let user_1 = Math.floor( Math.random() * ( seed_player_count - 1 ) ) + 1;
       let user_2 = Math.floor( Math.random() * ( seed_player_count - 1 ) ) + 1;

       let elo = (Math.random() * - 800) + 1000;
       random_matches.push({
          winning_user : user_1,
          losing_user : user_2,
          winning_character : character_1,
          losing_character : character_2,
          stage : stage,
          createdAt : Sequelize.literal( 'NOW()' ),
          updatedAt : Sequelize.literal( 'NOW()' ),
       });
   }

   return queryInterface.bulkInsert( 'matches', random_matches, {} );

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete( 'matches', null, {} );
  }
};
