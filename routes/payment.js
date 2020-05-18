var express = require("express");
var router = express.Router();
const Payment = require("../controllers/Payment");

router.post("/create", Payment.create);
router.get("/show", Payment.getData);

module.exports = router;
