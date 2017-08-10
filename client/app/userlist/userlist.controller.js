(function() {
  angular
    .module('PAF')
    .controller('UserListCtrl', UserListCtrl);

  UserListCtrl.$inject = [ 'user', 'UserService' ];

  function UserListCtrl(user, UserService) {
    var vm = this;

    vm.user = user;

    vm.search = search;
    vm.page = 0;

    if (vm.user)
      vm.search();

    function search() {
            UserService.retrieveAllUser()
                .then(function(result) {
                    // console.log(JSON.stringify(result));
                    vm.profile = result.data;
                    for (user in vm.profile)
                      vm.profile[user].name = vm.profile[user].salutation + ' ' + vm.profile[user].name_first + ' ' + vm.profile[user].name_last;
                })
                .catch(function(err) {
                console.log(err);
                });
    }
  }
})();
