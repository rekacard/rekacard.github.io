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

        EventService.retrievePastEvent(String(vm.user), vm.page)
          .then(function(result) {
            // console.log(JSON.stringify(result));
            // var user = String(result.data.event_id);
            // console.log("Login user: " + user);
            vm.event = result.data;  // assign to Event Table data
            for (var i in vm.event) {
              // Get description of role
              vm.event[i].role = ModelService.role[parseInt(vm.event[i].role_id)];
              var evt = vm.event[i].event;
              vm.event[i].path = dir + evt.img_filename;
              vm.event[i].organization = ModelService.organization[parseInt(evt.organisation_id)];
              vm.event[i].myrole = vm.event[i].role.toLowerCase();

              // Remove the second from time format HH:MM:SS

              var l = evt.start_time.length;
              var time = evt.start_time.substring(0, l-3);
              evt.start_time = time;
              l = evt.end_time.length;
              time = evt.end_time.substring(0, l-3);
              evt.end_time = time;
              // console.log(JSON.stringify(vm.event[i]));
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