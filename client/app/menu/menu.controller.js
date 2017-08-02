(function() {
  angular
    .module('PAF')
    .controller('MenuCtrl', MenuCtrl);

  MenuCtrl.$inject = [ 'user' ];

  function MenuCtrl(user) {
    var vm = this;

    vm.user = user;
  }
})();
