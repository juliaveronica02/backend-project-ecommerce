var express = require("express");
var router = express.Router();
const Item = require("../controllers/Item");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});
/* GET users listing. */

router.post("/create", upload.single("imageUrl"), Item.create);
router.get("/show", Item.getAllData);
router.get("/show/:itemId", Item.getDataById);
router.get("/search", Item.searchName);
router.delete("/delete/:itemId", Item.deleteDataById);
router.put("/edit/:itemId", Item.updateDataById);
module.exports = router;
