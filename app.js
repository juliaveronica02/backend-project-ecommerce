var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const jwt = require("jsonwebtoken");
const privateKey = "null";

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var itemRouter = require("./routes/item");
var categoryRouter = require("./routes/category");
var orderRouter = require("./routes/order");
var paymentRouter = require("./routes/payment");
var uploadRouter = require("./routes/upload");
var detailRouter = require("./routes/detail");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/images")));
app.use("/public/images", express.static("public/images"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/item", itemRouter);
app.use("/detail", validateUser, detailRouter);
// app.use("/item", itemRouter);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);
app.use("/payment", paymentRouter);
app.use("/upload", uploadRouter);

function validateUser(req, res, next) {
  jwt.verify(req.headers["x-access-token"], privateKey, function (
    err,
    decoded
  ) {
    if (err) {
      res.status(401).json(err);
    } else {
      req.body.userId = decoded.id;
      next();
    }
  });
}
module.exports = app;
