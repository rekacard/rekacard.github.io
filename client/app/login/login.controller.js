//TODO: Add ability to choose manager when registering a department. An existing manager shouldn't be
//TODO: allowed on the list. Saving of department in departments table and of manager in dept_managers table should be 1
//TODO: transaction (i.e., atomic)
//TODO: 2. Allow users to choose a manager from a list of employees. Note: Function to call is in EmpService

// Always use an IIFE, i.e., (function() {})();
(function () {
    angular
        .module("DMS")          // to call an angular module, omit the second argument ([]) from the angular.module()
        // syntax this syntax is called the getter syntax
        .controller("LoginCtrl", LoginCtrl);    // angular.controller() attaches a controller to the angular module
                                            // specified as you can see, angular methods are chainable

    LoginCtrl.$inject = ['UserService'];

    // EventCtrl function declaration. A function declaration uses the syntax: functionName([arg [, arg [...]]]){ ... }
    // EventCtrl accepts the injected dependency as a parameter. We name it DeptService for consistency, but you may
    // assign any name
    function LoginCtrl(UserService) {

        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the EventCtrl)
        // Any function or variable that you attach to vm will be exposed to callers of EventCtrl, e.g., register.html
        var vm = this;
        vm.email = "";
        vm.password = "";
        vm.data = {};
        vm.user_id = 0;

        // Exposed functions ------------------------------------------------------------------------------------------
        // Exposed functions can be called from the view.
        vm.submit = submit;
        
        function submit() {
            UserService
                .login(vm.email, vm.password)
                .then(function (results) {
                    // The result returned by the DB contains a data object, which in turn contains the records read
                    // from the database
                    vm.user_id = results.data.user_id;
                    console.log("User id"  + results.data.user_id);
                })
                .catch(function (err) {
                    // We console.log the error. For a more graceful way of handling the error, see
                    // register.controller.js
                    console.log("error " + err);
                });

        }        


    } // END LoginCtrl

})();