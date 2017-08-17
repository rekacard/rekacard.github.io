//TODO: Add ability to choose manager when registering a department. An existing manager shouldn't be
//TODO: allowed on the list. Saving of department in departments table and of manager in dept_managers table should be 1
//TODO: transaction (i.e., atomic)
//TODO: 2. Allow users to choose a manager from a list of employees. Note: Function to call is in EmpService

// Always use an IIFE, i.e., (function() {})();
(function () {
    angular
        .module("PAF")          // to call an angular module, omit the second argument ([]) from the angular.module()
        // syntax this syntax is called the getter syntax
        .controller("UserEventDetailsCtrl", UserEventDetailsCtrl);    // angular.controller() attaches a controller to the angular module
                                            // specified as you can see, angular methods are chainable

    UserEventDetailsCtrl.$inject = [ 'user', "$stateParams", 'EventService', 'ModelService' ];

    // EventCtrl function declaration. A function declaration uses the syntax: functionName([arg [, arg [...]]]){ ... }
    // EventCtrl accepts the injected dependency as a parameter. We name it DeptService for consistency, but you may
    // assign any name
    function UserEventDetailsCtrl(user, $stateParams, EventService, ModelService) {

        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the EventCtrl)
        // Any function or variable that you attach to vm will be exposed to callers of EventCtrl, e.g., register.html
        var vm = this;
        vm.search = search;
        if (user) {
            vm.parseuser = user;
            vm.user = vm.parseuser.split(',')[0];
            vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
        }

        if ($stateParams.id) {
            // console.log("Received stateParams.event_id: " + $stateParams.id);
            vm.event_id = parseInt($stateParams.id);
            vm.search();
        }

        function search() {
            const dir = "../../assets/img/";
            EventService.retrieveEvent(0, vm.event_id)
                .then(function(result) {
                // console.log(JSON.stringify(result));
                vm.event = result.data[0];  // assign to Event Table data
                // console.log(JSON.stringify(vm.event));
                vm.event.path = dir + vm.event.img_filename;
                vm.event.organisation = ModelService.organization[vm.event.organisation_id];
                // Remove the second from time format HH:MM:SS
                var l = vm.event.start_time.length;
                var time = vm.event.start_time.substring(0, l-3);
                vm.event.start_time = time;
                l = vm.event.end_time.length;
                time = vm.event.end_time.substring(0, l-3);
                vm.event.end_time = time;
                return true;
                })
                .catch(function(err) {
                console.log(err);
                return false;
                });
        }
    } // END UserEventCtrl

})();