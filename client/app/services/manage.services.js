(function () {
    // Attaches DeptService service to the DMS module
    angular
        .module("PAF")
        .service("ManageService", ManageService);

    // Dependency injection. Here we inject $http because we need this built-in service to communicate with the server
    // There are different ways to inject dependencies; $inject is minification safe
    // UserService.$inject = ['$http'];

    // ManageService function declaration
    // Accepts the injected dependency as a parameter. We name it $http for consistency, but you may assign any name
    function ManageService() {
        var service = this;
        service.event_id = 0;
        
        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------

    }
})();