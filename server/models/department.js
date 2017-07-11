// TODO: 3.1 Define departments table model
// Model for departments table
// References:
// http://docs.sequelizejs.com/manual/installation/getting-started.html#your-first-model
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("department", {
    dept_no: {
      type: DataTypes.CHAR(4),
      primaryKey: true,
      allowNull: false
    },
    dept_name: {
      type: DataTypes.STRING(40),
      unique: true,
      allowNull: false
    },
  }, {
    // don't add timestamps attributes updatedAt and createdAt
    timestamps: false,
  });
};
