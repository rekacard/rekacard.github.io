//Model for email table

module.exports = function (sequelize, Sequelize) {
    return sequelize.define("users",
        {
            event_id: {
                type: Sequelize.INTEGER(20),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            organisation_id: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },
            brief_desc: {
                type: Sequelize.STRING,
                allowNull: false
            },
            detail_desc: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            start_time: {
                type: Sequelize.TIME,
                allowNull: false
            },
            end_time: {
                type: Sequelize.TIME,
                allowNull: false
            },
            venue: {
                type: Sequelize.STRING,
                allowNull: false
            },
            category: {
                type: Sequelize.STRING,
                allowNull: false
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