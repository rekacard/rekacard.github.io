(function () {
    angular
        .module("DMS")
        .controller("UserSearchDBCtrl", UserSearchDBCtrl)

    UserSearchDBCtrl.$inject = ['UserSearchDBService', '$state'];

    function UserSearchDBCtrl(UserSearchDBService, $state) {
        var vm = this;
        vm.users = "";
        vm.typesOfSearch = ['First Name','NRIC'];
        vm.searchType = [];
        vm.searchType.selectedType = [];
        vm.sortBy = "";
        vm.keyword = "";

        vm.totalItems = 0;
        vm.itemsPerPage = 20;
        vm.maxSize = 8;
        vm.currentPage = 1;

        vm.pageChanged = function() {
            console.log('Page changed to: ' + vm.currentPage);

            UserSearchDBService.search(vm.searchType, vm.keyword, vm.sortBy, vm.itemsPerPage, vm.currentPage)
                .then(function (users) {
                    vm.users = users.rows;
                    vm.totalItems = users.count;
                }).catch(function (err) {
                console.info("Some Error Occurred",err)
            });
        };

        vm.search = function (searchType, keyword, sortBy) {
            if(searchType.length==0) {
                alert('Please select at least one search type');
            }
            else {
                vm.searchType = searchType;
                vm.keyword = keyword;
                UserSearchDBService.search(searchType, keyword, sortBy, vm.itemsPerPage, vm.currentPage)
                    .then(function (users) {
                        vm.users = users.rows;
                        vm.totalItems = users.count;
                    })
                    .catch(function (err) {
                        console.info("Some Error Occurred",err);
                    });
            }
        };
        
        vm.getUser = function (id) {
            $state.go("user_editDB", {'user_id' : user_id});
        };

        UserSearchDBService.search(vm.searchType, vm.keyword, vm.sortBy, vm.itemsPerPage, vm.currentPage)
            .then(function (users) {
                vm.users = users.rows;
                vm.totalItems = users.count;
            }).catch(function (err) {
            console.info("Some Error Occurred",err)
        });
    }  
})();