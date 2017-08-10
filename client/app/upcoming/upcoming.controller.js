// Always use an IIFE, i.e., (function() {})();
(function () {
    angular
        .module("PAF")          // to call an angular module, omit the second argument ([]) from the angular.module()
        // syntax this syntax is called the getter syntax
        .controller("UpcomingCtrl", UpcomingCtrl);    // angular.controller() attaches a controller to the angular module
                                            // specified as you can see, angular methods are chainable

//   Todo: to be change back
     UpcomingCtrl.$inject = [ 'user', 'EventService', 'ModelService' ];

    // EventCtrl function declaration. A function declaration uses the syntax: functionName([arg [, arg [...]]]){ ... }
    // EventCtrl accepts the injected dependency as a parameter. We name it DeptService for consistency, but you may
    // assign any name
    function UpcomingCtrl(user, EventService, ModelService) {
      // Read configurations

        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the EventCtrl)
        // Any function or variable that you attach to vm will be exposed to callers of EventCtrl, e.g., register.html
      var vm = this;
      vm.user = user;
      vm.search = search;
        vm.page = 0;
      if (vm.user)
        vm.search();

      function search() {
        const dir = "../../assets/img/";

        EventService.retrieveUpcomingEvent(String(vm.user), vm.page)
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

    } // END UpcomingCtrl

})();