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
            // findOne asks sequelize to search

            .findAll({
                attributes: ["event_id", "role_id", "task_id"]  //, "events.brief_desc"
                ,where: where
                , include: [ {model: db.Events, attributes: 
                  ["organisation_id", "start_date", "start_time", "end_time", "img_filename", "venue", "brief_desc", "note", ], required: true} ]
                , order: [["event_id", "ASC"]]
                , limit: [offset, itemPerPage]
            })
            // this .then() handles successful findAll operation
            // in this example, findAll() used the callback function to return departments
            // we named it departments, but this object also contains info about the
            // latest manager of that department
            .then(function (result) {
                console.log("-- POST /api/login/ findOne then() result \n " + JSON.stringify(result));
                res
                    .status(200)
                    .json(result);
            })
            // this .catch() handles erroneous findAll operation
            .catch(function (err) {
                console.log("-- POST /api/login/ findOne catch() \n " + JSON.stringify(err));
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
    }
};