(function () {
    angular
        .module("PAF")          
        .controller("UserEventBriefCtrl", UserEventBriefCtrl);    

    UserEventBriefCtrl.$inject = [ 'user' ];

    function UserEventBriefCtrl(user) {

        var vm = this;
        if (user) {
            vm.parseuser = user;
            vm.user = vm.parseuser.split(',')[0];
            vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
        }

    } // END UserEventBriefCtrl

})();