//Model for shop table

module.exports = function (sequelize, Sequelize) {
    var Grocery = sequelize.define("grocery_list",
        {
            id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            upc12: {
                type: Sequelize.BIGINT(12),
                allowNull: false,
            },
            brand: {
                type: Sequelize.STRING,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        },
        {
            // don't add timestamps attributes updatedAt and createdAt
            freezeTableName: true,
            timestamps: false
         });

    return Grocery;
};