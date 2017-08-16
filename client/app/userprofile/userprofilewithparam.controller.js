//These are required for the TagsInput function

//TODO: install NPM (npm install ng-tags-input --save)
//TODO: install Bower (bower install ng-tags-input --save)
//TODO: Add this to index.html <script src="angular.js"></script> <script src="ng-tags-input.js"></script> <link rel="stylesheet" type="text/css" href="ng-tags-input.css">

// Always use an IIFE, i.e., (function() {})();
(function () {
    angular
        .module("PAF")
        .controller("ProfileParamCtrl", ProfileParamCtrl);

    ProfileParamCtrl.$inject = ['user', '$scope', '$state', "$stateParams", 'UserService'];

    // ProfileParamCtrl function declaration. A function declaration uses the syntax: functionName([arg [, arg [...]]]){ ... }
    // ProfileParamCtrl accepts the injected dependency as a parameter. We name it DeptService for consistency, but you may
    // assign any name
    function ProfileParamCtrl(user, $scope, $state, $stateParams, UserService) {

        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the EventCtrl)
        // Any function or variable that you attach to vm will be exposed to callers of EventCtrl, e.g., register.html
        var vm = this;
        vm.submit = submit;
        vm.search = search;
        vm.edit = false;
        vm.salutation_control = {};

        vm.user = user;
        $scope.salutation = [ 
            {name:"-- select an option --", isdisabled: true},
            {name:"Dr", isdisabled: false},
            {name:"Mr", isdisabled: false},
            {name:"Ms", isdisabled: false},
            {name:"Mdm", isdisabled: false},
        ];

        $scope.tags = [
            { text: 'just' },
            { text: 'some' },
            { text: 'cool' },
            { text: 'tags' }
        ];
        $scope.loadTags = function(query) {
                return $http.get('/tags?query=' + query);
        };

        if ($stateParams.id) {
            // console.log("Received stateParams.user_id: " + $stateParams.id);
            vm.viewuser = parseInt($stateParams.id);
            vm.search();
        }
        
        function submit() {
            console.log("Save user profiles");
        }

        function search() {
            UserService.retrieveUser(vm.viewuser)
                .then(function(result) {
                    // console.log(JSON.stringify(result));
                    // vm.name = result.data.salutation + ' ' + result.data.name_first + ' ' + result.data.name_last;
                    vm.profile = result.data;
                    vm.salutation_control = result.data.salutation;
                })
                .catch(function(err) {
                console.log(err);
                });
        } // END search
    }
})();