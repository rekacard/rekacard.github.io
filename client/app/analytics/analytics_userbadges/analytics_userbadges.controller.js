(function () {
    angular
        .module("PAF")          
        .controller("AnalyticsUserBadgesCtrl", AnalyticsUserBadgesCtrl);    

    AnalyticsUserBadgesCtrl.$inject = [ 'user' ];

    function AnalyticsUserBadgesCtrl(user) {

        var vm = this;
        if (user) {
            vm.parseuser = user;
            vm.user = vm.parseuser.split(',')[0];
            vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
        }

    } // END AnalyticsUserBadgesCtrl

})();