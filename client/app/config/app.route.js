(function () {
  angular
    .module("PAF")
    .config(UIRouterAppConfig);
  UIRouterAppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

  function UIRouterAppConfig($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl as ctrl',
          }
        },
        resolve: {
          user: function(PassportSvc) {
            return PassportSvc.userAuth()
              .then(function(result) {
                return result.data.user;
              })
              .catch(function(err) {
                return '';
              });
          }
        },
      })
      .state("login", {
        url: "/login",        
        views: {
          'menu': {
            // templateUrl: 'menu.html',
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl as ctrl',
          }
        },
        resolve: {
          user: function(PassportSvc) {
            return PassportSvc.userAuth()
              .then(function(result) {
                return result.data.user;
              })
              .catch(function(err) {
                return '';
              });
          }
        },
      })
      // .state("register", {
      //   url: "/register",        
      //   views: {
      //     'menu': {
      //       // templateUrl: 'menu.html',
      //       templateUrl: 'app/menu/menu.html',
      //       controller: 'MenuCtrl as ctrl',
      //     },
      //     'content': {
      //       templateUrl: 'app/registration/register.html',
      //       controller: 'RegCtrl as ctrl',
      //     }
      //   }
      // })
      .state("register", {
        url: "/register",        
        views: {
          'menu': {
            // templateUrl: 'menu.html',
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/registration/register.html',
            controller: 'RegCtrl as ctrl',
          }
        },
        resolve: {
          user: function(PassportSvc) {
            return PassportSvc.userAuth()
              .then(function(result) {
                return result.data.user;
              })
              .catch(function(err) {
                return '';
              });
          }
        },
      })
      .state('userhome', {
        url: '/api/home',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/upcoming/upcoming.html',
            controller: 'UpcomingCtrl as ctrl',
          }
        },
        resolve: {
          user: function(PassportSvc) {
            return PassportSvc.userAuth()
              .then(function(result) {
                return result.data.user;
              })
              .catch(function(err) {
                return '';
              });
          }
        },
      })
      .state('pastevent', {
        url: '/api/pastevent',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/member_event_history/past_event.html',
            controller: 'PastEventCtrl as ctrl',
          }
        },
        // resolve: {
        //   user: function(PassportSvc) {
        //     return PassportSvc.userAuth()
        //       .then(function(result) {
        //         return result.data.user;
        //       })
        //       .catch(function(err) {
        //         return '';
        //       });
        //   }
        // },
      })
            .state("user_eventsignup", {
                    url: "/user_eventsignup",
                    templateUrl: "app/user_event/signup/user_eventsignup.html",
                    controller: "UserEventSignupCtrl",
                    controllerAs: "ctrl"
            })
            .state("user_eventedit", {
                    url: "/user_eventedit",
                    templateUrl: "app/user_event/eventedit/user_eventedit.html",
                    controller: "UserEventEditCtrl",
                    controllerAs: "ctrl"
            })
            .state("user_eventdetails", {
                    url: "/user_eventdetails",
                    templateUrl: "app/user_event/eventdetails/user_eventdetails.html",
                    controller: "UserEventDetailsCtrl",
                    controllerAs: "ctrl"
            })
            .state('user_eventsubmission', {
                    url:'/user_eventsubmission',
                    templateUrl: 'app/user_event/submission/user_eventsubmission.html',
                    controller: "UserEventSubmissionCtrl",
                    controllerAs: "ctrl"
            })
            .state('user_eventbrief', {
                    url:'/user_eventbrief',
                    templateUrl: 'app/user_event/brief/user_eventbrief.html',
                    controller: "UserEventBriefCtrl",
                    controllerAs: "ctrl"
            })
            .state('user_eventfeedback', {
                    url:'/user_eventfeedback',
                    templateUrl: 'app/user_event/feedback/user_eventfeedback.html',
                    controller: "UserEventFeedbackCtrl",
                    controllerAs: "ctrl"
            })
            .state('user_eventattendance', {
                    url:'/user_eventattendance',
                    templateUrl: 'app/user_event/attendance/user_eventattendance.html',
                    controller: "UserEventAttendanceCtrl",
                    controllerAs: "ctrl"
            })
            .state('user_eventdebrief', {
                    url:'/user_eventdebrief',
                    templateUrl: 'app/user_event/attendance/user_eventdebrief.html',
                    controller: "UserEventDebriefCtrl",
                    controllerAs: "ctrl"
            })
            .state('analytics_userdetails', {
                    url:'/analytics_userdetails',
                    templateUrl: 'app/analytics/analytics_userdetails/analytics_userdetails.html',
                    controller: "AnalyticsUserDetailsCtrl",
                    controllerAs: "ctrl"
            })
      ;

    $urlRouterProvider.otherwise("/home");
  }
})();
