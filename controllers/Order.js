const Models = require("../models");
const Order = Models.Order;
const User = Models.User;
const Category = Models.Category;

module.exports = {
  create: (req, res) => {
    Order.create({
      total: req.body.total,
      status: req.body.status,
      // userId: req.body.userId,
      // categoryId: req.body.categoryId,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  showAll: (req, res) => {
    Order.findAll({
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  deleteDataById: (req, res) => {
    Order.destroy({ where: { id: req.params.orderId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
};
