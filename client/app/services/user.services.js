// Always use an IIFE, i.e., (function() {})();
(function () {
    // Attaches UserService service to the PAF module
    angular
        .module("PAF")
        .service("UserService", UserService);

    // Dependency injection. Here we inject $http because we need this built-in service to communicate with the server
    // There are different ways to inject dependencies; $inject is minification safe
    UserService.$inject = ['$http'];

    // UserService function declaration
    // Accepts the injected dependency as a parameter. We name it $http for consistency, but you may assign any name
    function UserService($http) {

        // Declares the var service and assigns it the object this (in this case, the UserService). Any function or
        // variable that you attach to service will be exposed to callers of UserService, e.g., search.controller.js
        // and register.controller.js
        var service = this;

        // EXPOSED DATA MODELS -----------------------------------------------------------------------------------------
        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------

        // service.login = login;
        service.insertUser = insertUser;
        service.retrieveUserName = retrieveUserName;
        const role = 4; // to be changed to reading from database to get role_id

        function insertUser(user) {
            user.role_id = role;  // to be changed

            return $http.post(
            '/register',
            user,
            );
        }

        function retrieveUserName(user) {
            return $http({
                method: 'GET'
                , url: 'api/username'
                , params: {
                    'user_id': user,
                }
            });
        }

        // function insertUser(user) {
        //     return $http({
        //         method: 'POST'
        //         , url: "register"
        //         , body: { 
        //             user: user,
                            // role_id: role,
                            // nric: user.nric,
                            // salutation: user.salutation,
                            // name_first: user.surname,
                            // name_last: user.givenName,
                            // tel_mobile: user.contactNumber,
                            // dob: user.dateOfBirth,
                            // gender: user.gender,
                            // email: user.email,
                            // password: user.password,
        //         }
        //     });
        // }

    }
})();