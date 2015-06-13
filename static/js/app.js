(function(){
   var app = angular.module('tasks', ['ngRoute', 'controllers', 'ui.bootstrap']);
   app.config(['$routeProvider',
      function($routeProvider) {
         $routeProvider.
            when('/tasks', {
               templateUrl: 'tasks.html',
               controller: 'TaskController'
            });
      }
   ]);
})();
