"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {}
  );
  Item.associate = function (models) {
    // associations can be defined here
    Item.belongsTo(models.Category, {
      foreignKey: "categoryId",
      as: "category",
    });
  };
  return Item;
};
