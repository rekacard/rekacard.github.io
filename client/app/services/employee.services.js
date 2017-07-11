// Always use an IIFE, i.e., (function() {})();
(function() {
  // Attaches DeptService service to the DMS module
  angular
    .module("DMS")
    .service("EmployeeService", EmployeeService);

  // Dependency injection. Here we inject $http because we need this built-in service to 
  // communicate with the server. There are different ways to inject dependencies;
  // $inject is minification safe
  EmployeeService.$inject = ['$http'];

  // DeptService function declaration
  // Accepts the injected dependency as a parameter. We name it $http for consistency, 
  // but you may assign any name
  function EmployeeService($http) {
    // Declares the var service and assigns it the object this (in this case, the DeptService). 
    // Any function or variable that you attach to service will be exposed to callers of 
    // DeptService, e.g., search.controller.js and register.controller.js
    var service = this;

    // Exposed data models ------------------------------------------------------------------------
    // Exposed functions --------------------------------------------------------------------------
    service.insertEmployee = insertEmployee;
    service.retrieveEmployeeDB = retrieveEmployeeDB;
    
    // Function declaration and definition --------------------------------------------------------

    // insertDept uses HTTP POST to send department information to the server's /departments route
    // Parameters: department information; Returns: Promise object
    function insertEmployee(employee) {
      // This line returns the $http to the calling function
      // This configuration specifies that $http must send the department data received from the 
      // calling function to the /departments route using the HTTP POST method. $http returns a 
      // promise object. In this instance the promise object is returned to the calling function.

      return $http.post(
        '/api/employees', { 
          emp: employee,
        }
      );
    }

    // retrieveDept retrieves department information from the server via HTTP GET.
    // Parameters: searchString. Returns: Promise object
    function retrieveEmployeeDB(searchString) {
      return $http.get(
        '/api/employeesDB', {
        params: {
          'searchString': searchString,
        }
      });
    }
  }
})();
