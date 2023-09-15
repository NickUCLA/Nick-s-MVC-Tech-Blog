const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user", // Assuming you have a 'user' table
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true, // You can set this to true if you want to track timestamps like createdAt and updatedAt
    modelName: "post",
  }
);

module.exports = Post;
