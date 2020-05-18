const Models = require("../models");
const Upload = Models.Upload;

module.exports = {
  create: (req, res) => {
    Upload.create({
      userId: req.body.userId,
      image: req.file && req.file.path,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getAllData: (req, res) => {
    Upload.findAll({ include: "user" })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
};
