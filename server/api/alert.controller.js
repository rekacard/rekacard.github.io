// Defines endpoint handler exposed to client side for retrieving department information from database
var deleteAlert = function(db) {
  return function(req, res) {
      // console.log("Delete Alert retrieve req.body " + JSON.stringify(req.body));

    var vm = this;
    vm.where = {};
    vm.alert = req.body;
    if (vm.alert.alert_id > 0) {
        vm.where = {"alert_id": vm.alert.alert_id};
    }

    //console.log("-- POST /register " + where.id);
    db.Alert
        .delete({ where: vm.where })
        .then(function (result) {
            console.log(result);
        }).catch(function () {
            console.log("Error", arguments)
        })
    };
};

var retrieveAlert = function(db) {
  return function(req, res) {
    // console.log("RetrieveAlert req.query " + JSON.stringify(req.query));

    var vm = this;
    vm.where = {};
    var user = req.query;
    if (user.user_id) {
        vm.where = {user_id: parseInt(user.user_id)};
    }

    //console.log("-- POST /badge " + where.id);
    db.User_Alert
        .findAll({ attributes: ["user_id", "event_id", "alert_id"]
                    , where: vm.where
                    , include: [ {model: db.Alert
                            , attributes: ["alert_msg",]
                            , required: true} ]
        })
        // this .then() handles successful findAll operation
        .then(function (result) {
            console.log("-- POST /api/alert findAll then() result \n " + JSON.stringify(result));
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
    deleteAlert: deleteAlert(db),
    retrieveAlert: retrieveAlert(db),
  }
};