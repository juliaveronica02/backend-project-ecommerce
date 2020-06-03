const Models = require("../models");
const Role = Models.Role;

module.exports = {
  create: (req, res) => {
    Role.create({
      name: req.body.name,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  getAllData: (req, res) => {
    Role.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  updateDataById: (req, res) => {
    Role.update(
      {
        name: req.body.name,
      },
      { where: { id: req.params.roleId } }
    )
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
};
