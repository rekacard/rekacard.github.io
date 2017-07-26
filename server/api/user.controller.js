var User = require("../db").User;

exports.list = function(req,res){
    var whereCondition = {};
    var page = parseInt(req.query.page) || 1;
    var items = parseInt(req.query.items) || 10;
    var offset = (page - 1) * items;
    var limit = items;
    var sortBy = req.query.sortBy || 'ASC';
    var brand = '';
    var name = '';
    var order = 'name_first'+sortBy;

    console.log(req.query.searchType);

    if((typeof req.query.searchType !== 'undefined')) {
        if(typeof req.query.searchType === 'string'){
            if(req.query.searchType=='First Name') {
                name_first = req.query.keyword;
                order = 'name_first '+sortBy;
            }
            if(req.query.searchType=='NRIC') {
                nric = req.query.keyword;
            }
        } else {
            name_first = req.query.keyword;
            nric = req.query.keyword;
        }
    }

    if(name_first && nric) {
        whereCondition = {
            where: {
                name_first: {
                    $like: "%" + name_first + "%"
                },
                nric: {
                    $like: "%" + nric + "%"
                }
            },
            order: order,
            offset: offset,
            limit: limit
        }
    } else {
        if(name_first) {
            whereCondition = {
                where: {
                    name_first: {
                        $like: "%" + name_first + "%"
                    }
                },
                order: order,
                offset: offset,
                limit: limit
            }
        }
        else if(nric) {
            whereCondition = {
                where: {
                    nric: {
                        $like: "%" + nric + "%"
                    }
                },
                order: order,
                offset: offset,
                limit: limit
            }
        }
        else {
            whereCondition = {
                order: order,
                offset: offset,
                limit: limit
            }
        }
    }

   db.User
        .findAndCountAll(whereCondition)
        .then(function (result) {
            if (result) {
                console.log(result);
                res.json(result);
            } else {
                res.status(400).send(JSON.stringify("Record Not Found"));
            }
        });
};

exports.show = function(req,res){
    db.User
        .findOne({
            where: {
                user_id: Number(req.params.user_id)
            }
        })
        .then(function(result){
            if (result) {
                console.log(result);
                res.json(result);
            } else {
                res.status(400).send(JSON.stringify("Record Not Found"));
            }
        });
};

exports.update = function(req,res){
    db.User
        .find({
            where: {
                user_id: Number(req.params.user_id)
            }
        })
        .then(function(result){
            result.updateAttributes({
                name_last: req.body.name_last,
                name_first: req.body.name_first,
                nric: req.body.nric
            }).then(function (){
                console.log("update done");
                res.status(200).end();
            }).catch(function (){
                console.log("update failed");
                res
                    .status(500)
                    .json({error: true, errorText: "Update Failed"})
            });
        })
        .catch(function(err){
            console.log("err", err);
            res
                .status(500)
                .json({error: true, errorText: "Record not found"})
        });

};

exports.delete = function(req,res){
    User
        .destroy({
            where: {
                user_id: req.params.user_id
            }

        })
        .then(function(result) {
            console.log("deleted");
            res
                .status(200)
                .json(result)
        })
        .catch(function(err){
            console.log("err", err);
            res
                .status(500)
                .json({error: true})
        })

};