(function() {
  angular
    .module('PAF')
    .controller('MenuCtrl', MenuCtrl);

  MenuCtrl.$inject = [ 'user' ];

  function MenuCtrl(user) {
    var vm = this;

    if (user) {
      vm.parseuser = user;
      vm.user = vm.parseuser.split(',')[0];
      vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
    }
  }
})();
