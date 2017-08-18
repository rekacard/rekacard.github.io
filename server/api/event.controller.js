// Defines endpoint handler exposed to client side for retrieving department information from database
var retrieveEvent = function (db) {
    return function (req, res) {
        console.log("RetrieveEvent req.query " + JSON.stringify(req.query));

        // var where = {};
        // if (req.query.event_id) {
        //     where.event_id = req.query.event_id;
        // }

        // console.log("-- POST /api/event/ " + where.id);
        vm = this;
        var itemPerPage = 9;
        vm.offset = parseInt(req.query.page) * itemPerPage;
        vm.event_id = parseInt(req.query.event_id);
        console.log("event_id " + vm.event_id)
        if ((vm.event_id == 0) || (vm.event_id == -1))  {
            if (vm.event_id == -1) {
                var itemPerPage = 50;
                vm.offset = parseInt(req.query.page) * itemPerPage;
            }
            vm.where =  {
                            start_date: {
                                $gte: new Date()
                            }
                        };
        } else if (vm.event_id > 0) {
            vm.where = { 'event_id': vm.event_id };
        } else if (vm.event_id == -2) {
            vm.where = { 'event_id': vm.event_id };
                var itemPerPage = 50;
                vm.offset = parseInt(req.query.page) * itemPerPage;
            vm.where =  {
                            start_date: {
                                $lt: new Date()
                            }
                        };
        }

        db.Events
            // findOne asks sequelize to search
            .findAll({
                where: vm.where
                , order: [["start_date", "ASC"]]
                , limit: [vm.offset, itemPerPage]
            })
            // this .then() handles successful findAll operation
            // in this example, findAll() used the callback function to return departments
            // we named it departments, but this object also contains info about the
            // latest manager of that department
            .then(function (result) {
                console.log("-- POST /api/event/ findAll then() result \n " + JSON.stringify(result));
                res
                    .status(200)
                    .json(result);
            })
            // this .catch() handles erroneous findAll operation
            .catch(function (err) {
                console.log("-- POST /api/event/ findAll catch() \n " + JSON.stringify(err));
                res
                    .status(500)
                    .json(err);
            });
    };
};

// Export route handlers
module.exports = function (db) {
    return {
        retrieveEvent: retrieveEvent(db),
    }
};