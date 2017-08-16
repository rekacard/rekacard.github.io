(function () {
    angular
        .module("PAF")          
        .controller("AnalyticsUserBadgesCtrl", AnalyticsUserBadgesCtrl);    

    AnalyticsUserBadgesCtrl.$inject = [ 'user', 'BadgeService', 'UserService' ];

    function AnalyticsUserBadgesCtrl(user, BadgeService, UserService) {

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
            const dir = "../../assets/img/";

            BadgeService.retrieveUser_Badge(vm.user)
                .then(function(result) {
                    console.log(JSON.stringify(result));
                    vm.badge = result.data;
                    for (var i in vm.badge) {
                        var bge = vm.badge[i].badge;
                        vm.badge[i].path = dir + bge.img_filename;
                        vm.badge[i].description = bge.desc;
                    }
                })
                .catch(function(err) {
                    console.log(err);
                });
        } // END search
    } // END AnalyticsUserBadgesCtrl

})();