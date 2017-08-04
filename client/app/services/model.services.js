(function () {
    // Attaches DeptService service to the DMS module
    angular
        .module("PAF")
        .service("ModelService", ModelService);

    // Dependency injection. Here we inject $http because we need this built-in service to communicate with the server
    // There are different ways to inject dependencies; $inject is minification safe
    // UserService.$inject = ['$http'];

    // ModelService function declaration
    // Accepts the injected dependency as a parameter. We name it $http for consistency, but you may assign any name
    function ModelService() {
    // function ModelService($http) {
        var service = this;

        // EXPOSED DATA MODELS -----------------------------------------------------------------------------------------
        service.role = ["", "Director", "Organizer", "TaskLead", "Member"];
        service.organization = ["", "NTUC Youth"];
        service.skillset = ["", "Photography", ];
        service.causes = ["", "Enviroment", "Elderly"];
        service.language = ["", "English", "Mandrian"];
        
        
        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------

    }
})();