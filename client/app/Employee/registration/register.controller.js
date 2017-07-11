// Always use an IIFE, i.e., (function() {})();
(function () {
  angular
    // to call an angular module, omit the second argument ([]) from the angular.module()
    // this syntax is called the getter syntax
    .module('DMS') 
    // angular.controller() attaches a controller to the angular module
    .controller('EmpRegCtrl', EmpRegCtrl);    

  // Dependency injection. An empty [] means EmpRegCtrl does not have dependencies. 
  // Here we inject DeptService so EmpRegCtrl can call services related to department.
  EmpRegCtrl.$inject = ['$window', 'EmployeeService'];

  // EmpRegCtrl function declaration. A function declaration uses the syntax: 
  // functionName([arg [, arg [...]]]){ ... }
  // EmpRegCtrl accepts the injected dependencies as parameters. 
  function EmpRegCtrl($window, EmployeeService) {

    // Declares the var vm (for ViewModel) and assigns it the object this 
    // (in this case, the EmpRegCtrl). Any function or variable that you attach to vm 
    // will be exposed to callers of EmpRegCtrl, e.g., register.html
    var vm = this;

    // Exposed data models ------------------------------------------------------------------------
    // Creates a department object. We expose the department object by attaching it to the vm.
    // This allows us to apply two-way data-binding to this object by using ng-model in our view
    // (i.e., index.html)
    vm.employee = {
      id: 0,
      birth_date: "1900-01-01 00:00:00",
      first_name: "",  
      last_name: "",
      // emp_gender: 0;
      gender: 'M',
      hire_date: "1900-01-01 00:00:00",
    };

    // Creates a status object. We will use this to display appropriate success or error messages.
    vm.status = {
      message: '',
      code: '',
    };

    // Exposed functions --------------------------------------------------------------------------
    // Exposed functions can be called from the view. e.g., to call the vm.register from our view 
    // (register.html), code: ctrl.register()
    vm.register = register;

    // Function declaration and definition --------------------------------------------------------
    function register() {
      // Calls alert box and displays registration information
      // alert("The registration information you sent are \n" + JSON.stringify(vm.employee));

      // Prints registration information onto the client console
      console.log("The registration information you sent were:");
      console.log("Employee no: " + vm.employee.id);
      console.log("Employee birthday: " + vm.employee.birth_date);
      console.log("Employee first name: " + vm.employee.first_name);
      console.log("Employee last name: " + vm.employee.last_name);
      console.log("Employee gender: " + vm.employee.gender);
      console.log("Employee hire_date: " + vm.employee.hire_date);

      // if (vm.employee.emp_gender)
      //   vm.employee.gender = 'F';
      // We call DeptService.insertDept to handle registration of department information. 
      // The data sent to the function will eventually be inserted into the database.
      EmployeeService
        .insertEmployee(vm.employee)
        .then(function(result) {
          console.log("result " + JSON.stringify(result));
          $window.location.assign('/app/Employee/registration/thanks.html');
        })
        .catch(function(err) {
          console.log("error " + JSON.stringify(err));
          vm.status.message = err.data.name;
          vm.status.code = err.data.parent.errno;
        });
    } // END function register()
  } // END EmpRegCtrl
})();
