'use strict';

module.exports = function(sequelize, DataTypes) {
  var SearchListScreen = sequelize.define("SearchListScreen", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    username: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    created_on: DataTypes.DATE,
    script_executed_on: DataTypes.DATE,
    json_created_on: DataTypes.DATE
  });
  return SearchListScreen;
};