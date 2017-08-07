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
      .state("user_eventsignup", {
        url: "/api/user_eventsignup",
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/user_event/signup/user_eventsignup.html',
            controller: 'UserEventSignupCtrl as ctrl',
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
      .state("user_eventedit", {
        url: "/api/user_eventedit",
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/user_event/eventedit/user_eventedit.html',
            controller: 'UserEventEditCtrl as ctrl',
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
      .state("user_eventdetails", {
        url: "/api/user_eventdetails",
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/user_event/eventdetails/user_eventdetails.html',
            controller: 'UserEventDetailsCtrl as ctrl',
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
      .state('user_eventsubmission', {
        url:'/api/user_eventsubmission',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/user_event/submission/user_eventsubmission.html',
            controller: 'UserEventSubmissionCtrl as ctrl',
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
      .state('user_eventbrief', {
        url:'/api/user_eventbrief',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/user_event/brief/user_eventbrief.html',
            controller: 'UserEventBriefCtrl as ctrl',
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
      .state('user_eventfeedback', {
        url:'/api/user_eventfeedback',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/user_event/feedback/user_eventfeedback.html',
            controller: 'UserEventFeedbackCtrl as ctrl',
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
      .state('user_eventattendance', {
        url:'/api/user_eventattendance',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/user_event/attendance/user_eventattendance.html',
            controller: 'UserEventAttendanceCtrl as ctrl',
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
      .state('user_eventdebrief', {
        url:'/api/user_eventdebrief',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/user_event/attendance/user_eventdebrief.html',
            controller: 'UserEventDebriefCtrl as ctrl',
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
      .state('analytics_userdetails', {
        url:'/api/analytics_userdetails',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_userdetails/analytics_userdetails.html',
            controller: 'AnalyticsUserDetailsCtrl as ctrl',
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
      ;

    $urlRouterProvider.otherwise("/home");
  }
})();
