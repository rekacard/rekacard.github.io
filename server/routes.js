// Handles API routes

module.exports = function(app, db) {
  var Department = require('./api/department.controller')(db);
  var Employee = require('./api/employee.controller')(db);

  // Create new department
  app.post("/api/departments", Department.create);

  // Retrieve all department records that match query string passed. 
  app.get("/api/departmentsDB", Department.retrieveDB);

  // Retrieve department records (including manager info) that match query string passed. 
  app.get("/api/deptManagers", Department.retrieveDeptManager);

  // Create new employee
  app.post("/api/employees", Employee.create);

  // Retrieve all employee records that match query string passed. 
  app.get("/api/employeesDB", Employee.retrieveDB);


};
