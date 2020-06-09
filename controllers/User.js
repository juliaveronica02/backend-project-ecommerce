const Models = require("../models");
const User = Models.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = "null";
const saltRounds = 12;
const validateRegister = require("../Validation/Register");
const validateLogin = require("../Validation/Login");

module.exports = {
  // user register.
  register: (req, res, next) => {
    //  check validation Register.
    const { errors, isValid } = validateRegister(req.body);
    // if not valid return status 400 (errors).
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ where: { email: req.body.email } }).then((user) => {
      if (user) {
        return res.status(400).json({ email: "Email already exists!" });
      } else {
        User.findOne({ where: { phone: req.body.phone } }).then((user) => {
          if (user) {
            return res.status(400).json({ phone: "Phone already exists!" });
          } else {
            //  create newUser.
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
                    //  password confirm.
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
      }
    });
  },
  // get all user data.
  getData: (req, res) => {
    User.findAll({})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  // get user by id.
  getDataById: (req, res) => {
    User.findOne({ where: { id: req.params.userId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  // delete user data by id.
  deleteDataById: (req, res) => {
    User.destroy({ where: { id: req.params.userId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  // update user by id.
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
  // user login.
  login: (req, res, next) => {
    const { errors, isValid } = validateLogin(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ email }).then((user) => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
      // Check password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // User matched Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name,
          };
          // Sign token
          jwt.sign(
            payload,
            privateKey,
            {
              // expiresIn: 31556926, // 1 year in seconds
              expiresIn: 60 * 60,
            },
            (err, token) => {
              res.json({
                success: true,
                token: token,
                id: user.id,
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  },
};
