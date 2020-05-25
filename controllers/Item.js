const Models = require("../models");
const Item = Models.Item;
const Category = Models.Category;
const User = Models.User;

module.exports = {
  create: (req, res) => {
    // console.log(req.file);
    Item.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      imageUrl: req.file && req.file.path,
      quantity: req.body.quantity,
      categoryId: req.body.categoryId,
      userId: req.body.userId || req.userId,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getAllData: (req, res) => {
    Item.findAll({
      include: [
        {
          model: Category,
          as: "category",
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
  //get user by id.
  getDataById: (req, res) => {
    Item.findOne({ where: { id: req.params.itemId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  //delete user data by id.
  deleteDataById: (req, res) => {
    Item.destroy({ where: { id: req.params.itemId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  // update Item
  updateDataById: (req, res) => {
    Item.update(
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        quantity: req.body.quantity,
        categoryId: req.body.categoryId,
        userId: req.body.userId,
      },
      { where: { id: req.params.itemId } }
    )
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getByUserId: (req, res) => {
    Item.findAll({
      where: { userId: req.params.userId },
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getByName: (req, res) => {
    Item.findAll({
      where: { name: req.params.name },
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
};
