(function () {
    angular
        .module("PAF")          
        .controller("EditUserProfileCtrl", EditUserProfileCtrl);    

    EditUserProfileCtrl.$inject = [ 'user', 'UserService' ];

    function EditUserProfileCtrl(user, UserService) {

        var vm = this;
        vm.getname = getname;
        vm.search = search;
        if (user) {
            vm.parseuser = user;
            vm.user = vm.parseuser.split(',')[0];
            vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
            vm.getname();
            vm.search();
        }
        
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