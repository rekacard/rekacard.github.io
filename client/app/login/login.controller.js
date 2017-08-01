<<<<<<< HEAD
(function() {
  angular
    .module('PAF')
    .controller('LoginCtrl', LoginCtrl);

  // LoginCtrl.$inject = [ 'PassportSvc', 'SharedSvc' ];

  // function LoginCtrl(PassportSvc, SharedSvc) {

  LoginCtrl.$inject = [ 'PassportSvc', '$state' ];

  function LoginCtrl(PassportSvc, $state) {
    var vm = this;

    vm.user = {
      email: '',
      password: '',
    }
    vm.msg = '';

    vm.login = login;

    function login() {
      PassportSvc.login(vm.user)
        .then(function(result) {
          // console.log(JSON.stringify(result));
          // var user = String(result.data.user);
          // console.log("Login user: " + user);
          $state.go('home');
          return true;
        })
        .catch(function(err) {
          vm.msg = 'Invalid Email or Password!';
          vm.user.email = vm.user.password = '';
          // console.log("Login user: NULL");
          return false;
        });
    }
  }
})();
=======
//TODO: Add ability to choose manager when registering a department. An existing manager shouldn't be
//TODO: allowed on the list. Saving of department in departments table and of manager in dept_managers table should be 1
//TODO: transaction (i.e., atomic)
//TODO: 2. Allow users to choose a manager from a list of employees. Note: Function to call is in EmpService

// Always use an IIFE, i.e., (function() {})();
(function () {
    'use strict';
    angular
        .module("DMS")          // to call an angular module, omit the second argument ([]) from the angular.module()
        // syntax this syntax is called the getter syntax
        .controller("LoginCtrl", LoginCtrl);    // angular.controller() attaches a controller to the angular module
                                            // specified as you can see, angular methods are chainable

    LoginCtrl.$inject = ['PassportSvc', '$state', "UserService"];

    // EventCtrl function declaration. A function declaration uses the syntax: functionName([arg [, arg [...]]]){ ... }
    // EventCtrl accepts the injected dependency as a parameter. We name it DeptService for consistency, but you may
    // assign any name
    function LoginCtrl(PassportSvc, $state, UserService) {

        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the EventCtrl)
        // Any function or variable that you attach to vm will be exposed to callers of EventCtrl, e.g., register.html
        var vm = this;
        vm.user = {
          username: "",
          password: "",
        }
        vm.email = "";
        vm.password = "";
        // vm.data = {};
        vm.user_id = 0;

        // Exposed functions ------------------------------------------------------------------------------------------
        // Exposed functions can be called from the view.
        vm.submit = submit;
        vm.login = login;
        
        function submit() {
            UserService
                .login(vm.email, vm.password)
                .then(function (results) {
                    // The result returned by the DB contains a data object, which in turn contains the records read
                    // from the database
                    vm.user_id = results.data.user_id;
                    console.log("User id: "  + results.data.user_id);
                })
                .catch(function (err) {
                    // We console.log the error. For a more graceful way of handling the error, see
                    // register.controller.js
                    console.log("error " + err);
                });
        }        

        function login() {
            vm.user.username = vm.email;
            vm.user.password = vm.password;
            console.log("logging in... with " + vm.user.username);
            PassportSvc.login(vm.user)
                .then(function(result) {
                console.log(JSON.stringify(result));
                console.log(result);
                $state.go('userprofile');
                return true;
                })
                .catch(function(err) {
                vm.msg = 'Invalid Username or Password!';
                vm.user.username = vm.user.password = '';
                return false;
            });
        }
    } // END LoginCtrl

})();
>>>>>>> master
