const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const static = express.static(__dirname + "/public");
const configRoutes = require("./routes"); // get routes into the app
const exphbs = require("express-handlebars");
const myLogger = require("./middlewares/middlewares");
const hbs_helpers = require("./middlewares/hbs_helpers");

app.use(myLogger); // for debugging

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create a Handlebars instance
const hbs = exphbs.create({
  defaultLayout: "main",
  helpers: hbs_helpers
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

configRoutes(app);

app.listen(8080, () => {
  console.log("Zoobenthos Website");
});
