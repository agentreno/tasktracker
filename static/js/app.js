(function(){
   var app = angular.module('tasks', 
         ['ui.router', 'controllers', 'ui.bootstrap', 'ngAnimate']);
   app.config(
      function($stateProvider, $urlRouterProvider) {
         $urlRouterProvider.otherwise('/');
         $stateProvider
            .state('dashboard', {
               url: '/',
               templateUrl: 'partials/dashboard.html',
               controller: 'TaskController'
            })
            .state('stats', {
               url: '/',
               templateUrl: 'partials/stats.html',
               controller: 'TaskController'
            });
      }
   );
})();
