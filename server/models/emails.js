//Model for email table

module.exports = function (sequelize, Sequelize) {
    return sequelize.define("emails",
        {
            email_id: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
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