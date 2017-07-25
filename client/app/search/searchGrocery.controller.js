(function () {
    angular
        .module("DMS")
        .controller("SearchGroceryCtrl", SearchGroceryCtrl);

    SearchGroceryCtrl.$inject = ['GroceryService'];

    function SearchGroceryCtrl(GroceryService) {
        var vm = this;

        vm.searchBrandString = '';
        vm.searchProductString = '';
        vm.result = null;
        vm.showGrocery = false;
        vm.imgpath1 = "http://www.barcodes4.me/barcode/c128a/";
        vm.imgpath2 = ".png?IsTextDrawn=1";
//        vm.imgpath = "";
        // vm.showManager = false;

        // Exposed functions ------------------------------------------------------------------------------------------
        // Exposed functions can be called from the view.
        vm.search = search;
        vm.searchBrand = searchBrand;
        vm.searchProduct = searchProduct;

        // The search function searches for departments that matches query string entered by user. The query string is
        // matched against the department name and department number alike.
        function search() {
            vm.showGrocery = false;

            if ((vm.searchBrandString && vm.searchProductString)) {
                console.log("search");
                GroceryService
                    // we pass contents of vm.searchString to service so that we can search the DB for this string
                    .retrieveGrocery(vm.searchBrandString, vm.searchProductString)
                    .then(function (results) {
                        // The result returned by the DB contains a data object, which in turn contains the records read
                        // from the database
                        vm.grocery = results.data;
                        for (var i in vm.grocery) {
                            var grocery = vm.grocery[i];
                            vm.grocery[i].imgpath = vm.imgpath1 + grocery.upc12 + vm.imgpath2;
                        }
                        vm.showGrocery = true;
                    })
                    .catch(function (err) {
                        // We console.log the error. For a more graceful way of handling the error, see
                        // register.controller.js
                        console.log("error " + err);
                    });
            } else if (vm.searchBrandString) {
                console.log("searchBrand");
                searchBrand();
            } else if (vm.searchProductString) {
                console.log("searchProduct");
                searchProduct();
            }

        }

        // The search function searches for departments that matches query string entered by user. The query string is
        // matched against the department name and department number alike.
        function searchBrand() {
            vm.showGrocery = false;
            GroceryService
                // we pass contents of vm.searchString to service so that we can search the DB for this string
                .retrieveGroceryBrand(vm.searchBrandString)
                .then(function (results) {
                    // The result returned by the DB contains a data object, which in turn contains the records read
                    // from the database
                    vm.grocery = results.data;
                    for (var i in vm.grocery) {
                        var grocery = vm.grocery[i];
                        vm.grocery[i].imgpath = vm.imgpath1 + grocery.upc12 + vm.imgpath2;
                    }
                    vm.showGrocery = true;
                })
                .catch(function (err) {
                    // We console.log the error. For a more graceful way of handling the error, see
                    // register.controller.js
                    console.log("error " + err);
                });
        }

        // The search function searches for departments that matches query string entered by user. The query string is
        // matched against the department name and department number alike.
        function searchProduct() {
            vm.showGrocery = false;
            GroceryService
                // we pass contents of vm.searchString to service so that we can search the DB for this string
                .retrieveGroceryProduct(vm.searchProductString)
                .then(function (results) {
                    // The result returned by the DB contains a data object, which in turn contains the records read
                    // from the database
                    vm.grocery = results.data;
                    for (var i in vm.grocery) {
                        var grocery = vm.grocery[i];
                        vm.grocery[i].imgpath = vm.imgpath1 + grocery.upc12 + vm.imgpath2;
                    }
                    vm.showGrocery = true;
                })
                .catch(function (err) {
                    // We console.log the error. For a more graceful way of handling the error, see
                    // register.controller.js
                    console.log("error " + err);
                });
        }







        /*
        
                // Initializations --------------------------------------------------------------------------------------------
                // Functions that are run when view/html is loaded
                // init is a private function (i.e., not exposed)
                init();
        
                // Function declaration and definition -------------------------------------------------------------------------
                // The init function initializes view
                function init() {
                    // We call GroceryService.retrieveGroceryDB to handle retrieval of department information. The data retrieved
                    // from this function is used to populate search.html. Since we are initializing the view, we want to
                    // display all available departments, thus we ask service to retrieve '' (i.e., match all)
                    GroceryService
                        .retrieveGroceryDB('')
                        .then(function (results) {
                            // The result returned by the DB contains a data object, which in turn contains the records read
                            // from the database
                            vm.departments = results.data;
                        })
                        .catch(function (err) {
                            // We console.log the error. For a more graceful way of handling the error, see
                            // register.controller.js
                            console.log("error " + err);
                        });
                }
        
        
                // The search function searches for departments that matches query string entered by user. The query string is
                // matched against the department name and department number alike.
                function search() {
                    vm.showManager = false;
                    GroceryService
                        // we pass contents of vm.searchString to service so that we can search the DB for this string
                        .retrieveGroceryDB(vm.searchString)
                        .then(function (results) {
                            // The result returned by the DB contains a data object, which in turn contains the records read
                            // from the database
                            vm.departments = results.data;
                        })
                        .catch(function (err) {
                            // We console.log the error. For a more graceful way of handling the error, see
                            // register.controller.js
                            console.log("error " + err);
                        });
                }
        
        
                // The search function searches for departments that matches query string entered by user. The query string is
                // matched against the department name and department number alike.
                function searchForManager() {
                    vm.showManager = true;
                    GroceryService
                    // we pass contents of vm.searchString to service so that we can search the DB for this string
                        .retrieveGroceryManager(vm.searchString)
                        .then(function (results){
                            // The result returned by the DB contains a data object, which in turn contains the records read
                            // from the database
                            console.log("results: " + JSON.stringify(results.data));
                            vm.departments = results.data;
                        })
                        .catch(function (err) {
                            // We console.log the error. For a more graceful way of handling the error, see
                            // register.controller.js
                            console.info("error " + JSON.stringify(err));
                        });
                }
                */
    }
})();