(function() {
  angular
    .module("DMS")
    .controller("SearchEmployeeCtrl", SearchEmployeeCtrl);

  SearchEmployeeCtrl.$inject = ['EmployeeService'];

  function SearchEmployeeCtrl(EmployeeService) {
    var vm = this;

    vm.searchString = '';
    vm.result = null;
    vm.showManager = false;

    // Exposed functions --------------------------------------------------------------------------
    // Exposed functions can be called from the view.
    vm.search = search;

    // Initializations ----------------------------------------------------------------------------
    // Functions that are run when view/html is loaded
    // init is a private function (i.e., not exposed)
    init();

    // Function declaration and definition --------------------------------------------------------
    // The init function initializes view
    function init() {
      // We call DeptService.retrieveDeptDB to handle retrieval of department information. 
      // The data retrieved from this function is used to populate search.html. Since we are 
      // initializing the view, we want to display all available departments, thus we ask 
      // service to retrieve '' (i.e., match all)
      EmployeeService
        .retrieveEmployeeDB('')
        .then(function (results) {
          // The result returned by the DB contains a data object, which in turn contains the 
          // records read from the database
          vm.employees = results.data;
        })
        .catch(function (err) {
          // We console.log the error. For a more graceful way of handling the error, see
          // register.controller.js
          console.log("error " + err);
        });
    }

    // The search function searches for departments that matches query string entered by user. The query string is
    // matched against the department name and department number alike.
    function search() {
      vm.showManager = false;
console.log("Sending:" + vm.searchString);
      EmployeeService
        // we pass contents of vm.searchString to service so that we can search the DB for this 
        // string
        .retrieveEmployeeDB(vm.searchString)
        .then(function (results) {
          // The result returned by the DB contains a data object, which in turn contains the 
          // records read from the database
          vm.employees = results.data;
        })
        .catch(function (err) {
          // We console.log the error. For a more graceful way of handling the error, see
          // register.controller.js
          console.log("error " + err);
        });
    }
  }
})();
