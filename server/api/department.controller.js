// Handles department DB queries

// Retrieve from DB
var retrieveDB = function(db) {
  return function (req, res) {
    if (!req.query.searchString) req.query.searchString = '';
    
    db.Department
      .findAll({
        where: {
          $or: [
            { dept_name: { $like: "%" + req.query.searchString + "%" } },
            { dept_no: { $like: "%" + req.query.searchString + "%" } }
          ]
        }
      })
      .then(function(departments) {
        res
          .status(200)
          .json(departments);
      })
      .catch(function(err) {
        console.log("departmentsDB error clause: " + err);
        res
          .status(500)
          .json(err);
      });
  }
};

// Retrieve department managers info
var retrieveDeptManager = function(db) {
  return function(req, res) {
    if (!req.query.searchString) req.query.searchString = '';
    
    db.Department
      .findAll({
        where: {
          $or: [
            { dept_name: { $like: "%" + req.query.searchString + "%" } },
            { dept_no: { $like: "%" + req.query.searchString + "%" } }
          ]
        },
        include: [{
          model: db.DeptManager, 
          order: [["to_date", "DESC"]], 
          limit: 1, 
          include: [db.Employee]
        }],
      })
      .then(function (departments) {
        res
          .status(200)
          .json(departments);
      })
      .catch(function (err) {
        res
          .status(500)
          .json(err);
      });
  }
};

// Create a new departmnet
var create = function(db) {
  return function(req, res) {
    console.log('\nData Submitted');
    console.log('Dept No: ' + req.body.dept.id);
    console.log('Dept Name: ' + req.body.dept.name);

    db.Department
      .create({
        dept_no: req.body.dept.id,
        dept_name: req.body.dept.name
      })
      .then(function(department) {
        console.log(department.get({ plain: true }));
        res
          .status(200)
          .json(department);
      })
      .catch(function(err) {
        console.log("error: " + err);
        res
          .status(500)
          .json(err);
      });
  }
};

// Export route handlers
module.exports = function(db) {
  return {
    retrieveDB: retrieveDB(db),
    retrieveDeptManager: retrieveDeptManager(db),
    create: create(db),
  }
};
