(function () {
    angular
        .module("PAF")          
        .controller("AnalyticsUserSearchCtrl", AnalyticsUserSearchCtrl);    

  AnalyticsUserSearchCtrl.$inject = [ 'user', 'UserService' ];

    function AnalyticsUserSearchCtrl(user, UserService) {

        var vm = this;
        vm.search = search;
        if (user) {
            vm.parseuser = user;
            vm.user = vm.parseuser.split(',')[0];
            vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
            vm.search();
        }

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
    } // END AnalyticsUserSearchCtrl

})();