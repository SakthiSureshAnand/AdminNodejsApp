var express = require("express");
var http = require("http");
var path = require("path");
var models = require("./models");
var router = require("./routes/routes");
var logger = require("morgan");
// CORS enable 
var cors = require('cors');
var app = express();
var clientPath = path.resolve(__dirname, "client");

app.use(cors());


app.use(logger("dev"));
app.use("/",express.static(clientPath));
app.use("/", router);


models.sequelize.sync().then(function () {
  var server = app.listen(8030, function() {
  console.log('Express server listening on port ' + server.address().port);
  });
});