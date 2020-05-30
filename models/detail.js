"use strict";
module.exports = (sequelize, DataTypes) => {
  const Detail = sequelize.define(
    "Detail",
    {
      detail: DataTypes.STRING,
      itemId: DataTypes.INTEGER,
    },
    {}
  );
  Detail.associate = function (models) {
    // associations can be defined here
    Detail.belongsTo(models.Item, {
      as: "item",
      foreignKey: "itemId",
    });
  };
  return Detail;
};
