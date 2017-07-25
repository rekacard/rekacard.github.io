//Model for email table

module.exports = function (sequelize, Sequelize) {
    return sequelize.define("roles",
        {
            role_id: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            desc: {
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