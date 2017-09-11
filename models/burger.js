var orm = require("../config/orm.js");


var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
   insert: function(name,cb) {
    orm.insertOne([
      "burger_name"
    ], [
      name
    ], function(res){
    	cb(res);
    });
  },
  update: function(id, cb) {
    orm.updateOne(id, function(res){
    	cb(res);
    });
  }
};

module.exports = burger;

