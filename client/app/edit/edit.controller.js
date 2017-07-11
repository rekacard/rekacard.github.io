// TODO: Search(specific), Update, Delete
// TODO: 3. Build controller for edit html. Should support functionalities listed in edit.html
(function () {
    'use strict';
    angular
        .module("DMS")
        .controller("EditCtrl", EditCtrl);

    EditCtrl.$inject = ["$filter", "GroceryService", "$stateParams"];

    function EditCtrl($filter, GroceryService, $stateParams) {

        // Declares the var vm (for ViewModel) and assigns it the object this. Any function or variable that you attach
        // to vm will be exposed to callers of EditCtrl, e.g., edit.html
        var vm = this;

        // Exposed data models -----------------------------------------------------------------------------------------
        // Creates a department object. We expose the department object by attaching it to the vm. This allows us to
        // apply two-way data-binding to this object by using ng-model in our view (i.e., index.html)
        vm.id = 0;
        vm.result = {};
        vm.brand = "";
        vm.name = "";
        vm.imgpath1 = "http://www.barcodes4.me/barcode/c128a/";
        vm.imgpath2 = ".png?IsTextDrawn=1";

        // Exposed functions ------------------------------------------------------------------------------------------
        // Exposed functions can be called from the view.
        vm.initDetails = initDetails;
        // vm.search = search;
        // vm.deleteManager = deleteManager;
        vm.toggleEditor = toggleEditor;
        // vm.updateDeptName = updateDeptName;
        vm.updateBrand = updateBrand;
        vm.updateProductName = updateProductName;

        // Initializations --------------------------------------------------------------------------------------------
        // Functions that are run when view/html is loaded
        initDetails();

        if ($stateParams.id > 0) {
            console.log("Received stateParams.dept_no: " + $stateParams.id);
            vm.id = $stateParams.id;
            // vm.search();
            search();
        }



        // Initializes department details shown in view
        function initDetails() {
            console.log("-- edit.controller.js > initDetails()");
            vm.result.id = 0;
            vm.result.upc12 = "";
            vm.result.brand = "";
            vm.result.name = "";
            vm.result.imgpath = "";
            vm.brand = "";
            vm.name = "";
            vm.showDetails = false;
            vm.isEditorOn = false;
        }

        // Given a department number, this function searches the Employees database for
        // the department name, and the latest department manager's id/name and tenure
        function search() {
            console.log("-- edit.controller.js > search()");
            initDetails();
            vm.showDetails = true;

            GroceryService
                .retrieveGroceryByID(vm.id)
                .then(function (result) {
                    // Show table structure
                    vm.showDetails = true;

                    // This is a good way to understand the type of results you're getting
                    console.log("-- edit.controller.js > search() > results: \n" + JSON.stringify(result.data));

                    // Exit .then() if result data is empty
                    if (!result.data)
                        return;

                    // The result is an array of objects that contain only 1 object
                    // We are assigning value like so, so that we don't have to do access complex structures
                    // from the view. Also this would give you a good sense of the structure returned.
                    // You could, of course, massage data from the back end so that you get a simpler structure
                    vm.result.id = result.data.id;
                    vm.result.upc12 = result.data.upc12;
                    vm.result.brand = result.data.brand;
                    vm.result.name = result.data.name;
                    vm.result.imgpath = vm.imgpath1 + vm.result.upc12 + vm.imgpath2;
                    vm.brand = vm.result.brand;
                    vm.name = vm.result.name;


                    // vm.result.dept_no = result.data.dept_no;
                    // vm.result.dept_name = result.data.dept_name;
                    // if (result.data.managers[0]) {
                    //     vm.result.manager_id = result.data.managers[0].emp_no;
                    //     vm.result.manager_name = result.data.managers[0].employee.first_name
                    //         + " "
                    //         + result.data.managers[0].employee.last_name;
                    //     vm.result.manager_from = $filter('date')
                    //     (result.data.managers[0].from_date, 'MMM dd, yyyy');
                    //     vm.result.manager_to = $filter('date')
                    //     (result.data.managers[0].to_date, 'MMM dd, yyyy');
                    // }
                })
                .catch(function (err) {
                    console.log("--  show.controller.js > search() > error: \n" + JSON.stringify(err));
                });
        }

        // Saves edited department name
        function updateBrand() {
            console.log("-- edit.controller.js > updateBrand()");
            vm.result.brand = vm.brand;            
            GroceryService
                .updateBrand(vm.id, vm.result.brand)
                .then(function (result) {
                    console.log("-- edit.controller.js > updateBrand() > results: \n" + JSON.stringify(result.data));
                })
                .catch(function (err) {
                    console.log("--  edit.controller.js > updateBrand() > error: \n" + JSON.stringify(err));
                });
            vm.toggleEditor();
        }

        // Saves edited department name
        function updateProductName() {
            console.log("-- edit.controller.js > updateProductName()");
            vm.result.name = vm.name;            
            GroceryService
                .updateName(vm.id, vm.result.name)
                .then(function (result) {
                    console.log("-- edit.controller.js > updateProductName() > results: \n" + JSON.stringify(result.data));
                })
                .catch(function (err) {
                    console.log("--  edit.controller.js > updateProductName() > error: \n" + JSON.stringify(err));
                });
            vm.toggleEditor();
        }

        // // Saves edited department name
        // function updateDeptName() {
        //     console.log("-- show.controller.js > save()");
        //     DeptService
        //         .updateDept(vm.dept_no, vm.result.dept_name)
        //         .then(function (result) {
        //             console.log("-- show.controller.js > save() > results: \n" + JSON.stringify(result.data));
        //         })
        //         .catch(function (err) {
        //             console.log("--  show.controller.js > save() > error: \n" + JSON.stringify(err));
        //         });
        //     vm.toggleEditor();
        // }

        // // Given a department number, this function searches the Employees database for
        // // the department name, and the latest department manager's id/name and tenure
        // function search() {
        //     console.log("-- show.controller.js > search()");
        //     initDetails();
        //     vm.showDetails = true;

        //     DeptService
        //         .retrieveDeptByID(vm.dept_no)
        //         .then(function (result) {
        //             // Show table structure
        //             vm.showDetails = true;

        //             // This is a good way to understand the type of results you're getting
        //             console.log("-- show.controller.js > search() > results: \n" + JSON.stringify(result.data));

        //             // Exit .then() if result data is empty
        //             if (!result.data)
        //                 return;

        //             // The result is an array of objects that contain only 1 object
        //             // We are assigning value like so, so that we don't have to do access complex structures
        //             // from the view. Also this would give you a good sense of the structure returned.
        //             // You could, of course, massage data from the back end so that you get a simpler structure
        //             vm.result.dept_no = result.data.dept_no;
        //             vm.result.dept_name = result.data.dept_name;
        //             if (result.data.managers[0]) {
        //                 vm.result.manager_id = result.data.managers[0].emp_no;
        //                 vm.result.manager_name = result.data.managers[0].employee.first_name
        //                     + " "
        //                     + result.data.managers[0].employee.last_name;
        //                 vm.result.manager_from = $filter('date')
        //                 (result.data.managers[0].from_date, 'MMM dd, yyyy');
        //                 vm.result.manager_to = $filter('date')
        //                 (result.data.managers[0].to_date, 'MMM dd, yyyy');
        //             }
        //         })
        //         .catch(function (err) {
        //             console.log("--  show.controller.js > search() > error: \n" + JSON.stringify(err));
        //         });
        // }

        // // Function declaration and definition -------------------------------------------------------------------------
        // // Deletes displayed manager. Details of preceding manager is then displayed.
        // function deleteManager() {
        //     DeptService
        //         .deleteDept(vm.dept_no, vm.result.manager_id)
        //         .then(function (response) {
        //             // Calls search() in order to populate manager info with predecessor of deleted manager
        //             search();
        //         })
        //         .catch(function (err) {
        //             // We console.log the error. For a more graceful way of handling the error, see
        //             // register.controller.js
        //             console.log("error: \n" + JSON.stringify(err));
        //         });
        // }

        // Switches editor state of the department name input/edit field
        function toggleEditor() {
            vm.isEditorOn = !(vm.isEditorOn);
            vm.brand = vm.result.brand;
            vm.name = vm.result.name;
        }
    }
})();