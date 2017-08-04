//Model for event_users table

module.exports = function (sequelize, Sequelize) {
    return sequelize.define("event_users",
        {
            event_user_id: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            event_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },
            role_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },
            task_id: {
                type: Sequelize.INTEGER(10),
                allowNull: true,
            },
            dietary: {
                type: Sequelize.STRING,
                allowNull: true
            },
            shirt_size: {
                type: Sequelize.ENUM,
                values: ['R', 'S', 'M', 'L', 'X'],
                allowNull: true,
            },
            interested_role_id: {
                type: Sequelize.INTEGER(10),
                allowNull: true,
            },
            remark: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            attendance: {
                type: Sequelize.ENUM,
                values: ['P', 'A', 'C'],
                allowNull: true,
            },
            performance: {
                type: Sequelize.STRING,
                allowNull: true
            },
            rating: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            }
        },
        {
            // don't change the name of the table to pural
            freezeTableName: true,
            // don't add timestamps attributes updatedAt and createdAt
            timestamps: false,
         });
};