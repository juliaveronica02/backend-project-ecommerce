var express = require("express");
var router = express.Router();
const Category = require("../controllers/Category");

router.post("/create", Category.create);
router.get("/show", Category.getAllData);

module.exports = router;
