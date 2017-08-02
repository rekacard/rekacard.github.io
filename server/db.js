// Read configurations
var config = require('./config');

// Load Sequelize package
var Sequelize = require("sequelize");

// DBs, MODELS, and ASSOCIATIONS ---------------------------------------------------------------------------------------
// Create Sequelize DB connection
var sequelize = new Sequelize(config.mysql,
    {
        host: config.MYSQL_HOSTNAME,         // default port    : 3306
		    port: config.MYSQL_PORT,
        logging: config.MYSQL_LOGGING,
        dialect: config.MYSQL_DIALECT,
        pool: {
            max: config.MYSQL_MAXCONNECT,
            min: config.MYSQL_MINCONNECT,
            idle: config.MYSQL_IDLE
        }
    }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Import DB Models
// const Grocery = sequelize.import('./models/grocery');
const Role = sequelize.import('./models/roles');
const Email = sequelize.import('./models/emails');
const User = sequelize.import('./models/users');
const Events = sequelize.import('./models/events');
const Event_User = sequelize.import('./models/event_users');
const Organisation = sequelize.import('./models/organisations');

// Define Model Associations
// Department.hasMany(DeptManager, { foreignKey: 'dept_no' });
// DeptManager.belongsTo(Employee, { foreignKey: 'emp_no' });
// User.hasMany(Post);
// Post.belongsTo(User);
// Post.hasMany(Comment);
// Comment.belongsTo(Post);
// Comment.belongsTo(User);
// User.hasMany(AuthProvider, { foreignKey: 'userId' });

// sequelize
//     .sync({force: config.seed})
//     .then(function () {
//         console.log("Database in Sync Now");
//         require("./seed")();
//     });

// Exports Models
module.exports = {
  // Loads model for ConnectPro
  Email: Email,
  Role: Role,
  User: User,
  Events: Events,   // Event is a reserved word
  Event_User: Event_User,
  Organisation: Organisation,
};
