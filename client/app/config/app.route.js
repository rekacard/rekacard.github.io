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
            // .state("searchDB", {
            //         url: "/searchDB",
            //         templateUrl: "app/search/searchDB.html",
            //         controller: "SearchDBCtrl",
            //         controllerAs: "ctrl"
            // })
            // .state("edit", {
            //         url: "/edit",
            //         templateUrl: "app/edit/edit.html",
            //         controller: "EditCtrl",
            //         controllerAs: "ctrl"
            // })
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
            .state("editWithParam", {
                    url: "/edit/:id",
                    templateUrl: "app/edit/edit.html",
                    controller: "EditCtrl",
                    controllerAs: "ctrl"
            });
        // $urlRouterProvider.otherwise("/register");
        $urlRouterProvider.otherwise("/searchGrocery");
    }

})();

/*
                    <a href="#register" data-toggle="tab">Registration <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a href="#search" data-toggle="tab">Search<span class="sr-only">(search)</span></a>
                </li>
                <li class="nav-item">
                    <a href="#searchDB" data-toggle="tab">Search DB<span class="sr-only">(searchDB)</span></a>
                </li>
                <li class="nav-item">
                    <a href="#edit" data-toggle="tab">Edit<span class="sr-only">(edit)</span></a>



<!-- Tab panes -->
<div class="container tab-content">
    <div class="tab-pane fade in active" id="register">
        <ng-include src="'/app/registration/register.html'"></ng-include>
    </div>
    <div class="tab-pane fade" id="search">
        <ng-include src="'/app/search/search.html'"></ng-include>
    </div>
    <div class="tab-pane fade" id="searchDB">
        <ng-include src="'/app/search/searchDB.html'"></ng-include>
    </div>
    <div class="tab-pane fade" id="edit">
        <ng-include src="'/app/edit/edit.html'"></ng-include>
    </div>
</div>
*/