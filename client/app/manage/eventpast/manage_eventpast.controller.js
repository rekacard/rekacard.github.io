(function () {
    angular
        .module("PAF")          
        .controller("EventPastCtrl", EventPastCtrl);    

    EventPastCtrl.$inject = [ 'user', 'EventService', 'ModelService' ];

    function EventPastCtrl(user, EventService, ModelService) {

        var vm = this;
        vm.search = search;
        vm.page = 0;
        if (user) {
            vm.parseuser = user;
            vm.user = vm.parseuser.split(',')[0];
            vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
            vm.search();
        }

      function search() {
        const dir = "../../assets/img/";

            EventService.retrieveEvent("-2", vm.page)
                .then(function(result) {
                // console.log(JSON.stringify(result));
                vm.event = result.data;  // assign to Event Table data
                for (i in vm.event) {
                    // console.log(JSON.stringify(vm.event[i]));
                    var evt = vm.event[i];
                    evt.path = dir + evt.img_filename;
                    evt.organization = ModelService.organization[parseInt(evt.organisation_id)];
                    // Remove the second from time format HH:MM:SS
                    var l = evt.start_time.length;
                    var time = evt.start_time.substring(0, l-3);
                    evt.start_time = time;
                    l = evt.end_time.length;
                    time = evt.end_time.substring(0, l-3);
                    evt.end_time = time;
                }
                return true;
                })
                .catch(function(err) {
                console.log(err);
                return false;
                });
      }
    } // END EventPastCtrl
})();