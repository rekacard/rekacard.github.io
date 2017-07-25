//Model for email table

module.exports = function (sequelize, Sequelize) {
    return sequelize.define("users",
        {
            user_id: {
                type: Sequelize.INTEGER(10),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            role_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },
            nric: {
                type: Sequelize.STRING,
                allowNull: false
            },
            saturation: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            name_first: {
                type: Sequelize.STRING,
                allowNull: false
            },
            name_last: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true
            },
            tel_mobile: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            tel_home: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            dob: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            gender: {
                type: Sequelize.ENUM('M','F'),
                allowNull: false,
            },
            dialect: {
                type: Sequelize.STRING,
                allowNull: true
            },
            lang_cnt: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            skillset_cnt: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            interest_cnt: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            img_filename: {
                type: Sequelize.STRING,
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