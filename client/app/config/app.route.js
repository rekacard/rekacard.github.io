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
      ;

    $urlRouterProvider.otherwise("/home");
  }
})();
