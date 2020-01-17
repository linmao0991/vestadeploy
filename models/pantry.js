module.exports = function(sequelize, DataTypes) {
  var Pantry = sequelize.define("Pantry", {
    home_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    upc: {
      type: DataTypes.STRING,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    best_by: {
      type: DataTypes.STRING
    },
    date_in: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_out: {
      type: DataTypes.STRING
    }
  });

  return Pantry;
};