// Defines endpoint handler exposed to client side for retrieving department information from database
var retrieveIDByEmail = function(db) {
  return function(req, res) {
      console.log("retrieve req.query" + JSON.stringify(req.query));
    //   console.log("retrieve req.params" + JSON.stringify(req.params));


    var where = {};
    if (req.query.email) {
        where.email = req.query.email;
    }
    // console.log("-- GET /api/id/ " + where.id);
    db.Email
    // findOne asks sequelize to search
        .findOne({ where: where })
        // this .then() handles successful findAll operation
        // in this example, findAll() used the callback function to return departments
        // we named it departments, but this object also contains info about the
        // latest manager of that department
        .then(function (result) {
            console.log("-- GET /api/id/ findOne then() result \n " + JSON.stringify(result));
            res.json(result);
        })
        // this .catch() handles erroneous findAll operation
        .catch(function (err) {
            console.log("-- GET /api/id/ findOne catch() \n " + JSON.stringify(departments));
            res
                .status(500)
                .json({error: true});
        });
  };
}; 

var createNew = function(db) {
  return function(req, res) {


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

        db.User
            .create({
                role_id: 1,
                nric: "7111111",
                saturation: "Mr",
                name_first: "Wo",
                name_last: "on",
                gender: 'M',
                // created_at: Sequelize,
                // updated_at: null,
            })
            .then(function (user) {
                console.log(user);
                db.Email
                    .create({
                        email_id: "ken1@ken.com",
                        user_id: 1,
                        password: "abc",
                        // created_at: Sequelize,
                        // updated_at: null,
                    })
                    .then(function (user) {
                        console.log(user);
                    }).catch(function () {
                        console.log("Error", arguments)
                    })
            }).catch(function () {
                console.log("Error", arguments)
            })


        db.User
            .create({
                role_id: 2,
                nric: "7222222",
                saturation: "Mr",
                name_first: "Wo",
                name_last: "on",
                gender: 'M',
                // created_at: Sequelize,
                // updated_at: null,
            })
            .then(function (user) {
              //  console.log(user);
                db.Email
                    .create({
                        email_id: "ken2@ken.com",
                        user_id: 2,
                        password: "abc",
                        // created_at: Sequelize,
                        // updated_at: null,
                    })
                    .then(function (user) {
                        console.log(user);
                    }).catch(function () {
                        console.log("Error", arguments)
                    })
                
            }).catch(function () {
                console.log("Error", arguments)
            })


        db.User
            .create({
                role_id: 3,
                nric: "7333333",
                saturation: "Mr",
                name_first: "Wo",
                name_last: "on",
                gender: 'M',
                // created_at: Sequelize,
                // updated_at: null,
            })
            .then(function (user) {
                // console.log(user);
                db.Email
                    .create({
                        email_id: "ken3@ken.com",
                        user_id: 3,
                        password: "abc",
                        // created_at: Sequelize,
                        // updated_at: null,
                    })
                    .then(function (user) {
                        console.log(user);
                    }).catch(function () {
                        console.log("Error", arguments)
                    })
            }).catch(function () {
                console.log("Error", arguments)
            })


        db.User
            .create({
                role_id: 4,
                nric: "7444444",
                saturation: "Mr",
                name_first: "Wo",
                name_last: "on",
                gender: 'M',
                // created_at: Sequelize,
                // updated_at: null,
            })
            .then(function (user) {
                console.log(user);
                db.Email
                    .create({
                        email_id: "ken4@ken.com",
                        user_id: 4,
                        password: "abc",
                        // created_at: Sequelize,
                        // updated_at: null,
                    })
                    .then(function (user) {
                        console.log(user);
                    }).catch(function () {
                        console.log("Error", arguments)
                    })
            }).catch(function () {
                console.log("Error", arguments)
            });

  };
}

// Export route handlers
module.exports = function(db) {
  return {
    retrieveIDByEmail: retrieveIDByEmail(db),
    createNew: createNew(db),

  }
};