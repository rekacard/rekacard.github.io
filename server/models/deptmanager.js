// TODO: 6.2 Define dept_manager model
// Creates a model for dept_manager table
// References:
// http://docs.sequelizejs.com/manual/installation/getting-started.html#your-first-model
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('manager', {
    emp_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employees',
        key: 'emp_no'
      },
    },
    dept_no: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'departments',
        key: 'dept_no'
      },
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    }
  },
  {
    // don't add timestamps attributes updatedAt and createdAt
    timestamps: false,
    tableName: "dept_manager",
  });
};
