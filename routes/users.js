var express = require("express");
var router = express.Router();
const User = require("../controllers/User");
/* GET users listing. */
router.post("/register", User.create);
router.post("/login", User.authenticated);
router.get("/show", User.getData);
router.get("/show/:id", User.getDataById);
module.exports = router;
