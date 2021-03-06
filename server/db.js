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
const Role = sequelize.import('./models/roles');
const Email = sequelize.import('./models/emails');
const User = sequelize.import('./models/users');
const Events = sequelize.import('./models/events');
const Event_User = sequelize.import('./models/event_users');
const Organisation = sequelize.import('./models/organisations');
const User_Badge = sequelize.import('./models/user_badges');
const Badge = sequelize.import('./models/badges');

// Define Model Associations

// Link Event_User model to Events model through the event_id FK. This relationship is 1-to-N and so we use hasMany
// Link Event_User model to User model through the event_id FK. This relationship is N-to-1 and so we use belongsTo
// Foreign key is set in Event_User model
Events.hasMany(Event_User, { foreignKey: 'event_id' });
Event_User.belongsTo(Events, { foreignKey: 'event_id' });
Email.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(Email, { foreignKey: 'user_id' });
Badge.hasMany(User_Badge, { foreignKey: 'badge_id' });
User_Badge.belongsTo(Badge, { foreignKey: 'badge_id' });

// Exports Models
module.exports = {
  // Loads model for ConnectPro
  Email: Email,
  Role: Role,
  User: User,
  Events: Events,   // Event is a reserved word
  Event_User: Event_User,
  Organisation: Organisation,
  User_Badge: User_Badge,
  Badge: Badge,
};
