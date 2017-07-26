// Always use an IIFE, i.e., (function() {})();
(function () {
    // Attaches DeptService service to the DMS module
    angular
        .module("DMS")
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

        service.login = login;
        // service.retrieveGroceryByID = retrieveGroceryByID;
        // service.retrieveGrocery = retrieveGrocery;
        // service.retrieveGroceryBrand = retrieveGroceryBrand;
        // service.retrieveGroceryProduct = retrieveGroceryProduct;
        // service.updateBrand = updateBrand;
        // service.updateName = updateName;

        // retrieveDeptDB retrieves department information from the server via HTTP GET. Passes information via the query
        // string (params) Parameters: searchString. Returns: Promise object

        function login(email, password) {
            return $http({
                method: 'POST'
                , url: 'api/login'
                , params: {
                    email: email,
                    password: password,
                }
            });
        }

/*
        function retrieveGroceryByID(id) {
            return $http({
                method: 'GET'
                , url: 'api/id'
                , params: {
                    'id': id,
                }
            });
        }

        function retrieveGrocery(searchBrandString, searchProductString) {
            return $http({
                method: 'GET'
                , url: 'api/grocery/'
                , params: {
                    'searchString1': searchBrandString,
                    'searchString2': searchProductString
                }
            });
        }

        // retrieveDeptDB retrieves department information from the server via HTTP GET. Passes information via the query
        // string (params) Parameters: searchString. Returns: Promise object
        function retrieveGroceryBrand(searchString) {
            return $http({
                method: 'GET'
                , url: 'api/grocery/brand'
                , params: {
                    'searchString': searchString
                }
            });
        }

        // retrieveDeptDB retrieves department information from the server via HTTP GET. Passes information via the query
        // string (params) Parameters: searchString. Returns: Promise object
        function retrieveGroceryProduct(searchString) {
            return $http({
                method: 'GET'
                , url: 'api/grocery/product'
                , params: {
                    'searchString': searchString
                }
            });
        }

        // updateDept uses HTTP PUT to update department name saved in DB; passes information as route parameters and via
        // HTTP HEADER BODY IMPORTANT! Route parameters are not the same as query strings!
        function updateBrand(id, brand) {
            return $http({
                method: 'PUT'
                , url: 'api/grocery/brand/'
                , data: {
                    id: id,
                    brand: brand
                }
            });
        }

        // updateDept uses HTTP PUT to update department name saved in DB; passes information as route parameters and via
        // HTTP HEADER BODY IMPORTANT! Route parameters are not the same as query strings!
        function updateName(id, name) {
            return $http({
                method: 'PUT'
                , url: 'api/grocery/product/'
                , data: {
                    id: id,
                    name: name
                }
            });
        }
        */
    }
})();