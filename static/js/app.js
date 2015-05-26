(function(){
   var app = angular.module('tasks', ['ui.bootstrap']);

   app.controller('TaskController', ['$http', '$scope', function($http, $scope){
      var tc = this;
      this.tasklist = [];

      this.getType = function(progress, max){
         var value = progress / max;
         if(value < 0.25){
            return 'danger';
         } else if(value < 0.75){
            return 'warning';
         } else {
            return 'success';
         }
      };

      this.addTask = function(task){
         $http.get('/addTask?taskname='+task.name+
               '&taskdesc='+task.desc+
               '&taskfreq='+task.freq);
         tc.tasklist.push({
            "name":task.name,
            "description":task.desc,
            "weeklyfreq":task.freq,
            "progress":0
         });
         task.name = "";
         task.desc = "";
         task.freq = 0;
      };

      this.incTask = function(task){
         if(task.progress < task.weeklyfreq){
            task.progress += 1;
         }
         $http.get('/incProgress/?taskname='+task.name);
      };

      this.resetTask = function(task){
         task.progress = 0;
         $http.get('/resetProgress/?taskname='+task.name);
      };

      this.deleteTask = function(task){
         tc.tasklist = tc.tasklist.filter(function(oldtask){
            return oldtask.name != task.name;
         });
         $http.get('/deleteTask/?taskname='+task.name);
      };

      $http.get('/api/v1/task/?format=json').success(function(data){
         tc.tasklist = data.objects;
      });
   }]);
})();
