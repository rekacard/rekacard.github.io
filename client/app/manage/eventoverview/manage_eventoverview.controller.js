(function () {
    angular
        .module("PAF")          
        .controller("EventOverviewCtrl", EventOverviewCtrl);    

    EventOverviewCtrl.$inject = [ 'user', "$stateParams", 'EventService', "ManageService" ];

    function EventOverviewCtrl(user, $stateParams, EventService, ManageService) {

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
            ManageService.event_id = vm.event_id;
            vm.search();
        }

        function search() {
            EventService.retrieveEvent($stateParams.id, 0)
                .then(function(result) {
                // console.log(JSON.stringify(result));
                    vm.event = result.data;  // assign to Event Table data
                return true;
                })
                .catch(function(err) {
                console.log(err);
                return false;
                });
        }
    } // END EventOverviewCtrl

})();