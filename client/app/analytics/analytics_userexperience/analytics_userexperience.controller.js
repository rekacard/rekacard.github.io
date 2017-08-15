(function () {
    angular
        .module("PAF")          
        .controller("AnalyticsUserExperienceCtrl", AnalyticsUserExperienceCtrl);    

    AnalyticsUserExperienceCtrl.$inject = [ 'user' ];

    function AnalyticsUserExperienceCtrl(user) {

        var vm = this;
        if (user) {
            vm.parseuser = user;
            vm.user = vm.parseuser.split(',')[0];
            vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
        }
    } // END AnalyticsUserExperienceCtrl

})();