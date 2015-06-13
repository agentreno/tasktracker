(function(){
   var app = angular.module('tasks', 
         ['ngRoute', 'ngAnimate', 'controllers', 'ui.bootstrap']);
   app.config(['$routeProvider',
      function($routeProvider) {
         $routeProvider.
            when('/tasks', {
               templateUrl: 'partials/dashboard.html',
               controller: 'TaskController'
            })
            .when('/stats', {
               templateUrl: 'partials/stats.html',
               controller: 'TaskController'
            })
            .otherwise({
               redirectTo: '/tasks'
            });
      }
   ]);
})();
