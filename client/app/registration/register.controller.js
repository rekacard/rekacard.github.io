//TODO: Add ability to choose manager when registering a department. An existing manager shouldn't be
//TODO: allowed on the list. Saving of department in departments table and of manager in dept_managers table should be 1
//TODO: transaction (i.e., atomic)
//TODO: 2. Allow users to choose a manager from a list of employees. Note: Function to call is in EmpService

// Always use an IIFE, i.e., (function() {})();
(function () {
    angular
        .module("PAF")          // to call an angular module, omit the second argument ([]) from the angular.module()
        // syntax this syntax is called the getter syntax
        .controller("RegCtrl", RegCtrl);    // angular.controller() attaches a controller to the angular module
    // specified as you can see, angular methods are chainable


    // TODO: 2.1 Inject EmpService so we can access appropriate function, Inject $filter because we need it to format dates
    // Dependency injection. An empty [] means RegCtrl does not have dependencies. Here we inject DeptService so
    // RegCtrl can call services related to department.
<<<<<<< HEAD
    /* 
        RegCtrl.$inject = ['$filter', '$window', 'DeptService', 'EmpService'];
   
   */

    RegCtrl.$inject = ['$window', 'PassportSvc', 'UserService'];
=======
 /* 
     RegCtrl.$inject = ['$filter', '$window', 'DeptService', 'EmpService'];

*/

    RegCtrl.$inject = ['$window', 'UserService'];
>>>>>>> master


    // RegCtrl function declaration. A function declaration uses the syntax: functionName([arg [, arg [...]]]){ ... }
    // RegCtrl accepts the injected dependency as a parameter. We name it DeptService for consistency, but you may
    // assign any name
<<<<<<< HEAD
    function RegCtrl($window, PassportSvc, UserService) {
=======
    function RegCtrl($window, UserService) {
>>>>>>> master

        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the RegCtrl)
        // Any function or variable that you attach to vm will be exposed to callers of RegCtrl, e.g., register.html
        var vm = this;


        // EXPOSED DATA MODELS -----------------------------------------------------------------------------------------
        // Creates a department object. We expose the department object by attaching it to the vm. This allows us to
        // apply two-way data-binding to this object by using ng-model in our view (i.e., index.html)


<<<<<<< HEAD



        vm.user = {
            nric: "",
            gender: 'M',
=======
        


        vm.user = {
            id: "",
>>>>>>> master
            salutation: "",
            surname: "",
            givenName: "",
            contactNumber: "",
            dateOfBirth: "",
            email: "",
<<<<<<< HEAD
            password: "",
            confirmPassword: ""
        };

=======
            password: "", 
            confirmPassword: ""       
        };
       
>>>>>>> master


        vm.isAgeValid = function () {
            var date = new Date(vm.user.dateOfBirth);
            date.setFullYear(date.getFullYear() + 18);
            return date <= new Date();
        };


       

 

        // EXPOSED FUNCTIONS ----------------------------------------------------------------------------------------
        // Exposed functions can be called from the view. e.g., to call the vm.register from our view (register.html),
        // code: ctrl.register()
        vm.register = register;


        // INITIALIZATIONS --------------------------------------------------------------------------------------------
        // Functions that are run when view/html is loaded

        // TODO: 2.3 Call function that initializes manager selection box
        // initManagerBox is a private function (i.e., not exposed)


<<<<<<< HEAD
        /*        
                initManagerBox();
        
        */
=======
/*        
        initManagerBox();

*/
>>>>>>> master
        // FUNCTION DECLARATION AND DEFINITION
        // -------------------------------------------------------------------------
        // TODO: 2.2 Create function that would prepopulate the manager selection box with data. Logic should be placed
        // TODO: 2.2 in EmpService, but handling of success/error should be done in this controller

        // initManagerBox triggers retrieval of employees that are currently not managers of existing departments and
        // displays these employees in the manager selection box
<<<<<<< HEAD


=======
        
/*
        function initManagerBox() {
            EmpService
                .retrieveNonManagers()
                .then(function (results) {
                    console.log("--- EMPLOYEES ----");
                    console.log(results.data);
                    // results.data is expected to contain employee number, first name, and last name
                    vm.employees = results.data;
                })
                .catch(function (err) {
                    console.log("error " + JSON.stringify(err));
                    vm.status.message = err.data.name;
                    vm.status.code = err.data.parent.errno;
                });
        }
>>>>>>> master

*/


        // register function triggers department registration and persistence (i.e., saving to DB)
        function register() {
            // Calls alert box and displays registration information
<<<<<<< HEAD
            // alert("The registration information you sent are \n" + JSON.stringify(vm.user));
=======
            alert("The registration information you sent are \n" + JSON.stringify(vm.user));
>>>>>>> master

            // Prints registration information onto the client console
            console.log("The registration information you sent were:");
            console.log("Salutation: " + vm.user.salutation);
            console.log("Surname: " + vm.user.surname);
            console.log("Given Name: " + vm.user.givenName);
<<<<<<< HEAD
            console.log("Gender: " + vm.user.gender);
            console.log("Contact Number: " + vm.user.contactNumber);
            console.log("Date of Birth: " + vm.user.dateOfBirth);
            console.log("Email: " + vm.user.email);
            console.log("password: " + vm.user.password);
            console.log("password: " + vm.user.confirmPassword);

            UserService
                .insertUser(vm.user)
=======
            console.log("Contact Number: " + vm.user.contactNumber);
            console.log("Date of Birth: " + vm.user.dateOfBirth);
            console.log("Email: " + vm.user.email);
            console.log("Email: " + vm.user.password);
            console.log("Email: " + vm.user.confirmPassword);
            //Hashpassword?
            

/*
            // TODO: 2.3 Add start and end dates since these are also expected by the dept_manager table
            // TODO: 2.3 Reference: https://dev.mysql.com/doc/employee/en/sakila-structure.html. Set start date to
            // TODO: 2.3 today's date (YYYY-MM-DD), and set end date to 9999-01-01
            // Start and end dates (with format YYYY-MM-DD) are also expected by the dept_manager table, so we include
            // that as part of the information sent to DeptService. Start date is set to today's date and end date is
            // set to '9999-01-01'
            vm.department.from_date = $filter('date')(new Date(), 'yyyy-MM-dd');
            vm.department.to_date = new Date('9999-01-01');
            console.log("vm.dept" + JSON.stringify(vm.department));

            // We call DeptService.insertDept to handle registration of department information. The data sent to this
            // function will eventually be inserted into the database.
            DeptService
                .insertDept(vm.department)
>>>>>>> master
                .then(function (result) {
                    console.log("result " + JSON.stringify(result));
                    PassportSvc.login(vm.user)
                        .then(function (result) {
                            // console.log(JSON.stringify(result));
                            // var user = String(result.data.user);
                            // console.log("Login user: " + user);
                            //   $state.go('home');
                            $window.location.assign('/app/registration/thanks.html');
                            return true;
                        })
                        .catch(function (err) {
                            vm.msg = 'Invalid Email or Password!';
                            vm.user.email = vm.user.password = '';
                            // console.log("Login user: NULL");
                            return false;
                        });
                })
                .catch(function (err) {
                    console.log("error " + JSON.stringify(err));
                    vm.status.message = err.data.name;
                    vm.status.code = err.data.parent.errno;
                });

*/

            UserService
                .insertUser(vm.user)
                .then(function (result) {
                    console.log("result " + JSON.stringify(result));
                    $window.location.assign('/app/registration/thanks.html');
                })
                .catch(function (err) {
                    console.log("error " + JSON.stringify(err));
                    vm.status.message = err.data.name;
                    vm.status.code = err.data.parent.errno;
                });



        } // END function register()
    } // END RegCtrl

})();