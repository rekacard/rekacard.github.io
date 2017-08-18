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
    .state('userprofile', {
        url: '/api/userprofile',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/userprofile/userprofile.html',
            controller: 'ProfileCtrl as ctrl',
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
      .state('userprofileWithParam', {
        url: '/api/userprofile/:id',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/userprofile/userprofile.html',
            controller: 'ProfileParamCtrl as ctrl',
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
      .state("manage_eventupcoming", {
        url: "/api/manage_eventupcoming",
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/manage/eventupcoming/manage_eventupcoming.html',
            controller: 'EventUpcomingCtrl as ctrl',
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
      .state("manage_eventpast", {
        url: "/api/manage_eventpast",
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/manage/eventpast/manage_eventpast.html',
            controller: 'EventPastCtrl as ctrl',
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
      .state("manage_eventoverview", {
        url: "/api/manage_eventoverview/:id",
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/manage/eventoverview/manage_eventoverview.html',
            controller: 'EventOverviewCtrl as ctrl',
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
      .state("manage_eventdetails", {
        url: "/api/manage_eventdetails/:id",
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/manage/eventdetails/manage_eventdetails.html',
            controller: 'EventEditCtrl as ctrl',
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
      .state("manage_eventregister", {
        url: "/api/manage_eventregister",
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/manage/eventregister/manage_eventregister.html',
            controller: 'EventRegFormCtrl as ctrl',
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
      .state("manage_eventbrief", {
        url: "/api/manage_eventbrief",
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/manage/eventbrief/manage_eventbrief.html',
            controller: 'EventBriefCtrl as ctrl',
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
      .state("manage_eventvolunteer", {
        url: "/api/manage_eventvolunteer",
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/manage/eventvolunteer/manage_eventvolunteer.html',
            controller: 'EventVolMgmtCtrl as ctrl',
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
      .state("manage_eventdebrief", {
        url: "/api/manage_eventdebrief",
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/manage/eventdebrief/manage_eventdebrief.html',
            controller: 'EventDebriefCtrl as ctrl',
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
        url: "/api/user_eventsignup/:id",
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
        url: "/api/user_eventdetails/:id",
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
      .state('analytics_dashboard', {
        url:'/api/analytics_dashboard',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_dashboard/analytics_dashboard.html',
            controller: 'AnalyticsDashboardCtrl as ctrl',
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
      .state('analytics_userprofile', {
        url:'/api/analytics_userprofile',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_userprofile/analytics_userprofile.html',
            controller: 'AnalyticsUserProfileCtrl as ctrl',
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
      .state('edit_userprofile', {
        url:'/api/edit_userprofile',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/edit/edit_userprofile/edit_userprofile.html',
            controller: 'EditUserProfileCtrl as ctrl',
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
      .state('analytics_userprofileWithParam', {
        url:'/api/analytics_userprofile/:id',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_userprofile/analytics_userprofile.html',
            controller: 'AnalyticsUserProfileWithParamCtrl as ctrl',
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
      .state('analytics_userskills', {
        url:'/api/analytics_userskills',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_userskills/analytics_userskills.html',
            controller: 'AnalyticsUserSkillsCtrl as ctrl',
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
      .state('edit_userskills', {
        url:'/api/edit_userskills',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/edit/edit_userskills/edit_userskills.html',
            controller: 'EditUserSkillsCtrl as ctrl',
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
      .state('analytics_userexperience', {
        url:'/api/analytics_userexperience',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_userexperience/analytics_userexperience.html',
            controller: 'AnalyticsUserExperienceCtrl as ctrl',
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
      .state('edit_userexperience', {
        url:'/api/edit_userexperience',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/edit/edit_userexperience/edit_userexperience.html',
            controller: 'EditUserExperienceCtrl as ctrl',
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
      .state('analytics_userbadges', {
        url:'/api/analytics_userbadges',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_userbadges/analytics_userbadges.html',
            controller: 'AnalyticsUserBadgesCtrl as ctrl',
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
      .state('analytics_userupcoming', {
        url:'/api/analytics_userupcoming',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_userupcoming/analytics_userupcoming.html',
            controller: 'AnalyticsUserUpcomingCtrl as ctrl',
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
      .state('analytics_userhistory', {
        url:'/api/analytics_userhistory',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_userhistory/analytics_userhistory.html',
            controller: 'AnalyticsUserHistoryCtrl as ctrl',
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
      .state('analytics_useremergency', {
        url:'/api/analytics_useremergency',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_useremergency/analytics_useremergency.html',
            controller: 'AnalyticsUserEmergencyCtrl as ctrl',
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
      .state('edit_useremergency', {
        url:'/api/edit_useremergency',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/edit/edit_useremergency/edit_useremergency.html',
            controller: 'EditUserEmergencyCtrl as ctrl',
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
        url:'/api/analytics_userdetails/:id',
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
      .state('analytics_userpassword', {
        url:'/api/analytics_userpassword',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_userpassword/analytics_userpassword.html',
            controller: 'AnalyticsUserPasswordCtrl as ctrl',
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
      .state('analytics_usersearch', {
        url:'/api/analytics_usersearch',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuCtrl as ctrl',
          },
          'content': {
            templateUrl: 'app/analytics/analytics_usersearch/analytics_usersearch.html',
            controller: 'AnalyticsUserSearchCtrl as ctrl',
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
