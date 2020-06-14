const Models = require("../models");
const Payment2 = Models.Payment2;

module.exports = {
  create: (req, res) => {
    Payment2.create({
      name: req.body.name,
      address: req.body.address,
      quantity: req.body.quantity,
      posCode: req.body.posCode,
      phone: req.body.phone,
      image: req.file && req.file.path,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getData: (req, res) => {
    Payment2.findAll({})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
