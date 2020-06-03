var express = require("express");
var router = express.Router();
const Role = require("../controllers/Role");

router.post("/create", Role.create);
router.get("/show", Role.getAllData);
router.put("/edit/:id", Role.updateDataById);
module.exports = router;
