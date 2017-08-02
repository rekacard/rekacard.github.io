(function() {
  angular
    .module('PAF')
    .controller('LoginCtrl', LoginCtrl);

  // LoginCtrl.$inject = [ 'PassportSvc', 'SharedSvc' ];

  // function LoginCtrl(PassportSvc, SharedSvc) {

  LoginCtrl.$inject = [ 'PassportSvc', '$state' ];

  function LoginCtrl(PassportSvc, $state) {
    var vm = this;

    vm.user = {
      email: '',
      password: '',
    }
    vm.msg = '';

    vm.login = login;

    function login() {
      PassportSvc.login(vm.user)
        .then(function(result) {
          // console.log(JSON.stringify(result));
          // var user = String(result.data.user);
          // console.log("Login user: " + user);
          $state.go('home');
          return true;
        })
        .catch(function(err) {
          vm.msg = 'Invalid Email or Password!';
          vm.user.email = vm.user.password = '';
          // console.log("Login user: NULL");
          return false;
        });
    }
  }
})();
