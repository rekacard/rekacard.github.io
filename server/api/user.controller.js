// Defines endpoint handler exposed to client side for retrieving department information from database
var registerUser = function(db) {
  return function(req, res) {
      console.log("Register User retrieve req.body " + JSON.stringify(req.body));
    //   console.log("Register User1 retrieve req.query " + JSON.stringify(req.query));

    var where = {};
    var user = req.body;
    if (req.body.email) {
        where.email_id = user.email;
    }

    //console.log("-- POST /register " + where.id);
    db.User
        .create({
            role_id: user.role_id,
            nric: user.nric,
            salutation: user.salutation,  // to be changed to saluration
            name_first: user.surname,
            name_last: user.givenName,
            tel_mobile: user.contactNumber,
            dob: user.dateOfBirth,
            gender: user.gender,
        })
        .then(function (newuser) {
            console.log(newuser);
            db.Email
                .create({
                    email_id: user.email,
                    user_id: parseInt(newuser.dataValues.user_id),
                    password: user.password,
                })
                .then(function (newuser) {
                        console.log("Respose: " + newuser);
                        // console.log("path /register handler");
                        res.status(200).type("application/json").json({user: parseInt(newuser.dataValues.user_id)});
                }).catch(function () {
                    console.log("Error", arguments)
                })
        }).catch(function () {
            console.log("Error", arguments)
        })

    // db.User
    //     .findOne({ where: where })
    //     .then(function (result) {
    //         console.log("-- POST /register findOne then() result \n " + JSON.stringify(result));
    //         res.json(result);
    //     })
    //     .catch(function (err) {
    //         console.log("-- POST /register findOne catch() \n " + JSON.stringify(departments));
    //         res
    //             .status(500)
    //             .json({error: true});
    //     });
    };
}; 

// Export route handlers
module.exports = function(db) {
  return {
    registerUser: registerUser(db),
  }
};