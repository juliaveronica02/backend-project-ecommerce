'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment2 = sequelize.define('Payment2', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    posCode: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  Payment2.associate = function(models) {
    // associations can be defined here
  };
  return Payment2;
};