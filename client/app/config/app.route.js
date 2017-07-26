(function(){
    angular
        .module("DMS")
        .config(uiRouteConfig);

    uiRouteConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    function uiRouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            // .state("register", {
            //         url: "/register",
            //         templateUrl: "app/registration/register.html",
            //         controller: "RegCtrl",
            //         controllerAs: "ctrl"
            // })
            // .state("search", {
            //         url: "/search",
            //         templateUrl: "app/search/search.html",
            //         controller: "SearchCtrl",
            //         controllerAs: "ctrl"
            // })
            
            .state("home", {
                    url: "/home",
                    templateUrl: "app/event/event.html",
                    controller: "EventCtrl",
                    controllerAs: "ctrl"
            })
            .state("searchGrocery", {
                    url: "/searchGrocery",
                    templateUrl: "app/search/searchGrocery.html",
                    controller: "SearchGroceryCtrl",
                    controllerAs: "ctrl"
            })
            .state("edit", {
                    url: "/edit",
                    templateUrl: "app/edit/newedit.html",
                    controller: "NewEditCtrl",
                    controllerAs: "ctrl"
            })
            .state("login", {
                    url: "/login",
                    templateUrl: "app/login/login.html",
                    controller: "LoginCtrl",
                    controllerAs: "ctrl"
            })
            .state("register", {
                    url: "/register",
                    templateUrl: "app/registration/register.html",
                    controller: "RegCtrl",
                    controllerAs: "ctrl"
            })
            .state("thanks", {
                    url: "/thanks",
                    templateUrl: "app/registration/thanks.html",
                    controller: "RegCtrl",
                    controllerAs: "ctrl"
            })
            .state("userprofile", {
                    url: "/userprofile",
                    templateUrl: "app/userprofile/userprofile.html",
                    controller: "ProfileCtrl",
                    controllerAs: "ctrl"
            })
            .state("upcoming", {
                    url: "/upcoming",
                    templateUrl: "app/upcoming/upcoming.html",
                    controller: "UpcomingCtrl",
                    controllerAs: "ctrl"
            })
            .state("user_searchDB", {
                    url: "/user_searchDB",
                    templateUrl: "app/user_searchDB/user_searchDB.html",
                    controller: "UserSearchDBCtrl",
                    controllerAs: "ctrl"
            })
            .state("editWithParam", {
                    url: "/edit/:id",
                    templateUrl: "app/edit/edit.html",
                    controller: "EditCtrl",
                    controllerAs: "ctrl"
            });
        // $urlRouterProvider.otherwise("/register");
        $urlRouterProvider.otherwise("/home");
    }

})();