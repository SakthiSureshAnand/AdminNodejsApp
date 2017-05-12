var dao = require("../daos/SearchListScreen_Default_ActivityDao")
module.exports.create_SearchListScreen = function(SearchListScreen,callback) {
  dao.create_SearchListScreen(SearchListScreen,function (searchlistscreen){
    callback(searchlistscreen);
  });
}
module.exports.update_SearchListScreen = function(SearchListScreen,callback) {
  dao.update_SearchListScreen(SearchListScreen,function (){
    callback();
  });
}
module.exports.search_SearchListScreen_for_update = function(SearchListScreen_id,callback) {
  dao.search_SearchListScreen_for_update(SearchListScreen_id,function (searchlistscreen){
    callback(searchlistscreen);
  });
}
module.exports.delete_SearchListScreen = function(SearchListScreen_id,callback) {
  dao.delete_SearchListScreen(SearchListScreen_id,function (){
    callback();
  });
}
module.exports.get_all_SearchListScreen = function(callback) {
  dao.get_all_SearchListScreen(function (searchlistscreen){
    callback(searchlistscreen);
  });
}
module.exports.search_SearchListScreen = function(username,user_id,created_on,script_executed_on,json_created_on,callback) {
  dao.search_SearchListScreen(username,user_id,created_on,script_executed_on,json_created_on,function (searchlistscreen){
    callback(searchlistscreen);
  });
}