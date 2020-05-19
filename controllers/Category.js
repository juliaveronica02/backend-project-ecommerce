const Models = require("../models");
const Category = Models.Category;

module.exports = {
  create: (req, res) => {
    Category.create({
      name: req.body.name,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  getAllData: (req, res) => {
    Category.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  updateDataById: (req, res) => {
    Category.update(
      {
        name: req.body.name,
      },
      { where: { id: req.params.categoryId } }
    )
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
};
