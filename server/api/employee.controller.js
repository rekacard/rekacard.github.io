// Handles employees DB queries
// Retrieve from DB
var retrieveDB = function(db) {
  return function (req, res) {
    console.log("Received: " + req.query.searchString);
    if (!req.query.searchString) {
      req.query.searchString = '0';
    }
    
    db.Employee
      .findAll({
        where: {
          // emp_no: {$like: "%" + req.query.searchString + "%" }
          // emp_no: {$like: req.query.searchString + "%" }
          emp_no: parseInt(req.query.searchString),
        }
      })
      .then(function(departments) {
        res
          .status(200)
          .json(departments);
      })
      .catch(function(err) {
        console.log("EmployeesDB error clause: " + err);
        res
          .status(500)
          .json(err);
      });
  }
};

/* Retrieve department managers info
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
}; */

// Create a new employee
var create = function(db) {
  return function(req, res) {
    console.log('\nData Submitted');
    console.log('Employee No: ' + req.body.emp.id);
    console.log('Employee First Name: ' + req.body.emp.first_name);
    console.log('Employee Last Name: ' + req.body.emp.last_name);

    db.Employee
      .create({
        emp_no: req.body.emp.id,
        birth_date: req.body.emp.birth_date,
        first_name: req.body.emp.first_name,  
        last_name: req.body.emp.last_name,
        gender: req.body.emp.gender,
        hire_date: req.body.emp.hire_date,
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
    create: create(db),
  }
};