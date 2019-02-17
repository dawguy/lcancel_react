'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    var characters = [
      { name : 'Dr. Mario' },
      { name : 'Mario' },
      { name : 'Luigi' },
      { name : 'Bowser' },
      { name : 'Peach' },
      { name : 'Yoshi' },
      { name : 'DK' },
      { name : 'Captain Falcon' },
      { name : 'Ganondorf' },
      { name : 'Falco' },
      { name : 'Fox' },
      { name : 'Ness' },
      { name : 'Ice Climbers' },
      { name : 'Kirby' },
      { name : 'Samus' },
      { name : 'Zelda' },
      { name : 'Link' },
      { name : 'Young Link' },
      { name : 'Pichu' },
      { name : 'Pikachu' },
      { name : 'Jigglypuff' },
      { name : 'Mewtwo' },
      { name : 'Mr. Game & Watch' },
      { name : 'Marth' },
      { name : 'Roy' },
    ];

    return queryInterface.bulkInsert( 'characters', characters, {} );
  },

  down: (queryInterface, Sequelize) => {
    /*
      None: These characters will need to always have the same PKs
    */
   return queryInterface.bulkDelete( 'characters', null, {} );
  }
};
