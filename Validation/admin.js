const jwt = require('jsonwebtoken')
const privateKey = "null";

module.exports.validateAdmin = (req, res, next) => {
    jwt.verify(req.headers["access-token"], privateKey, (err, decoded) => {
      if (decoded.email == "trishop_admin@gmail.com" && !err) {
        req.userId = decoded.id;
        next();
      } else {
        res.status(401).json({
          ...err,
          message: "Sorry, you are not admin"
        });
      }
    });
  }