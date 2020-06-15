var express = require("express");
var router = express.Router();
const Payment2 = require("../controllers/Payment2");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});
/* GET users listing. */

router.post("/create", upload.single("image"), Payment2.create);
router.get("/show", Payment2.getData);
module.exports = router;
