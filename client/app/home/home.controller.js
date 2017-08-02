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
    // console.log("Home user: " + user);
    if (!vm.user)
      vm.search();

    function search() {
      EventService.retrieveEvent(vm.page)
        .then(function(result) {
          // console.log(JSON.stringify(result));
          // var user = String(result.data.event_id);
          // console.log("Login user: " + user);
          vm.event = result.data;
          for (evt in vm.event) {
            console.log(JSON.stringify(vm.event[evt]));
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
