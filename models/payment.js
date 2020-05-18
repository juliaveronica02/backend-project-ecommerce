'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    posCode: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {});
  Payment.associate = function(models) {
    // associations can be defined here
  };
  return Payment;
};