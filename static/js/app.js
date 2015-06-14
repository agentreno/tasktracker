(function(){
   var app = angular.module('tasks', 
         ['ui.router', 'controllers', 'ui.bootstrap', 'hj.gsapifyRouter']);
   app.config(
      function($stateProvider, gsapifyRouterProvider) {
         gsapifyRouterProvider.defaults = {
            enter: 'fadeIn',
            leave: 'fadeOut'
         };

         gsapifyRouterProvider.initialTransitionEnabled = true;

         gsapifyRouterProvider.transition('fadeIn', {
            duration: 0.5,
            delay: 1,
            css: {
               opacity: 1
            }
         });
         gsapifyRouterProvider.transition('fadeOut', {
            duration: 0.5,
            css: {
               opacity: 0,
            }
         });
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
