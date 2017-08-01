(function() {
  angular
    .module('PAF')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = [ 'user' ];

  function HomeCtrl(user) {
    var vm = this;

    vm.user = user;
    // console.log("Home user: " + user);
  }
})();
