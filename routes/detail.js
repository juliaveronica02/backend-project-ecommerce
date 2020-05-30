var express = require("express");
var router = express.Router();
const Detail = require("../controllers/Detail");

/* GET users listing. */

router.post("/create", Detail.create);
router.get("/show", Detail.getAllData);
module.exports = router;
