//Model for event table

module.exports = function (sequelize, Sequelize) {
    return sequelize.define("events",
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
                type: Sequelize.TEXT,
                allowNull: false
            },
            detail_desc: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            date: {
                type: Sequelize.DATEONLY,
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
            direction: {
                type: Sequelize.TEXT('TINY'),
                allowNull: true,
            },
            note: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            member_age_max: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            member_age_min: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            meal_avail: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
           shirt_avail: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            img_filename: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            map_location: {
                type: Sequelize.STRING,
                allowNull: true,
            },
           approved: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            approved_user_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
           published: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            published_user_id: {
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