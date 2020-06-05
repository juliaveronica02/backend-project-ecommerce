var express = require("express");
var router = express.Router();
const User = require("../controllers/User");
/* GET users listing. */
router.post("/register", User.create);
router.post("/login", User.login);
router.get("/show", User.getData);
router.get("/show/:userId", User.getDataById);
module.exports = router;
