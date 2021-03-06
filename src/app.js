const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const home = require("./controllers/home");
const order = require("./controllers/order");
const error = require("./controllers/error");
const orderHistory = require("./controllers/orderHistory");

const app = express();

app.set("port", process.env.PORT || 7000);
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*route handlers*/

// GET
app.get("/", home);
app.get("/orderHistory/:customerName", orderHistory);
app.get("*", error);

// POST
app.post("/order", order);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main"
  })
);

module.exports = app;
