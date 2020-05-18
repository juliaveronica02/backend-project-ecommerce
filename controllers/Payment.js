const Models = require("../models");
const Payment = Models.Payment;

module.exports = {
  create: (req, res) => {
    Payment.create({
      name: req.body.name,
      address: req.body.address,
      quantity: req.body.quantity,
      posCode: req.body.posCode,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getData: (req, res) => {
    Payment.findAll({})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
