(function () {
    angular
        .module("PAF")          
        .controller("UserEventSubmissionCtrl", UserEventSubmissionCtrl);    

  UserEventSubmissionCtrl.$inject = [ 'user' ];

    function UserEventSubmissionCtrl(user) {

        var vm = this;
        if (user) {
            vm.parseuser = user;
            vm.user = vm.parseuser.split(',')[0];
            vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
        }

    } // END UserEventSubmissionCtrl

})();