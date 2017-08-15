(function () {
    angular
        .module("PAF")          
        .controller("AnalyticsUserProfileCtrl", AnalyticsUserProfileCtrl);    

    AnalyticsUserProfileCtrl.$inject = [ 'user', 'UserService' ];

    function AnalyticsUserProfileCtrl(user, UserService) {

        var vm = this;
        vm.search = search;
        if (user) {
            vm.parseuser = user;
            vm.user = vm.parseuser.split(',')[0];
            vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
            vm.search();
        }

        function search() {
            UserService.retrieveUser(vm.user)
                .then(function(result) {
                    console.log(JSON.stringify(result));
                    vm.profile = result.data;
                    vm.profile.name = vm.profile.salutation + ' ' + vm.profile.name_first + ' ' + vm.profile.name_last;
                })
                .catch(function(err) {
                    console.log(err);
                });
        } // END search
    } // END AnalyticsUserProfileCtrl
})();