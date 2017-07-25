var config = require("./config");
var db = require("./db");
var User = db.User;
var Email = db.Email;
var Role = db.Role;

module.exports = function () {
    if (config.seed) {
        // db.Role
        //     .create({
        //         // role_id: 1,
        //         desc: "director",
        //         // created_at: Sequelize,
        //         // updated_at: null,
        //     })
        //     .then(function (user) {
        //         console.log(user);
        //     }).catch(function () {
        //         console.log("Error", arguments)
        //     })

        // db.Role
        //     .create({
        //         // role_id: 2,
        //         desc: "Event Organizer",
        //         // created_at: Sequelize,
        //         // updated_at: null,
        //     })
        //     .then(function (user) {
        //         console.log(user);
        //     }).catch(function () {
        //         console.log("Error", arguments)
        //     })

        // db.Role
        //     .create({
        //         // role_id: 3,
        //         desc: "Task Lead",
        //         // created_at: Sequelize,
        //         // updated_at: null,
        //     })
        //     .then(function (user) {
        //         console.log(user);
        //     }).catch(function () {
        //         console.log("Error", arguments)
        //     })

        // db.Role
        //     .create({
        //         // role_id: 4,
        //         desc: "Member",
        //         // created_at: Sequelize,
        //         // updated_at: null,
        //     })
        //     .then(function (user) {
        //         console.log(user);
        //     }).catch(function () {
        //         console.log("Error", arguments)
        //     })

        // db.User
        //     .create({
        //         role_id: 1,
        //         nric: "7111111",
        //         saturation: "Mr",
        //         name_first: "Wo",
        //         name_last: "on",
        //         gender: 'M',
        //         // created_at: Sequelize,
        //         // updated_at: null,
        //     })
        //     .then(function (user) {
        //         console.log(user);
        //     }).catch(function () {
        //         console.log("Error", arguments)
        //     })

        // db.Email
        //     .create({
        //         email_id: "ken1@ken.com",
        //         user_id: 1,
        //         password: "abc",
        //         // created_at: Sequelize,
        //         // updated_at: null,
        //     })
        //     .then(function (user) {
        //         console.log(user);
        //     }).catch(function () {
        //         console.log("Error", arguments)
        //     })


        // db.User
        //     .create({
        //         role_id: 1,
        //         nric: "7222222",
        //         saturation: "Mr",
        //         name_first: "Wo",
        //         name_last: "on",
        //         gender: 'M',
        //         // created_at: Sequelize,
        //         // updated_at: null,
        //     })
        //     .then(function (user) {
        //         console.log(user);
        //     }).catch(function () {
        //         console.log("Error", arguments)
        //     });

        // db.Email
        //     .create({
        //         email_id: "ken2@ken.com",
        //         user_id: 2,
        //         password: "abc",
        //         // created_at: Sequelize,
        //         // updated_at: null,
        //     })
        //     .then(function (user) {
        //         console.log(user);
        //     }).catch(function () {
        //         console.log("Error", arguments)
        //     })

    };
};