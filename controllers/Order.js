const Models = require("../models");
const Order = Models.Order;
const User = Models.User;
const Item = Models.Item;

module.exports = {
  create: (req, res) => {
    Order.create({
      total: req.body.total,
      status: req.body.status,
      userId: req.body.userId,
      itemId: req.body.itemId,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  showAll: (req, res) => {
    Order.findAll({
      include: [
        {
          model: Item,
          as: "item",
        },
        {
          model: User,
          as: "user",
        },
      ],
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  deleteDataById: (req, res) => {
    Order.destroy({ where: { id: req.params.orderId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
};
