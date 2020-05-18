"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      total: DataTypes.STRING,
      status: DataTypes.STRING,
      // userId: DataTypes.INTEGER,
      // categoryId: DataTypes.INTEGER,
    },
    {}
  );
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};

