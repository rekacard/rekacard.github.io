(function () {
    angular
        .module("PAF")          
        .controller("EditUserEmergencyCtrl", EditUserEmergencyCtrl);    

    EditUserEmergencyCtrl.$inject = [ 'user', 'UserService' ];

    function EditUserEmergencyCtrl(user, UserService) {

        var vm = this;
        vm.getname = getname;
        if (user) {
            vm.parseuser = user;
            vm.user = vm.parseuser.split(',')[0];
            vm.role = (vm.parseuser.split(',')[1] == '1')? '1':'';
            vm.getname();
        }
        
        function getname() {
        UserService.retrieveUserName(vm.user)
            .then(function(result) {
            // console.log(JSON.stringify(result));
            vm.name = result.data.salutation + ' ' + result.data.name_first + ' ' + result.data.name_last;
            })
            .catch(function(err) {
            console.log(err);
            });
        }
    } // END AnalyticsUserEmergencyCtrl
})();