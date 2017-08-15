// Defines endpoint handler exposed to client side for retrieving department information from database
var retrieveUpcomingEvent = function (db) {
    return function (req, res) {
        console.log("-- GET /api/upcomingevent/  Retrieve req.query:" +  JSON.stringify(req.query));

        var where = {};
        // var user_id = parseInt(req.query.user_id);
        if (req.query.user_id) {
            where.user_id = req.query.user_id;
        }

        const itemPerPage = 9;
        var offset = parseInt(req.query.page) * itemPerPage;

        db.Event_User
            // findAll asks sequelize to search for records that contain the serach fields
            .findAll({
                attributes: ["event_id", "role_id", "task_id"]  //, "events.brief_desc"
                ,where: where
                , include: [ {model: db.Events
                            , where: {
                                start_date: {
                                $gte: new Date()
                                }
                            }
                            , attributes: ["organisation_id", "start_date", "start_time", "end_time", 
                                           "img_filename", "venue", "brief_desc", ]
                            , order: [["start_date", "DESC"]]
                            , required: true} ]
            })
            // this .then() handles successful findAll operation
            .then(function (result) {
                console.log("-- POST /api/upcomingevent/ findAll then() result \n " + JSON.stringify(result));
                res
                    .status(200)
                    .json(result);
            })
            // this .catch() handles erroneous findAll operation
            .catch(function (err) {
                console.log("-- POST /api/upcomingevent/ findAll catch() \n " + JSON.stringify(err));
                res
                    .status(500)
                    .json(err);
            });
    };
};

// Defines endpoint handler exposed to client side for retrieving department information from database
var retrievePastEvent = function (db) {
    return function (req, res) {
        console.log("-- GET /api/upcomingevent/  Retrieve req.query:" +  JSON.stringify(req.query));

        var where = {};
        // var user_id = parseInt(req.query.user_id);
        if (req.query.user_id) {
            where.user_id = req.query.user_id;
        }

        const itemPerPage = 9;
        var offset = parseInt(req.query.page) * itemPerPage;

        db.Event_User
            // findAll asks sequelize to search for records that contain the search fields
            .findAll({
                attributes: ["event_id", "role_id", "task_id"]  //, "events.brief_desc"
                ,where: where
                , include: [ {model: db.Events
                            , where: {
                                start_date: {
                                $lt: new Date()
                                }
                            }
                            , attributes: ["organisation_id", "start_date", "start_time", "end_time", 
                                           "img_filename", "venue", "brief_desc", ]
                            , order: [["start_date", "DESC"]]
                            , required: true}]
            })
            // this .then() handles successful findAll operation
            .then(function (result) {
                console.log("-- POST /api/upcomingevent/ findAll then() result \n " + JSON.stringify(result));
                res
                    .status(200)
                    .json(result);
            })
            // this .catch() handles erroneous findAll operation
            .catch(function (err) {
                console.log("-- POST /api/upcomingevent/ findAll catch() \n " + JSON.stringify(err));
                res
                    .status(500)
                    .json(err);
            });
    };
};

// Export route handlers
module.exports = function (db) {
    return {
        retrieveUpcomingEvent: retrieveUpcomingEvent(db),
        retrievePastEvent: retrievePastEvent(db),
    }
};