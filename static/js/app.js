(function(){
   var app = angular.module('tasks', ['ui.bootstrap']);

   app.controller('TaskController', ['$http', '$scope', function($http, $scope){
      var tc = this;
      tc.tasks = [];

      $scope.getType = function(progress, max){
         var value = progress / max;
         if(value < 0.25){
            return 'danger';
         } else if(value < 0.75){
            return 'warning';
         } else {
            return 'success';
         }
      };

      $scope.addTask = function(){
         alert("Got here!");
      };

      $scope.incTask = function(task){
         if(task.progress < task.weeklyfreq){
            task.progress += 1;
         }
         $http.get('/incProgress/?taskname='+task.name);
      };

      $scope.resetTask = function(task){
         task.progress = 0;
         $http.get('/resetProgress/?taskname='+task.name);
      }

      $http.get('/api/v1/task/?format=json').success(function(data){
         tc.tasks = data.objects;
      });
   }]);
})();
