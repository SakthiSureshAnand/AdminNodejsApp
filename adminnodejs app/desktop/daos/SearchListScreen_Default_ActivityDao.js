var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/SearchListScreen_Default_Activity_SQL.properties');
module.exports.create_SearchListScreen = function(SearchListScreen,callback) {
  var create_query = sqlQuery._properties.create_SearchListScreen;
  sequelize.query(create_query, {
    replacements: {
    	username : SearchListScreen.username,
    	user_id : SearchListScreen.user_id,
    	created_on : SearchListScreen.created_on,
    	script_executed_on : SearchListScreen.script_executed_on,
    	json_created_on : SearchListScreen.json_created_on,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.SearchListScreen
  }).then(function(searchlistscreen) {
		callback(searchlistscreen);
	});
}
module.exports.update_SearchListScreen = function(SearchListScreen,callback) {
  var update_query = sqlQuery._properties.update_SearchListScreen;
  sequelize.query(update_query, {
    replacements: {
    	id : SearchListScreen.id,
    	username : SearchListScreen.username,
    	user_id : SearchListScreen.user_id,
    	created_on : SearchListScreen.created_on,
    	script_executed_on : SearchListScreen.script_executed_on,
    	json_created_on : SearchListScreen.json_created_on,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.UPDATE,
    model: models.SearchListScreen
  }).then(function() {
		callback();
	});
}
module.exports.search_SearchListScreen_for_update = function(SearchListScreen_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_SearchListScreen;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: SearchListScreen_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.SearchListScreen
  }).then(function(searchlistscreen) {
		callback(searchlistscreen[0]);
	});
}
module.exports.delete_SearchListScreen = function(SearchListScreen_id,callback) {
  var delete_query = sqlQuery._properties.delete_SearchListScreen;
  sequelize.query(delete_query, {
    replacements: {
    	id: SearchListScreen_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.SearchListScreen
  }).then(function() {
		callback();
	});
}
module.exports.get_all_SearchListScreen = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_SearchListScreen;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.SearchListScreen
  }).then(function(searchlistscreen) {
		callback(searchlistscreen);
	});
}
module.exports.search_SearchListScreen = function(username,user_id,created_on,script_executed_on,json_created_on,callback) {
  var search_query = sqlQuery._properties.search_SearchListScreen;
  sequelize.query(search_query, {
    replacements: {
    	username: username,
    	user_id: user_id,
    	created_on: created_on,
    	script_executed_on: script_executed_on,
    	json_created_on: json_created_on
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.SearchListScreen
  }).then(function(searchlistscreen) {
    console.log('************************************************************************************************************',searchlistscreen);
		callback(searchlistscreen);
	});
}