var service = require("../services/SearchListScreen_Default_ActivityService")
module.exports.create_SearchListScreen = function(req, res) {
  var SearchListScreen = req.body;
  service.create_SearchListScreen(SearchListScreen,function (searchlistscreen){
    res.status(201);
    res.json(searchlistscreen);
  });
}
module.exports.update_SearchListScreen = function(req, res) {
  var SearchListScreen = req.body;
  service.update_SearchListScreen(SearchListScreen,function (){
    res.end();
  });
}
module.exports.search_SearchListScreen_for_update = function(req, res) {
  var SearchListScreen_id = parseInt(req.params[0], 10);
  service.search_SearchListScreen_for_update(SearchListScreen_id,function (searchlistscreen){
    res.json(searchlistscreen);
  });
}
module.exports.delete_SearchListScreen = function(req, res) {
  var SearchListScreen_id = parseInt(req.params[0], 10);
  service.delete_SearchListScreen(SearchListScreen_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_SearchListScreen = function(req, res) {
  service.get_all_SearchListScreen(function (searchlistscreen){
    res.json(searchlistscreen);
  });
}
module.exports.search_SearchListScreen = function(req, res) {
  console.log('Search search_SearchListScreen');
  var username = req.query.username || "%%";
  if(username != "%%")
  	username = "%" + username + "%"
  var user_id = req.query.user_id || "%%";
  if(user_id != "%%")
  	user_id = "%" + user_id + "%"
  var created_on = req.query.created_on || "%%";
  if(created_on != "%%")
  	created_on = "%" + created_on + "%"
  var script_executed_on = req.query.script_executed_on || "%%";
  if(script_executed_on != "%%")
  	script_executed_on = "%" + script_executed_on + "%"
  var json_created_on = req.query.json_created_on || "%%";
  if(json_created_on != "%%")
  	json_created_on = "%" + json_created_on + "%"
  service.search_SearchListScreen(username,user_id,created_on,script_executed_on,json_created_on,function (searchlistscreen){
    res.json(searchlistscreen);
  });
}