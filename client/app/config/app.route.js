(function(){
    angular
        .module("DMS")
        .config(uiRouteConfig);

    uiRouteConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    function uiRouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                    url: "/home",
                    templateUrl: "app/event/event.html",
                    controller: "EventCtrl",
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
            .state("user_editDB", {
                    url: "/user_editDB",
                    templateUrl: "app/user_searchDB/user_editDB.html",
                    controller: "UserEditDBCtrl",
                    controllerAs: "ctrl"
            })
            .state("user_event", {
                    url: "/user_event",
                    templateUrl: "app/user_event/user_event.html",
                    controller: "UserEventCtrl",
                    controllerAs: "ctrl"
            })
        // $urlRouterProvider.otherwise("/register");
        $urlRouterProvider.otherwise("/home");
    }

})();