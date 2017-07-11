// TODO: 6.1 Define employees table model
// Model for employees table
// References:
// http://docs.sequelizejs.com/manual/installation/getting-started.html#your-first-model
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    emp_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },  
    last_name: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('M', 'F'),
      allowNull: false,
    },
    hire_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    }
  }, {
    // don't add timestamps attributes updatedAt and createdAt
    timestamps: false,
  });
};
