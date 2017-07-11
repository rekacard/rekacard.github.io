// Read configurations
var config = require('./config');

// Load Sequelize package
var Sequelize = require("sequelize");

// Create Sequelize DB connection
var sequelize = new Sequelize(
	'employees',
	config.MYSQL_USERNAME,
	config.MYSQL_PASSWORD,
	{
		host: config.MYSQL_HOSTNAME,
		port: config.MYSQL_PORT,
		logging: config.MYSQL_LOGGING,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			idle: 10000,
		},
	}
);

// Import DB Models
const Department = sequelize.import('./models/department');
const Employee = sequelize.import('./models/employee');
const DeptManager = sequelize.import('./models/deptmanager');

// Define Model Associations
Department.hasMany(DeptManager, { foreignKey: 'dept_no' });
DeptManager.belongsTo(Employee, { foreignKey: 'emp_no' });

// Exports Models
module.exports = {
  // Loads model for departments table
  Department: Department,

  // Loads model for employees table
  Employee: Employee,

  // Loads model for dept_manager table
  DeptManager: DeptManager,
};
