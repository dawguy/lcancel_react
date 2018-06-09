'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function( db, callback ) {
  return db.insert( 'characters', { 'name' : 'Dr. Mario' } ).then(
    function( result ) {
      db.insert( 'characters', { name : 'Mario' });
      db.insert( 'characters', { name : 'Luigi' });
      db.insert( 'characters', { name : 'Bowser' });
      db.insert( 'characters', { name : 'Peach' });
      db.insert( 'characters', { name : 'Yoshi' });
      db.insert( 'characters', { name : 'DK' });
      db.insert( 'characters', { name : 'Captain Falcon' });
      db.insert( 'characters', { name : 'Ganondorf' });

      db.insert( 'characters', { name : 'Falco' });
      db.insert( 'characters', { name : 'Fox' });
      db.insert( 'characters', { name : 'Ness' });
      db.insert( 'characters', { name : 'Ice Climbers' });
      db.insert( 'characters', { name : 'Kirby' });
      db.insert( 'characters', { name : 'Samus' });
      db.insert( 'characters', { name : 'Zelda' });
      db.insert( 'characters', { name : 'Link' });
      db.insert( 'characters', { name : 'Young Link' });

      db.insert( 'characters', { name : 'Pichu' });
      db.insert( 'characters', { name : 'Pikachu' });
      db.insert( 'characters', { name : 'Jigglypuff' });
      db.insert( 'characters', { name : 'Mewtwo' });
      db.insert( 'characters', { name : 'Mr. Game & Watch' });
      db.insert( 'characters', { name : 'Marth' });
      db.insert( 'characters', { name : 'Roy' });
    }
  );
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
