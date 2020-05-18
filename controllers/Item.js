const Models = require("../models");
const Item = Models.Item;

module.exports = {
  create: (req, res) => {
    Item.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      imageUrl: req.file && req.file.path,
      quantity: req.body.quantity,
      categoryId: req.body.categoryId,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getAllData: (req, res) => {
    Item.findAll({ include: "category" })
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
      },
      { where: { id: req.params.itemId } }
    )
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  searchName: (req, res) => {
    const name = newRegExp(req.quary["name"], "i");
    name
      .find({ name })
      .select("-password")
      .select("- username")
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
