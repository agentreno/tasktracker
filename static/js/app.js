(function(){
   var app = angular.module('tasks', []);

   app.controller('TaskController', ['$http', function($http){
      var tc = this;
      tc.tasks = [];

      $http.get('/api/v1/task/?format=json').success(function(data){
         tc.tasks = data.objects;
      });
   }]);
})();
