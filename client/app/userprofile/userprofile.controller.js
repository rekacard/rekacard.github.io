//These are required for the TagsInput function

//TODO: install NPM (npm install ng-tags-input --save)
//TODO: install Bower (bower install ng-tags-input --save)
//TODO: Add this to index.html <script src="angular.js"></script> <script src="ng-tags-input.js"></script> <link rel="stylesheet" type="text/css" href="ng-tags-input.css">


// Always use an IIFE, i.e., (function() {})();
(function () {
    angular
        .module("PAF")
        .controller('ProfileCtrl', function($scope, $http) {
                $scope.tags = [
                    { text: 'just' },
                    { text: 'some' },
                    { text: 'cool' },
                    { text: 'tags' }
                ];
                $scope.loadTags = function(query) {
                     return $http.get('/tags?query=' + query);
                };
            });

    // EventCtrl function declaration. A function declaration uses the syntax: functionName([arg [, arg [...]]]){ ... }
    // EventCtrl accepts the injected dependency as a parameter. We name it DeptService for consistency, but you may
    // assign any name
    function ProfileCtrl() {

        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the EventCtrl)
        // Any function or variable that you attach to vm will be exposed to callers of EventCtrl, e.g., register.html
        var vm = this;

    } // END EventCtrl

})();