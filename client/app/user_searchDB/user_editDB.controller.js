(function () {
    angular.module("DMS")
        .controller("UserEditDBCtrl", UserEditDBCtrl);

    function UserEditDBCtrl(UserSearchDBService, $stateParams, $state) {
        var vm = this;
        vm.users = {};

        vm.cancel = function () {
            $state.go("user_searchDB");
        };
        
        UserSearchDBService.edit($stateParams.user_id)
            .then(function (users) {
                vm.users = users;
            }).catch(function (err) {
                console.info("Some Error Occurred",err)
            });

        vm.save = function () {
            console.log("Saving the changes");
            UserSearchDBService.save(vm.users)
                .then(function (result) {
                    console.info("User saved.");
                    $state.go("user_searchDB");
                }).catch(function (err) {
                console.info("Some Error Occurred",err)
            });
        }

        vm.remove = function () {
            console.log("Removing this user");
            if (confirm("Do you really want to remove this user from your database?") == true) {
                UserSearchDBService.remove(vm.users)
                    .then(function (result) {
                        console.info("User removed.");
                        $state.go("user_searchDB");
                    }).catch(function (err) {
                    console.info("Some Error Occurred",err)
                });
            } else {
                //do nothing
            }
        }

    }

    UserEditDBCtrl.$inject = ['UserSearchDBService', '$stateParams', '$state'];
    
})();