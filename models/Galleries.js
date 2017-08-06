module.exports = function(sequelize, DataTypes) {
  var Gallery = sequelize.define("Gallery", {
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return Gallery;
};