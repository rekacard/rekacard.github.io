// Always use an IIFE, i.e., (function() {})();
(function () {
    // Attaches UserService service to the PAF module
    angular
        .module("PAF")
        .service("AlertService", AlertService);

    // Dependency injection. Here we inject $http because we need this built-in service to communicate with the server
    // There are different ways to inject dependencies; $inject is minification safe
    AlertService.$inject = ['$http'];

    // UserService function declaration
    // Accepts the injected dependency as a parameter. We name it $http for consistency, but you may assign any name
    function AlertService($http) {

        // Declares the var service and assigns it the object this (in this case, the UserService). Any function or
        // variable that you attach to service will be exposed to callers of UserService, e.g., search.controller.js
        // and register.controller.js
        var service = this;

        // EXPOSED DATA MODELS -----------------------------------------------------------------------------------------
        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------

        service.deleteAlert = deleteAlert;
        service.retrieveUser_Alert = retrieveUser_Alert;

        function deleteAlert(alert) {
            return $http({
                method: 'POST'
                , url: "/api/alert_delete"
                , data: { 
                    'alert_id': alert,
                }
            });
        }

        function retrieveUser_Alert(user) {
            return $http({
                method: 'GET'
                , url: 'api/alert'
                , params: {
                    'user_id': user,
                }
            });
        }
    }
})();