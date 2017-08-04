(function() {
  angular
    .module('PAF')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = [ 'user', 'EventService' ];

  function HomeCtrl(user, EventService) {
    var vm = this;
    vm.search = search;
    vm.event = [];
    vm.user = user;
    vm.page = 0;

    if (!vm.user)
      vm.search();

    function search() {
      const dir = "../../assets/img/";
      EventService.retrieveEvent(vm.page)
        .then(function(result) {
          // console.log(JSON.stringify(result));
          // var user = String(result.data.event_id);
          // console.log("Login user: " + user);
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
