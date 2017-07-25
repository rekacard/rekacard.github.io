// TODO: Search(specific), Update, Delete
// TODO: 3. Build controller for edit html. Should support functionalities listed in edit.html
(function () {
    'use strict';
    angular
        .module("DMS")
        .controller("NewEditCtrl", NewEditCtrl);

    // NewEditCtrl.$inject = ["$filter", "DeptService", "$stateParams"];
    NewEditCtrl.$inject = ["GroceryService"];

    // function NewEditCtrl($filter, DeptService, $stateParams) {
    function NewEditCtrl(GroceryService) {

        // Declares the var vm (for ViewModel) and assigns it the object this. Any function or variable that you attach
        // to vm will be exposed to callers of NewEditCtrl, e.g., edit.html
        var vm = this;

        // Exposed data models -----------------------------------------------------------------------------------------
        // Creates a department object. We expose the department object by attaching it to the vm. This allows us to
        // apply two-way data-binding to this object by using ng-model in our view (i.e., index.html)
        vm.id = 0;
        vm.result = {};

        // Exposed functions ------------------------------------------------------------------------------------------
        // Exposed functions can be called from the view.
        vm.initDetails = initDetails;
        vm.create = create;


        // Initializations --------------------------------------------------------------------------------------------
        // Functions that are run when view/html is loaded
        initDetails();

        // if ($stateParams.dept_no) {
        //     console.log("Received stateParams.dept_no: " + $stateParams.dept_no);
        //     vm.dept_no = $stateParams.dept_no;
        // }

        // Initializes department details shown in view
        function initDetails() {
            console.log("-- newedit.controller.js > initDetails()");
            vm.result.id = 0;
            vm.result.brand = "";
            vm.result.name = "";
            vm.result.upc12 = "";
        }

        function create() {
            console.log("-- newedit.controller.js > create()");
        }
    }
})();