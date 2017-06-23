//Create an IIFE
(function() {

    //Create an angular app/module
    var MyApp = angular.module("MyApp", []);

    //Create a function constructor to be used as our controller
    var MyCtrl = function($http) {
        var myCtrl = this;

        myCtrl.name = "";
        myCtrl.email = "";
        // myCtrl.password1 = "";
        // myCtrl.password2 = "";
        // myCtrl.address = "";
        // myCtrl.country = "";
        // myCtrl.phone = "";
        // myCtrl.gender = "m";
        myCtrl.message = "Placeholder";

        myCtrl.clear = function() {
            myCtrl.name = "";
            myCtrl.email = "";
            myCtrl.dob = "";
            myCtrl.password1 = "";
            myCtrl.password2 = "";
            // myCtrl.address = "";
            // myCtrl.country = "";
            // myCtrl.phone = "";
            // myCtrl.gender = "m";
            myCtrl.errormsg = "";
            myCtrl.message = "Placeholder";
            console.log("Clear");
        }

        myCtrl.validateDOB = function(){
            const youngerByYear = 18; 
            var d = new Date();
            var date = JSON.stringify(myCtrl.dob);

            var year = d.getFullYear();
            var month = d.getMonth();
            var day = d.getDate();

            var dob_year = parseInt(date.substr(1,4));
            var dob_month = parseInt(date.substr(6,2));
            var dob_day = parseInt(date.substr(9,2));

            if (dob_year < (year - youngerByYear)) {
                return (true);
            }else if (dob_year > (year - youngerByYear)) {
                return (false);
            }

            if (dob_month < month) {
                return (true);
            }else if (dob_month > month) {
                return (false);
            }

            if (dob_day <= day) {
                return (true);
            }else if (dob_day > day) {
                return (false);
            }

            return (false);
        }

        myCtrl.validatePassword = function() {
            const passwordLength = 8;
            const len = myCtrl.password1.length;

            if (myCtrl.password1 != myCtrl.password2) {
                myCtrl.errormsg = "Password different";
                return (false);
            }

            if (myCtrl.password1.length < passwordLength) {
                myCtrl.errormsg = "Password length must be 8 character or longer";
                return (false);
            }

            var uppercase = lowercase = numeric = special = false;

            for (var i=0; i<len; i++) {
                var c = myCtrl.password1.substr(i,1);
                var d = c.charCodeAt(0);
                
                
                    if ((d >= 65) && (d<=90)) {
                        numeric = true;
                    }

                    // ASCII character from A - Z
                    if ((d >= 65) && (d <=90)) {
                        uppercase = true;
                    }

                    // ASCII character from a - z
                    if ((d >= 97) && (d<=122)) {
                        lowercase = true;                        
                    }

                    switch (d) {
                        case 64: case 35: case 36:
                            special = true;
                            break;
                    }
                // }

            }
            if (uppercase && lowercase && numeric && special)
                return (true);
        }

        myCtrl.submit = function() {

            if (!myCtrl.validateDOB()) {
                myCtrl.errormsg = "Age must be 18 years old";
                return;
            }

            if (!myCtrl.validatePassword()) {
                return;
            }

            console.log("Submit");

            $http.get("/register", {
                params: {
                    name: myCtrl.name,
                    email: myCtrl.email,
                }
            }).then(function(result) {
                // console.log(JSON.stringify(result))
                myCtrl.message = "Registration completed";
            }).catch(function() {
                // console.log(JSON.stringify(result))
                console.log("Get Fail");
                myCtrl.message = "Registration decline";
            })
        }
    };
    MyCtrl.$inject = [ "$http" ];
    //Register function constructor as controller
    MyApp.controller("MyCtrl", MyCtrl);

})();