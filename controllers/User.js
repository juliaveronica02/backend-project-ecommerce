const Models = require("../models");
const User = Models.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = "null";
const saltRounds = 10;

module.exports = {
  // user register.
  create: (req, res) => {
    const newUser = new User({
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });
    //hash password.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(newUser.password, salt, function (err, hash) {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((result) => res.json(result))
          .catch((err) => {
            throw err;
          });
      });
    });
  },
  // get all user data.
  getData: (req, res) => {
    User.findAll({})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  //get user by id.
  getDataById: (req, res) => {
    User.findOne({ where: { id: req.params.userId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  //delete user data by id.
  deleteDataById: (req, res) => {
    User.destroy({ where: { id: req.params.userId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  updateDataById: (req, res) => {
    User.update(
      {
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
      },
      { where: { id: req.params.userId } }
    )
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  authenticated: function (req, res, next) {
    User.findOne({
      email: req.body.email,
    })
      .then((response, err) => {
        console.log(response);

        if (err) next(err);
        else {
          if (
            response != null &&
            bcrypt.compareSync(req.body.password, response.password)
          ) {
            jwt.sign(
              {
                id: response.id,
              },
              privateKey,
              { expiresIn: "365d" },
              function (err, token) {
                res.json(token);
              }
            );
          } else {
            res.json({ status: err });
          }
        }
      })
      .catch((err) => {
        throw err;
      });
  },
};
