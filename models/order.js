var Sequelize = require("sequelize");
const User = require("../models/user");
const Item = require("../models/item");
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      total: DataTypes.STRING,
      status: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
    },
    {}
  );
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.Item, {
      as: "item",
      foreignKey: "itemId",
    });
    Order.belongsTo(models.User, { as: "user", foreignKey: "userId" });
  };
  return Order;
};
