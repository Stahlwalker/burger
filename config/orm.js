var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
     
      return key + "=" + ob[ke];
    }
  }

}



var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  create: function(table, col, val, cb) {
    var queryString = "INSERT INTO " + table;
   
    queryString += " (";
    queryString += col;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += '?';
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, val, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

// An example of objColVals would be {name: panther, sleepy: true}
update: function(table, objColVal, condition, cb) {
  var queryString = "UPDATE " + table;

  queryString += " SET ";
  queryString += objToSql(objColVal);
  queryString += " WHERE ";
  queryString += condition;

  console.log(queryString);
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
}

};

module.exports = orm;
