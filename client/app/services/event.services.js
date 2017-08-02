// Always use an IIFE, i.e., (function() {})();
(function () {
    // Attaches DeptService service to the DMS module
    angular
        .module("PAF")
        .service("EventService", EventService);

    // Dependency injection. Here we inject $http because we need this built-in service to communicate with the server
    // There are different ways to inject dependencies; $inject is minification safe
    EventService.$inject = ['$http'];

    // EventService function declaration
    // Accepts the injected dependency as a parameter. We name it $http for consistency, but you may assign any name
    function EventService($http) {

        // Declares the var service and assigns it the object this (in this case, the EventService). Any function or
        // variable that you attach to service will be exposed to callers of EventService, e.g., search.controller.js
        // and register.controller.js
        var service = this;

        // EXPOSED DATA MODELS -----------------------------------------------------------------------------------------
        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------

        // service.login = login;
        service.retrieveEvent = retrieveEvent;

        function retrieveEvent(page) {
            return $http({
                method: 'GET'
                , url: 'api/event'
                , params: {
                    'page': page,
                }
            });
        }
    }
})();