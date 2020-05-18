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

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// app.use("/item", validateUser, itemRouter);
app.use("/item", itemRouter);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);
app.use("/payment", paymentRouter);
app.use("/upload", uploadRouter);

// function validateUser(req, res, next) {
//   jwt.verify(req.headers["x-access-token"], privateKey, (err, decoded) => {
//     if (err) {
//       res.json(err);
//     } else {
//       req.body.userId = decoded.id;
//       next();
//     }
//   });
// }
module.exports = app;
