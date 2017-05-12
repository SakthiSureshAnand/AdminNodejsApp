var express = require("express");
var router = express.Router();
var controller = require("../../controllers/SearchListScreen_Default_ActivityController")
router.post("/SearchListScreen", controller.create_SearchListScreen);
router.get(/^\/SearchListScreen\/(\d+)$/, controller.search_SearchListScreen_for_update);
router.put("/SearchListScreen", controller.update_SearchListScreen);
router.delete(/^\/SearchListScreen\/(\d+)$/, controller.delete_SearchListScreen);
router.get("/SearchListScreen", controller.get_all_SearchListScreen);
router.get("/SearchListScreen/search", controller.search_SearchListScreen);

module.exports = router;