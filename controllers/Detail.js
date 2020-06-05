const Models = require("../models");
const Detail = Models.Detail;
const Item = Models.Item;
const validateCreateDetail = require("../Validation/detail");

module.exports = {
  create: (req, res, next) => {
    const { errors, isValid } = validateCreateDetail(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Detail.create({
      detail: req.body.detail,
      itemId: req.body.itemId,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  getAllData: (req, res) => {
    Detail.findAll({
      include: [
        {
          model: Item,
          as: "item",
        },
      ],
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  // get detail by id.
  getDataById: (req, res) => {
    Detail.findOne({ where: { id: req.params.detailId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
};
