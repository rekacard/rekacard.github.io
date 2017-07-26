(function () {
    
    angular.module("DMS")
            .service("UserSearchDBService", UserSearchDBService);

    function UserSearchDBService($http, $q) {
        var vm = this;

        vm.edit = function (user_id) {
            var defer = $q.defer();
            $http.get("/api/userSearch/" + user_id
                .then(function (result) {
                    defer.resolve(result.data);
                })
                .catch(function (err) {
                    defer.reject(err);
                });

            return defer.promise;
        };
        
        vm.save = function (users) {
            var defer = $q.defer();
            $http.put("/api/userSearch/" + users.user_id, users)
                .then(function (result) {
                    defer.resolve(result);
                })
                .catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };

        vm.remove = function (users) {
            var defer = $q.defer();
            $http.delete("/api/userSearch/" + users.user_id, users)
                .then(function (result) {
                    defer.resolve(result);
                })
                .catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };
        
        vm.search = function (searchType, keyword, sortBy, items, page) {
            var defer = $q.defer();
            var params = {
                searchType: searchType,
                keyword: keyword,
                sortBy: sortBy,
                items: items,
                page: page
            };
            $http.get("/api/userSearch", {
                params: params
                }).then(function (results) {
                console.log(results)
                    defer.resolve(results.data);
                }).catch(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        };
    }

    UserSearchDBService.$inject = ['$http', '$q'];
    
})();