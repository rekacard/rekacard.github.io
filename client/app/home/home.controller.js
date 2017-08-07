(function() {
  angular
    .module('PAF')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = [ 'user', 'EventService', 'UserService' ];

  function HomeCtrl(user, EventService, UserService) {
    var vm = this;
    vm.search = search;
    vm.getname = getname;
    vm.event = [];
    vm.user = user;
    vm.page = 0;

    if (vm.user) vm.getname();
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

    function search() {
      const dir = "../../assets/img/";
      EventService.retrieveEvent(vm.page)
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
