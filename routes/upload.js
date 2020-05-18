var express = require("express");
var router = express.Router();
const Upload = require("../controllers/Upload");
const multer = require("multer");

const storage = multer.diskStorage({
  destinaton: (req, res, cb) => {
    cb(null, "/public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});
/* GET users listing. */

router.post("/create", upload.single("image"), Upload.create);
router.get("/show", Upload.getAllData);
module.exports = router;
