// Defines endpoint handler exposed to client side for retrieving department information from database
var registerBadge = function(db) {
  return function(req, res) {
      console.log("Register User retrieve req.body " + JSON.stringify(req.body));
    //   console.log("Register User1 retrieve req.query " + JSON.stringify(req.query));

    var where = {};
    var badge = req.body;
    if (req.body.email) {
        where.email_id = user.email;
    }

    //console.log("-- POST /register " + where.id);
    db.User_Badge
        .create({
            user_id: badge.user_id,
            badge_id: badge.badge_id,
            date_aquired: badge.date_aquired,  // to be changed to saluration
        })
        .then(function (result) {
            console.log(result);
        }).catch(function () {
            console.log("Error", arguments)
        })
    };
};

var retrieveBadge = function(db) {
  return function(req, res) {
    //   console.log("RetrieveUserName req.body " + JSON.stringify(req.body));
      console.log("RetrieveUserName req.query " + JSON.stringify(req.query));

    var vm = this;
    vm.where = {};
    var user = req.query;
    if (user.user_id) {
        vm.where = {user_id: parseInt(user.user_id)};
    }

    //console.log("-- POST /badge " + where.id);
    db.User_Badge
        .findAll({ attributes: ["user_id", "badge_id"]
                    , where: vm.where
                    , include: [ {model: db.Badge
                            , attributes: ["img_filename", "desc",]
                            , required: true} ]
        })
        // this .then() handles successful findAll operation
        .then(function (result) {
            console.log("-- POST /api/badge findAll then() result \n " + JSON.stringify(result));
            res
                .status(200)
                .json(result);
        })
        // this .catch() handles erroneous findAll operation
        .catch(function (err) {
            console.log("-- POST /api/badge/ findAll catch() \n " + JSON.stringify(err));
            res
                .status(500)
                .json(err);
        });
  };
};


// Export route handlers
module.exports = function(db) {
  return {
    registerBadge: registerBadge(db),
    retrieveBadge: retrieveBadge(db),
  }
};