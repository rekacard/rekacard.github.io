(function() {
  angular
    .module('PAF')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = [ 'user', 'EventService', 'UserService', 'AlertService' ];

  function HomeCtrl(user, EventService, UserService, AlertService) {
    var vm = this;
    vm.search = search;
    vm.getname = getname;
    vm.getalert = getalert;
    vm.event = [];
    vm.page = 0;
    if (user) {
      vm.parseuser = user;
      vm.user = vm.parseuser.split(',')[0];
      vm.role = vm.parseuser.split(',')[1];
      vm.getname();
      vm.getalert();
    }
    vm.search();

    function getname() {
      UserService.retrieveUserName(vm.user)
        .then(function(result) {
          // console.log(JSON.stringify(result));
          vm.name = result.data.salutation + ' ' + result.data.name_first + ' ' + result.data.name_last;
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    function getalert() {
      AlertService.retrieveUser_Alert(vm.user)
        .then(function(result) {
          console.log(JSON.stringify(result));
          vm.alert = result.data[0].alert.alert_msg;
          // AlertService.deleteAlert(result.data[0].alert_id)
          //   .then(function(result) {
          //     // console.log(JSON.stringify(result));
          //     console.log("Alert deleted!");
          //   })
          //   .catch(function(err) {
          //     console.log(err);
          //   });
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    function search() {
      const dir = "../../assets/img/";
      EventService.retrieveEvent(vm.page, '0')
        .then(function(result) {
          // console.log(JSON.stringify(result));
          vm.event = result.data;  // assign to Event Table data
          for (i in vm.event) {
            // console.log(JSON.stringify(vm.event[i]));
            var evt = vm.event[i];
            evt.path = dir + evt.img_filename;
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
  }
})();
