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

exports.up = function(db) {
  return db.createTable( 'matches', {
    id : { type: 'int', primaryKey: true, autoIncrement: true },
    winning_user : {
      type : 'int',
      notNull : true,
      foreignKey : {
        name : 'winning_user_id_fk',
        table : 'users',
        mapping : 'id'
      }
    },
    losing_user : {
      type : 'int',
      notNull : true,
      foreignKey : {
        name : 'losing_user_id_fk',
        table : 'users',
        mapping : 'id'
      }
    },
    winning_character : {
      type : 'int',
      notNull : true,
      foreignKey : {
        name : 'winning_character_id_fk',
        table : 'characters',
        mapping : 'id'
      }
    },
    losing_character : {
      type : 'int',
      notNull : true,
      foreignKey : {
        name : 'losing_character_id_fk',
        table : 'characters',
        mapping : 'id'
      }
    },
    stage : {
      type : 'int',
      notNull : true,
      foreignKey : {
        name : 'stage_id_fk',
        table : 'stages',
        mapping : 'id'
      }
    },
    winning_user_stocks : { type : 'int', notNull : true },
    losing_user_stocks : { type : 'int', notNull : true },
  });
};

exports.down = function(db) {
  return db.dropTable( 'matches', {
    ifExists : true
  });
};

exports._meta = {
  "version": 1
};
