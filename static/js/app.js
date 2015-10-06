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

   app.controller("SliderController", function($scope){
      $scope.sliderconfig = {
         min: 1,
         max: 10,
         step: 1
      }

      $scope.freq = 1;

      $scope.setFreq = function(freq){
         $scope.freq = freq;
      }
   });

   app.directive("slider", function(){
      return {
         restrict: 'A',
         scope: {
            config: "=config",
            freq: "=model"
         },
         link: function(scope, elem, attrs) {
            var setModel = function(value){
               scope.model = value;
            }

            $(elem).slider({
               range: false,
               min: scope.config.min,
               max: scope.config.max,
               step: scope.config.step,
               slide: function(event, ui){
                  scope.$apply(function(){
                     scope.freq = ui.value;
                  });
               }
            });
         }
      }
   });
})();
