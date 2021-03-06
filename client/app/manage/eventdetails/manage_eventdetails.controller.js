(function () {
    angular
        .module("PAF")          
        .controller("EventEditCtrl", EventEditCtrl);    

    EventEditCtrl.$inject = [ 'user', "$stateParams", 'EventService', 'ModelService', "ManageService" ];

    function EventEditCtrl(user, $stateParams, EventService, ModelService, ManageService) {
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
            const dir = "../../assets/img/";
            EventService.retrieveEvent(vm.event_id, 0)
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

    } // END EventEditCtrl

})();