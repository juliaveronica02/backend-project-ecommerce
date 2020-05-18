var express = require("express");
var router = express.Router();
const Order = require("../controllers/Order");

/* GET users listing. */

router.post("/create", Order.create);
router.get("/show", Order.showAll);
router.delete("/delete/:orderId", Order.deleteDataById);
module.exports = router;
