const Models = require("../models");
const User = Models.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = "null";
const saltRounds = 10;

module.exports = {
  // user register.
  create: (req, res) => {
    User.findOne({ where: { email: req.body.email } }).then((user) => {
      if (user) {
        console.log(user);

        return res.status(400).json({ email: "already exists" });
      } else {
        const newUser = new User({
          email: req.body.email,
          phone: req.body.phone,
          password: req.body.password,
          passwordConfirm: req.body.passwordConfirm,
        });
        //hash password.
        bcrypt.genSalt(saltRounds, function (err, salt) {
          bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((result) => {
                if (req.body.password !== req.body.passwordConfirm) {
                  res.json("Password undefined");
                } else {
                  req.body.password == req.body.passwordConfirm;
                  res.json(result);
                }
              })
              .catch((err) => {
                throw err;
              });
          });
        });
      }
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
  login: ((req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User
        .findOne({ where: { email: req.body.email } })
        .then(user => {
            // Check if user exists
            if (!user) {
                return res
                    .status(404)
                    .json({emailnotfound: "Email not found"});
            }
            // Check password
            bcrypt
                .compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // User matched Create JWT Payload
                        const payload = {
                            id: user.id,
                            name: user.name
                        };
                        // Sign token
                        jwt.sign(payload, privateKey, {
                            expiresIn: 31556926 // 1 year in seconds
                        }, (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token,
                                id: user.id
                            });
                        });
                    } else {
                        return res
                            .status(400)
                            .json({passwordincorrect: "Password incorrect"})
                    }
                })
        })
})
};
