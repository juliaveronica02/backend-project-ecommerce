"use strict";
module.exports = (sequelize, DataTypes) => {
  const Upload = sequelize.define(
    "Upload",
    {
      userId: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {}
  );
  Upload.associate = function (models) {
    // associations can be defined here
    Upload.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };
  return Upload;
};
