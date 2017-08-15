(function () {
    angular
        .module("PAF")          
        .controller("AnalyticsUserSearchCtrl", AnalyticsUserSearchCtrl);    

    AnalyticsUserSearchCtrl.$inject = [ 'user' ];

    function AnalyticsUserSearchCtrl(user) {

        var vm = this;
        if (user) {
            vm.parseuser = user;
            vm.user = vm.parseuser.split(',')[0];
            vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
        }

    } // END AnalyticsUserSearchCtrl

})();